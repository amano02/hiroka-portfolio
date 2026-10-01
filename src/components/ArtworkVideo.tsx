"use client";

import { useCallback, useRef, useState } from "react";

interface ArtworkVideoProps {
  src: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
  /** 一覧用：先頭フレームを poster として表示 */
  showPosterFrame?: boolean;
}

export function ArtworkVideo({
  src,
  className = "h-full w-full object-cover object-center",
  preload = "none",
  showPosterFrame = false,
}: ArtworkVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState<string | undefined>();
  const capturedRef = useRef(false);

  const captureFirstFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video || capturedRef.current || !showPosterFrame) {
      return;
    }
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      return;
    }

    try {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      setPoster(dataUrl);
      capturedRef.current = true;
      video.pause();
    } catch {
      video.pause();
    }
  }, [showPosterFrame]);

  const seekToFirstFrame = useCallback(() => {
    const video = videoRef.current;
    if (!video || capturedRef.current || !showPosterFrame) {
      return;
    }

    const onSeeked = () => {
      captureFirstFrame();
      video.removeEventListener("seeked", onSeeked);
    };

    video.addEventListener("seeked", onSeeked);

    try {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.min(0.05, video.duration * 0.01);
      } else {
        video.currentTime = 0.001;
      }
    } catch {
      captureFirstFrame();
    }
  }, [captureFirstFrame, showPosterFrame]);

  const effectivePreload = showPosterFrame ? "metadata" : preload;

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      playsInline
      preload={effectivePreload}
      poster={poster}
      className={className}
      onLoadedData={showPosterFrame ? seekToFirstFrame : undefined}
      onLoadedMetadata={showPosterFrame ? seekToFirstFrame : undefined}
      onClick={(event) => event.stopPropagation()}
    />
  );
}
