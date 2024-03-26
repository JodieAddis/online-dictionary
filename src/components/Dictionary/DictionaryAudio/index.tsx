import { useState, useRef } from "react";
import IconPlay from "../../../icons/IconPlay";

interface AudioItem {
  audio: string | undefined;
}

const Component = ({ audio }: AudioItem) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const toggleAudio = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <div className="cursor-pointer">
      <audio className="text-black" src={audio} ref={audioRef}></audio>
      <IconPlay onClick={toggleAudio} />
    </div>
  );
};

export default Component;
