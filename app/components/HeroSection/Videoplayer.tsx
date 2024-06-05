"use client";

import React, { useRef, useEffect } from "react";
import { useVideo } from "./VideoContext";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isPlaying } = useVideo();

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative">
      <video ref={videoRef} className="h-auto w-screen" muted>
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
