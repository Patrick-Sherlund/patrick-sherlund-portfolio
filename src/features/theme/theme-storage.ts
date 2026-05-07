export type Theme = "light" | "dark";

const THEME_KEY = "theme";

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const theme = window.localStorage.getItem(THEME_KEY);
  return theme === "light" || theme === "dark" ? theme : null;
}

export function setStoredTheme(theme: Theme) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(THEME_KEY, theme);
}
