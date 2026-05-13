"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";

const trainingLog = `Plotting labels to /home/patrick/ml/bishop/runs/y12_phase4_mixed20k_ms102/labels.jpg...
optimizer: AdamW(lr=0.001, momentum=0.937) with parameter groups 113 weight(decay=0.0), 120 weight(decay=0.0006000000000000001), 119 bias(decay=0.0)
Resuming training /home/patrick/ml/bishop/runs/y12_phase4_mixed20k_ms10/weights/best.pt from epoch 10 to 16 total epochs
Closing dataloader mosaic
Image sizes 1024 train, 1024 val
Using 16 dataloader workers
Logging results to /home/patrick/ml/bishop/runs/y12_phase4_mixed20k_ms102
Starting training for 16 epochs...

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        10/16       0.545G      1.619      1.112      1.324          5        1024: 100% ---------- 3334/3334 3.1it/s 17:53<0.4s
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 3.8it/s 8.9s0.2s
               all        400        995      0.829      0.701      0.773      0.401

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        11/16       12.6G      1.596      1.067      1.312          1        1024: 100% ---------- 3334/3334 3.4it/s 16:19<0.7s
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 3.8it/s 9.0s0.2s
               all        400        995      0.827      0.707      0.776      0.405

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        12/16       14.3G      1.583      1.038      1.302          6        1024: 100% ---------- 3334/3334 2.0it/s 27:17<0.7s
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 3.4it/s 10.1s.2ss
               all        400        995      0.841      0.709      0.783      0.409

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        13/16       13.9G       1.56      1.004      1.294          7        1024: 100% ---------- 3334/3334 0.7it/s 1:17:23<1.9ss
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 2.6it/s 13.2s0.2s
               all        400        995      0.838      0.713      0.788      0.413

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        14/16       14.3G      1.537     0.9718      1.278          3        1024: 100% ---------- 3334/3334 1.7it/s 32:46<0.8ss
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 3.7it/s 9.1s0.2s
               all        400        995      0.839      0.717       0.79      0.415

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        15/16       13.9G      1.511     0.9412      1.264         15        1024: 100% ---------- 3334/3334 0.9it/s 1:03:16<1.4ss
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 4.8it/s 7.1s0.2s
               all        400        995      0.847      0.718      0.795      0.418

        Epoch     GPU_mem   box_loss   cls_loss   dfl_loss  Instances        Size
        16/16       13.9G      1.509     0.9307      1.264         60        1024: 100% ---------- 3334/3334 0.7it/s 1:18:26<1.9ss
             Class     Images  Instances      Box(P          R      mAP50  mAP50-95): 100% ---------- 34/34 2.9it/s 11.8s0.2s
               all        400        995       0.86      0.709        0.8      0.421

7 epochs completed in 5.243 hours.`;

export function TrainModelSection() {
  const [visibleLength, setVisibleLength] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [logFontSize, setLogFontSize] = useState(8);
  const [logScaleX, setLogScaleX] = useState(1);
  const notebookRef = useRef<HTMLDivElement>(null);
  const logViewportRef = useRef<HTMLDivElement>(null);
  const measuringLogRef = useRef<HTMLPreElement>(null);
  const visibleLog = useMemo(() => trainingLog.slice(0, visibleLength), [visibleLength]);

  const replayLog = () => setRunKey((currentKey) => currentKey + 1);

  const handleReplayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      replayLog();
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const notebook = notebookRef.current;

    if (!notebook) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isFullyVisible =
          entry.intersectionRatio >= 0.99 && rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isFullyVisible) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: [0, 0.5, 0.75, 0.9, 0.99, 1] }
    );

    observer.observe(notebook);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const viewport = logViewportRef.current;
    const measuringLog = measuringLogRef.current;

    if (!viewport || !measuringLog) {
      return;
    }

    const calculateFontSize = () => {
      const baseFontSize = 10;
      const viewportRect = viewport.getBoundingClientRect();
      const measuredWidth = measuringLog.scrollWidth;
      const measuredHeight = measuringLog.scrollHeight;

      if (!viewportRect.width || !viewportRect.height || !measuredWidth || !measuredHeight) {
        return;
      }

      const heightScale = (viewportRect.height - 16) / measuredHeight;
      const nextFontSize = Math.max(4, Math.min(13, baseFontSize * heightScale));
      const scaledWidth = measuredWidth * (nextFontSize / baseFontSize);
      const nextScaleX = Math.max(0.32, Math.min(1, (viewportRect.width - 20) / scaledWidth));

      setLogFontSize(Number(nextFontSize.toFixed(2)));
      setLogScaleX(Number(nextScaleX.toFixed(3)));
    };

    const resizeObserver = new ResizeObserver(calculateFontSize);
    resizeObserver.observe(viewport);
    calculateFontSize();

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      setVisibleLength(0);
      return;
    }

    if (prefersReducedMotion) {
      setVisibleLength(trainingLog.length);
      return;
    }

    setVisibleLength(0);

    const interval = window.setInterval(() => {
      setVisibleLength((currentLength) => {
        const nextLength = Math.min(trainingLog.length, currentLength + 10);

        if (nextLength === trainingLog.length) {
          window.clearInterval(interval);
        }

        return nextLength;
      });
    }, 18);

    return () => window.clearInterval(interval);
  }, [hasStarted, prefersReducedMotion, runKey]);

  return (
    <section className="bishop-train-model-section">
      <div className="bishop-train-model-content">
        <h3 className="bishop-train-model-headline">
          <strong>Train</strong> & fine tune the model
        </h3>
        <div
          className="bishop-train-model-notebook"
          ref={notebookRef}
          role="button"
          tabIndex={0}
          onClick={replayLog}
          onKeyDown={handleReplayKeyDown}
          aria-label="Machine learning model training output. Activate to replay the log."
        >
          <div className="bishop-train-model-prompt" aria-hidden="true">In&nbsp;[12]:</div>
          <div
            className="bishop-train-model-log-viewport"
            ref={logViewportRef}
            style={
              {
                "--bishop-train-log-font-size": `${logFontSize}px`,
                "--bishop-train-log-scale-x": logScaleX,
              } as CSSProperties
            }
          >
            <pre className="bishop-train-model-log bishop-train-model-log-measure" ref={measuringLogRef} aria-hidden="true">{trainingLog}</pre>
            <pre className="bishop-train-model-log">{visibleLog}<span className="bishop-train-model-cursor" aria-hidden="true" /></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
