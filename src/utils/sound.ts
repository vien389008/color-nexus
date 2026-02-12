import AsyncStorage from "@react-native-async-storage/async-storage";
import { AudioPlayer, createAudioPlayer } from "expo-audio";
import { Platform, Vibration } from "react-native";

const SOUND_KEY = "SOUND_ENABLED";

let enabled = true;

/* ===== PLAYERS ===== */

let connectPlayer: AudioPlayer | null = null;
let winPlayer: AudioPlayer | null = null;
let swipePlayer: AudioPlayer | null = null;

/* ===== SETTINGS ===== */

export async function loadSoundSetting() {
  const v = await AsyncStorage.getItem(SOUND_KEY);
  enabled = v !== "false";
}

export async function setSoundEnabled(value: boolean) {
  enabled = value;
  await AsyncStorage.setItem(SOUND_KEY, String(value));
}

export function isSoundEnabled() {
  return enabled;
}

/* ===== LOAD SOUNDS ===== */

export async function loadSounds() {
  await loadSoundSetting();

  if (!connectPlayer) {
    connectPlayer = createAudioPlayer(
      require("../../assets/sounds/connect.wav"),
    );
  }

  if (!winPlayer) {
    winPlayer = createAudioPlayer(require("../../assets/sounds/win.wav"));
  }

  if (!swipePlayer) {
    swipePlayer = createAudioPlayer(require("../../assets/sounds/swipe.wav"));
  }
}

/* ===== PLAY ===== */

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
    Vibration.vibrate(Platform.OS === "android" ? 120 : 80);
  } catch {}
}

export function playSwipe() {
  if (!enabled || !swipePlayer) return;
  try {
    swipePlayer.seekTo(0);
    swipePlayer.play();
  } catch {}
}

/* ===== CLEANUP ===== */

export function unloadSounds() {
  try {
    connectPlayer?.pause();
    winPlayer?.pause();
    swipePlayer?.pause();
  } catch {}

  connectPlayer = null;
  winPlayer = null;
  swipePlayer = null;
}
