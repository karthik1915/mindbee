"use client";

import React from "react";
import { useVideo } from "./VideoContext";
import { PlayIcon } from "lucide-react";
import { PauseIcon } from "lucide-react";

const ToggleButton: React.FC = () => {
  const { isPlaying, togglePlay } = useVideo();

  return (
    <button
      onClick={togglePlay}
      className="rounded-full bg-black bg-opacity-20 p-5 backdrop-blur"
    >
      {isPlaying ? (
        <PauseIcon fill="white" color="white" size={24} />
      ) : (
        <PlayIcon fill="white" color="white" size={24} />
      )}
    </button>
  );
};

export default ToggleButton;
