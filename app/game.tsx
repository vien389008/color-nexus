import { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Grid from "../src/components/Grid";

export default function Game() {
  // =========================
  // LEVEL & SCORE
  // =========================
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  // =========================
  // GRID SIZE THEO LEVEL
  // =========================
  const getGridSize = (level: number) => {
    if (level <= 5) return 3;
    if (level <= 15) return 4;
    if (level <= 30) return 5;
    if (level <= 60) return 6;
    return 7;
  };

  const gridSize = getGridSize(level);

  // =========================
  // TIMER THEO GRID
  // =========================
  const getTimeForGrid = (size: number) => {
    if (size === 3) return 10;
    if (size === 4) return 15;
    if (size === 5) return 20;
    if (size === 6) return 25;
    return 30;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeForGrid(gridSize));
  const timerRef = useRef<any>(null);

  // =========================
  // TIMER EFFECT
  // =========================
  useEffect(() => {
    // Reset timer mỗi khi level đổi
    setTimeLeft(getTimeForGrid(gridSize));

    timerRef.current = setInterval(() => {
      setTimeLeft((prev: number) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleGameOver();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [level]);

  // =========================
  // WIN
  // =========================
  const handleWin = () => {
    clearInterval(timerRef.current);
    setScore((prev) => prev + 1);
    setLevel((prev) => prev + 1);
  };

  // =========================
  // GAME OVER
  // =========================
  const handleGameOver = () => {
    Alert.alert("Game Over", "Hết thời gian!", [
      {
        text: "Chơi lại",
        onPress: () => {
          setScore(0);
          setLevel(1);
        },
      },
    ]);
  };

  // =========================
  // RESTART BUTTON
  // =========================
  const handleRestart = () => {
    clearInterval(timerRef.current);
    setScore(0);
    setLevel(1);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* ================= TOP BAR ================= */}
      <View style={styles.topBar}>
        <Text style={styles.score}>Score: {score}</Text>
        <Text style={styles.timer}>{timeLeft}</Text>
        <Text style={styles.level}>Level: {level}</Text>
      </View>

      {/* ================= GRID ================= */}
      <View style={styles.gridWrapper}>
        <Grid size={gridSize} onWin={handleWin} />
      </View>

      {/* ================= BOTTOM BUTTONS ================= */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ================= STYLES =================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    justifyContent: "space-between",
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  score: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  timer: {
    color: "#FF5C5C",
    fontSize: 22,
    fontWeight: "bold",
  },

  level: {
    color: "#AAAAAA",
    fontSize: 16,
  },

  gridWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
