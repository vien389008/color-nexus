import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useI18n } from "../src/i18n/I18nContext";
import { styles } from "../src/styles/howToPlay.styles";

export default function HowToPlay() {
  const router = useRouter();
  const { t } = useI18n();

  return (
    <LinearGradient
      colors={["#0f0c29", "#1a1a3a", "#0f0c29"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* ===== CLOSE BUTTON ===== */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="close" size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ===== TITLE ===== */}
          <Text style={styles.title}>{t.howToPlay.title}</Text>

          {/* ===== STEP 1 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepText}>{t.howToPlay.step1}</Text>
          </View>

          <Image
            source={require("../assets/images/step1.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* ===== STEP 2 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepText}>{t.howToPlay.step2}</Text>
          </View>

          <Image
            source={require("../assets/images/step2.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* ===== STEP 3 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepText}>{t.howToPlay.step3}</Text>
          </View>

          {/* ===== START BUTTON ===== */}
          <TouchableOpacity
            style={styles.startWrapper}
            onPress={() => router.push("/game")}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#a64dff", "#ff3d00"]}
              style={styles.startButton}
            >
              <Text style={styles.startText}>{t.howToPlay.start}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
