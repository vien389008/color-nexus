import { useEffect } from "react";
import { loadSounds, unloadSounds } from "../utils/sound";

export function SoundProvider({ children }: any) {
  useEffect(() => {
    loadSounds();

    return () => {
      unloadSounds();
    };
  }, []);

  return children;
}
