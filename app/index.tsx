import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useI18n } from "../src/i18n/I18nContext";
import { styles } from "../src/styles/home.styles";

export default function Home() {
  const router = useRouter();
  const { t } = useI18n();
  return (
    <LinearGradient
      colors={["#0f0c29", "#1a1a3a", "#0f0c29"]}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {/* ===== LOGO IMAGE ===== */}
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* ===== PLAY ===== */}
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push("/game")}
        >
          <LinearGradient colors={["#00ff94", "#00c853"]} style={styles.button}>
            <Text style={styles.buttonText}>{t.home.play}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ===== HOW TO PLAY ===== */}
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push("/how-to-play")}
        >
          <LinearGradient colors={["#a64dff", "#6a00f4"]} style={styles.button}>
            <Text style={styles.buttonText}>{t.home.howToPlay}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* ===== SETTINGS ===== */}
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => router.push("/settings")}
        >
          <LinearGradient colors={["#ff9800", "#ff3d00"]} style={styles.button}>
            <Text style={styles.buttonText}>{t.home.settings}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
