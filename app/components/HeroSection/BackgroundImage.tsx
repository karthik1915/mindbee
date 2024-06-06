"use client";

import React from "react";
import Image from "next/image";
import { useVideo } from "./VideoContext";

function BackgroundImage() {
  const { isPlaying } = useVideo();
  return (
    <div className={`${isPlaying ? "hidden" : ""}`}>
      <Image
        fill
        objectFit="cover"
        src="/background_sf.jpg"
        alt="salesforce background image"
      />
    </div>
  );
}

export default BackgroundImage;
