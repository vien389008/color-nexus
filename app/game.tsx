import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Easing,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Grid from "../src/components/Grid";
import { levels } from "../src/levels/levels";
import { styles } from "../src/styles/game.styles";
export default function Game() {
  const router = useRouter();

  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [modalType, setModalType] = useState<"pause" | "confirmReset" | null>(
    null,
  );
  const [gridResetKey, setGridResetKey] = useState(0);

  const isPaused = modalType !== null;

  const progressAnim = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentLevel = levels[currentLevelIndex];

  // ================= LOAD HIGH SCORE =================
  useEffect(() => {
    const loadHighScore = async () => {
      const saved = await AsyncStorage.getItem("HIGH_SCORE");
      if (saved) setHighScore(Number(saved));
    };
    loadHighScore();
  }, []);

  // ================= TIMER + PROGRESS =================
  useEffect(() => {
    if (isPaused) {
      progressAnim.stopAnimation();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    progressAnim.setValue(1);

    Animated.timing(progressAnim, {
      toValue: 0,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) handleGameOver();
    });

    return () => {
      progressAnim.stopAnimation();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentLevelIndex, isPaused]);

  // ================= WIN =================
  const handleWin = async () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      await AsyncStorage.setItem("HIGH_SCORE", newScore.toString());
    }

    if (currentLevelIndex < levels.length - 1) {
      setCurrentLevelIndex((prev) => prev + 1);
    } else {
      Alert.alert("Hoàn thành!", "Bạn đã thắng tất cả màn!");
    }
  };

  // ================= GAME OVER =================
  const handleGameOver = () => {
    Alert.alert("Hết giờ!", "Bạn thua rồi 😢", [
      {
        text: "Chơi lại",
        onPress: () => {
          setScore(0);
          setCurrentLevelIndex(0);
          setGridResetKey((prev) => prev + 1);
        },
      },
    ]);
  };

  // ================= RESET LEVEL =================
  const confirmReset = () => {
    setModalType(null);
    setGridResetKey((prev) => prev + 1);
  };

  // ================= GO HOME =================
  const goHome = () => {
    setModalType(null);
    setScore(0);
    setCurrentLevelIndex(0);
    setGridResetKey(0);
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ===== PROGRESS TIMER BAR ===== */}
      <View style={styles.timerWrapper}>
        <View style={styles.clockIcon}>
          <MaterialIcons name="schedule" size={20} color="#000" />
        </View>

        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>

        <Text style={styles.roundText}>VÒNG: {currentLevelIndex + 1}</Text>
      </View>

      {/* ===== SCORE ===== */}
      <View style={styles.scoreBar}>
        <Text style={styles.hudText}>Score: {score}</Text>
        <Text style={styles.hudText}>High: {highScore}</Text>
      </View>

      {/* ===== GRID ===== */}
      <View style={styles.gridWrapper}>
        <Grid
          key={`${currentLevelIndex}-${gridResetKey}`}
          levelData={currentLevel}
          onWin={handleWin}
        />
      </View>

      {/* ===== BOTTOM BUTTONS ===== */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalType("pause")}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={() => setModalType("confirmReset")}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* ===== MODAL ===== */}
      <Modal visible={modalType !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {modalType === "pause" && (
              <>
                <Text style={styles.modalTitle}>Game Paused</Text>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalType(null)}
                >
                  <Text style={styles.modalButtonText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.homeButton]}
                  onPress={goHome}
                >
                  <Text style={styles.modalButtonText}>Home</Text>
                </TouchableOpacity>
              </>
            )}

            {modalType === "confirmReset" && (
              <>
                <Text style={styles.modalTitle}>
                  Bạn có chắc chắn muốn chơi lại không?
                </Text>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={confirmReset}
                >
                  <Text style={styles.modalButtonText}>Có</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.homeButton]}
                  onPress={() => setModalType(null)}
                >
                  <Text style={styles.modalButtonText}>Không</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
