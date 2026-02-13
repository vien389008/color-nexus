import AsyncStorage from "@react-native-async-storage/async-storage";
import { AudioPlayer, createAudioPlayer } from "expo-audio";

const SOUND_KEY = "SOUND_ENABLED";

/* =========================
   INTERNAL STATE
========================= */

let enabled = true;

let swipePlayer: AudioPlayer | null = null;
let connectPlayer: AudioPlayer | null = null;
let winPlayer: AudioPlayer | null = null;
let bgmPlayer: AudioPlayer | null = null;

let bgmListenerAdded = false;

/* =========================
   SETTINGS
========================= */

export async function loadSoundSetting() {
  const v = await AsyncStorage.getItem(SOUND_KEY);
  enabled = v !== "false";
}

export async function setSoundEnabled(value: boolean) {
  enabled = value;
  await AsyncStorage.setItem(SOUND_KEY, String(value));

  if (!bgmPlayer) return;

  try {
    if (enabled) {
      bgmPlayer.play();
    } else {
      bgmPlayer.pause();
    }
  } catch {}
}

export function isSoundEnabled() {
  return enabled;
}

/* =========================
   LOAD ALL SOUNDS
========================= */

export async function loadSounds() {
  await loadSoundSetting();

  // SFX
  if (!swipePlayer) {
    swipePlayer = createAudioPlayer(require("../../assets/sounds/swipe.mp3"));
  }

  if (!connectPlayer) {
    connectPlayer = createAudioPlayer(
      require("../../assets/sounds/connect.mp3"),
    );
  }

  if (!winPlayer) {
    winPlayer = createAudioPlayer(require("../../assets/sounds/win.mp3"));
  }

  // BGM
  if (!bgmPlayer) {
    bgmPlayer = createAudioPlayer(require("../../assets/sounds/bg.mp3"));
  }

  // Loop BGM bằng playbackStatusUpdate
  if (bgmPlayer && !bgmListenerAdded) {
    bgmListenerAdded = true;

    bgmPlayer.addListener("playbackStatusUpdate", (status: any) => {
      if (status?.didJustFinish) {
        try {
          bgmPlayer?.seekTo(0);
          bgmPlayer?.play();
        } catch {}
      }
    });
  }

  // Tự phát nếu bật
  if (enabled) {
    try {
      bgmPlayer?.play();
    } catch {}
  }
}

/* =========================
   PLAY SFX
========================= */

export function playSwipe() {
  if (!enabled || !swipePlayer) return;
  try {
    swipePlayer.seekTo(0);
    swipePlayer.play();
  } catch {}
}

export function playConnect() {
  if (!enabled || !connectPlayer) return;
  try {
    connectPlayer.seekTo(0);
    connectPlayer.play();
  } catch {}
}

export function playWin() {
  if (!enabled || !winPlayer) return;
  try {
    winPlayer.seekTo(0);
    winPlayer.play();
    // Ngắt rung khi chiến thắng
    // Vibration.vibrate(Platform.OS === "android" ? 120 : 80);
  } catch {}
}

/* =========================
   CONTROL BGM
========================= */

export function playBGM() {
  if (!enabled || !bgmPlayer) return;
  try {
    bgmPlayer.play();
  } catch {}
}

export function stopBGM() {
  try {
    bgmPlayer?.pause();
  } catch {}
}

/* =========================
   CLEANUP
========================= */

export function unloadSounds() {
  try {
    swipePlayer?.pause();
    connectPlayer?.pause();
    winPlayer?.pause();
    bgmPlayer?.pause();
  } catch {}

  swipePlayer = null;
  connectPlayer = null;
  winPlayer = null;
  bgmPlayer = null;
  bgmListenerAdded = false;
}
