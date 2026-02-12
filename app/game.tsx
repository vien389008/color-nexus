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
import { useI18n } from "../src/i18n/I18nContext";
import { levels } from "../src/levels/levels";
import { styles } from "../src/styles/game.styles";

const TOTAL_TIME = 30000;

export default function Game() {
  const router = useRouter();
  const { t } = useI18n();

  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [modalType, setModalType] = useState<"pause" | "confirmReset" | null>(
    null,
  );
  const [gridResetKey, setGridResetKey] = useState(0);

  const isPaused = modalType !== null;

  const progressAnim = useRef(new Animated.Value(1)).current;
  const remainingTimeRef = useRef(TOTAL_TIME);

  const currentLevel = levels[currentLevelIndex];

  /* LOAD HIGH SCORE */

  useEffect(() => {
    const loadHighScore = async () => {
      const saved = await AsyncStorage.getItem("HIGH_SCORE");
      if (saved) setHighScore(Number(saved));
    };
    loadHighScore();
  }, []);

  /* TIMER */

  useEffect(() => {
    if (isPaused) {
      progressAnim.stopAnimation((value) => {
        remainingTimeRef.current = value * TOTAL_TIME;
      });
      return;
    }

    Animated.timing(progressAnim, {
      toValue: 0,
      duration: remainingTimeRef.current,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) handleGameOver();
    });

    return () => {
      progressAnim.stopAnimation();
    };
  }, [isPaused, currentLevelIndex]);

  const resetTimer = () => {
    progressAnim.setValue(1);
    remainingTimeRef.current = TOTAL_TIME;
  };

  /* WIN */

  const handleWin = async () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
      await AsyncStorage.setItem("HIGH_SCORE", newScore.toString());
    }

    if (currentLevelIndex < levels.length - 1) {
      resetTimer();
      setCurrentLevelIndex((prev) => prev + 1);
    } else {
      Alert.alert(t.game.completedTitle, t.game.completedMessage);
    }
  };

  /* GAME OVER */

  const handleGameOver = () => {
    Alert.alert(t.game.timeUpTitle, t.game.timeUpMessage, [
      {
        text: t.game.playAgain,
        onPress: () => {
          setScore(0);
          setCurrentLevelIndex(0);
          setGridResetKey((prev) => prev + 1);
          resetTimer();
        },
      },
    ]);
  };

  /* RESET */

  const confirmReset = () => {
    setModalType(null);
    setScore(0);
    setCurrentLevelIndex(0);
    setGridResetKey((prev) => prev + 1);
    resetTimer();
  };

  /* HOME */

  const goHome = () => {
    setModalType(null);
    setScore(0);
    setCurrentLevelIndex(0);
    setGridResetKey(0);
    resetTimer();
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TIMER */}
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

        <Text style={styles.roundText}>
          {t.game.round}: {currentLevelIndex + 1}
        </Text>
      </View>

      {/* SCORE */}
      <View style={styles.scoreBar}>
        <Text style={styles.hudText}>
          {t.game.score}: {score}
        </Text>
        <Text style={styles.hudText}>
          {t.game.high}: {highScore}
        </Text>
      </View>

      {/* GRID */}
      <View style={styles.gridWrapper}>
        <Grid
          key={`${currentLevelIndex}-${gridResetKey}`}
          levelData={currentLevel}
          onWin={handleWin}
        />
      </View>

      {/* BUTTONS */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalType("pause")}
        >
          <Text style={styles.buttonText}>{t.game.pause}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={() => setModalType("confirmReset")}
        >
          <Text style={styles.buttonText}>{t.game.reset}</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal visible={modalType !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {modalType === "pause" && (
              <>
                <Text style={styles.modalTitle}>{t.game.paused}</Text>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalType(null)}
                >
                  <Text style={styles.modalButtonText}>{t.game.continue}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.homeButton]}
                  onPress={goHome}
                >
                  <Text style={styles.modalButtonText}>{t.game.home}</Text>
                </TouchableOpacity>
              </>
            )}

            {modalType === "confirmReset" && (
              <>
                <Text style={styles.modalTitle}>{t.game.confirmReset}</Text>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={confirmReset}
                >
                  <Text style={styles.modalButtonText}>{t.game.yes}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.modalButton, styles.homeButton]}
                  onPress={() => setModalType(null)}
                >
                  <Text style={styles.modalButtonText}>{t.game.no}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
