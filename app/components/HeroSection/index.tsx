import React from "react";
import VideoPlayer from "./Videoplayer";
import { VideoProvider } from "./VideoContext";
import ToggleButton from "./toggleButton";

type Props = {};

function HeroSection({}: Props) {
  return (
    <div className="relative">
      <VideoProvider>
        <VideoPlayer />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-end p-6 md:p-12 lg:p-28">
          <ToggleButton />
          <p className="text-xl font-semibold text-white lg:text-5xl">
            Better Business Starts with
            <br /> Better Service Consultation
          </p>
        </div>
      </VideoProvider>
    </div>
  );
}

export default HeroSection;
