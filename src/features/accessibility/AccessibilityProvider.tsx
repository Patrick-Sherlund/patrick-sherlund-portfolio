"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { RotateCcw, X } from "lucide-react";
import { useTheme } from "@/features/theme/ThemeProvider";
import { homeAssets } from "@/shared/media/asset-paths";

type AccessibilitySettings = {
  reduceMotion: boolean;
  accessibleFont: boolean;
  largeText: boolean;
  textSpacing: boolean;
  highContrast: boolean;
  underlineLinks: boolean;
  enhancedFocus: boolean;
  reduceTransparency: boolean;
  readingGuide: boolean;
};

type InteractiveScrollingControl = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

type AccessibilityContextValue = {
  setInteractiveScrollingControl: (control: InteractiveScrollingControl | null) => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | undefined>(undefined);

const ACCESSIBILITY_STORAGE_KEY = "portfolio-accessibility-settings";

const defaultSettings: AccessibilitySettings = {
  reduceMotion: false,
  accessibleFont: false,
  largeText: false,
  textSpacing: false,
  highContrast: false,
  underlineLinks: false,
  enhancedFocus: false,
  reduceTransparency: false,
  readingGuide: false,
};

const settingClassNames: Record<keyof AccessibilitySettings, string> = {
  reduceMotion: "a11y-reduce-motion",
  accessibleFont: "a11y-accessible-font",
  largeText: "a11y-large-text",
  textSpacing: "a11y-text-spacing",
  highContrast: "a11y-high-contrast",
  underlineLinks: "a11y-underline-links",
  enhancedFocus: "a11y-enhanced-focus",
  reduceTransparency: "a11y-reduce-transparency",
  readingGuide: "a11y-reading-guide-enabled",
};

function readStoredSettings() {
  if (typeof window === "undefined") {
    return defaultSettings;
  }

  const stored = window.localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
  if (!stored) {
    return defaultSettings;
  }

  try {
    const parsed = JSON.parse(stored) as Partial<AccessibilitySettings>;
    return {
      ...defaultSettings,
      ...Object.fromEntries(
        Object.entries(defaultSettings).map(([key]) => [key, parsed[key as keyof AccessibilitySettings] === true])
      ),
    } as AccessibilitySettings;
  } catch {
    return defaultSettings;
  }
}

function SettingSwitch({
  checked,
  disabled = false,
  label,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className={`accessibility-option ${disabled ? "disabled" : ""}`}>
      <span className="accessibility-option-label">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span className="accessibility-switch" aria-hidden="true">
        <span className="accessibility-switch-thumb" />
      </span>
    </label>
  );
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [settings, setSettings] = useState(defaultSettings);
  const [isOpen, setIsOpen] = useState(false);
  const [interactiveScrollingControl, setInteractiveScrollingControl] =
    useState<InteractiveScrollingControl | null>(null);
  const [guideTop, setGuideTop] = useState<number | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotionPausedVideosRef = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    setSettings(readStoredSettings());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(settingClassNames).forEach(([key, className]) => {
      root.classList.toggle(className, settings[key as keyof AccessibilitySettings]);
    });
    window.localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    panelRef.current?.focus();

    const handlePointerDown = (event: PointerEvent) => {
      if (!widgetRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !widgetRef.current) {
        return;
      }

      const focusableElements = Array.from(
        widgetRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!activeElement || !focusableElements.includes(activeElement as HTMLElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!settings.readingGuide) {
      setGuideTop(null);
      return;
    }

    setGuideTop(Math.round(window.innerHeight / 2));

    const handlePointerMove = (event: PointerEvent) => {
      setGuideTop(event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        setGuideTop(touch.clientY);
      }
    };

    const handleFocusIn = (event: FocusEvent) => {
      const element = event.target;
      if (!(element instanceof HTMLElement) || widgetRef.current?.contains(element)) {
        return;
      }

      const rect = element.getBoundingClientRect();
      setGuideTop(Math.round(rect.top + rect.height / 2));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [settings.readingGuide]);

  useEffect(() => {
    if (settings.reduceMotion) {
      const playingVideos = Array.from(document.querySelectorAll("video")).filter(
        (video) => !video.paused
      );
      reduceMotionPausedVideosRef.current = playingVideos;
      playingVideos.forEach((video) => {
        video.pause();
      });
      return;
    }

    const pausedVideos = reduceMotionPausedVideosRef.current;
    reduceMotionPausedVideosRef.current = [];
    pausedVideos.forEach((video) => {
      if (video.isConnected && video.autoplay && video.muted) {
        video.play().catch(() => undefined);
      }
    });
  }, [settings.reduceMotion]);

  const updateSetting = useCallback(
    (setting: keyof AccessibilitySettings, value: boolean) => {
      if (setting === "reduceMotion" && value) {
        interactiveScrollingControl?.setEnabled(false);
      }

      setSettings((currentSettings) => ({
        ...currentSettings,
        [setting]: value,
      }));
    },
    [interactiveScrollingControl]
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  const contextValue = useMemo(
    () => ({
      setInteractiveScrollingControl,
    }),
    []
  );
  const accessibilityIcon =
    isOpen || theme === "dark" ? homeAssets.accessibilityWhiteIcon : homeAssets.accessibilityBlackIcon;

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
      <div className="accessibility-widget" ref={widgetRef}>
        {isOpen && (
          <div
            className="accessibility-panel"
            id="accessibility-panel"
            role="dialog"
            aria-labelledby="accessibility-panel-title"
            tabIndex={-1}
            ref={panelRef}
          >
            <div className="accessibility-panel-header">
              <h2 id="accessibility-panel-title">Accessibility</h2>
              <div className="accessibility-panel-actions">
                <button
                  type="button"
                  className="accessibility-icon-button"
                  aria-label="Reset accessibility settings"
                  onClick={resetSettings}
                >
                  <RotateCcw size={17} strokeWidth={2.2} />
                </button>
                <button
                  type="button"
                  className="accessibility-icon-button"
                  aria-label="Close accessibility settings"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={18} strokeWidth={2.2} />
                </button>
              </div>
            </div>

            <div className="accessibility-options">
              {interactiveScrollingControl && (
                <SettingSwitch
                  label="Interactive scrolling"
                  checked={interactiveScrollingControl.enabled}
                  disabled={settings.reduceMotion}
                  onChange={(checked) => interactiveScrollingControl.setEnabled(checked)}
                />
              )}
              <SettingSwitch
                label="Reduce motion"
                checked={settings.reduceMotion}
                onChange={(checked) => updateSetting("reduceMotion", checked)}
              />
              <SettingSwitch
                label="Accessible font"
                checked={settings.accessibleFont}
                onChange={(checked) => updateSetting("accessibleFont", checked)}
              />
              <SettingSwitch
                label="Larger text"
                checked={settings.largeText}
                onChange={(checked) => updateSetting("largeText", checked)}
              />
              <SettingSwitch
                label="Text spacing"
                checked={settings.textSpacing}
                onChange={(checked) => updateSetting("textSpacing", checked)}
              />
              <SettingSwitch
                label="High contrast"
                checked={settings.highContrast}
                onChange={(checked) => updateSetting("highContrast", checked)}
              />
              <SettingSwitch
                label="Underline links"
                checked={settings.underlineLinks}
                onChange={(checked) => updateSetting("underlineLinks", checked)}
              />
              <SettingSwitch
                label="Enhanced focus"
                checked={settings.enhancedFocus}
                onChange={(checked) => updateSetting("enhancedFocus", checked)}
              />
              <SettingSwitch
                label="Reduce transparency"
                checked={settings.reduceTransparency}
                onChange={(checked) => updateSetting("reduceTransparency", checked)}
              />
              <SettingSwitch
                label="Reading guide"
                checked={settings.readingGuide}
                onChange={(checked) => updateSetting("readingGuide", checked)}
              />
            </div>
          </div>
        )}

        <button
          type="button"
          className={`accessibility-toggle ${isOpen ? "active" : ""}`}
          aria-label={isOpen ? "Close accessibility settings" : "Open accessibility settings"}
          aria-controls="accessibility-panel"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((currentIsOpen) => !currentIsOpen)}
        >
          <img src={accessibilityIcon} alt="" aria-hidden="true" />
        </button>
      </div>
      {settings.readingGuide && guideTop !== null && (
        <div className="accessibility-reading-guide" style={{ top: `${guideTop}px` }} aria-hidden="true" />
      )}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}
