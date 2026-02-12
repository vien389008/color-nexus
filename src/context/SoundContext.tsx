import React, { createContext, useContext, useState } from "react";

type SoundContextType = {
  soundEnabled: boolean;
  toggleSound: (value: boolean) => void;
};

const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
});

export const SoundProvider = ({ children }: any) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = (value: boolean) => {
    setSoundEnabled(value);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
