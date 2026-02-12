import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useI18n } from "../src/i18n/I18nContext";
import { styles } from "../src/styles/settings.styles";
import {
  isSoundEnabled,
  setSoundEnabled as setSoundSystem,
} from "../src/utils/sound";

export default function Settings() {
  const router = useRouter();
  const { t, language, setLanguage } = useI18n();

  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setSoundEnabled(isSoundEnabled());
  }, []);

  return (
    <LinearGradient
      colors={["#0f0c29", "#1a1a3a", "#0f0c29"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{t.settings.title}</Text>

          <LinearGradient colors={["#6a00f4", "#a64dff"]} style={styles.item}>
            <Text style={styles.itemText}>{t.settings.sound}</Text>
            <Switch
              value={soundEnabled}
              onValueChange={(value) => {
                setSoundEnabled(value);
                setSoundSystem(value);
              }}
            />
          </LinearGradient>

          <TouchableOpacity onPress={() => router.push("/info")}>
            <LinearGradient colors={["#3f51b5", "#5c6bc0"]} style={styles.item}>
              <Text style={styles.itemText}>{t.settings.info}</Text>
              <Text style={styles.arrow}>›</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Đổi ngôn ngữ: bấm là đổi luôn giữa vi/en */}
          <TouchableOpacity
            onPress={() => setLanguage(language === "vi" ? "en" : "vi")}
          >
            <LinearGradient colors={["#ff9800", "#ff5722"]} style={styles.item}>
              <Text style={styles.itemText}>{t.settings.language}</Text>

              <Text style={styles.itemText}>
                {language === "vi" ? "🇻🇳 VI" : "🇺🇸 EN"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>
            <LinearGradient colors={["#ffc107", "#ff9800"]} style={styles.item}>
              <Text style={styles.itemText}>{t.settings.rate}</Text>
              <Text style={styles.arrow}>›</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/privacy")}>
            <LinearGradient colors={["#2196f3", "#00bcd4"]} style={styles.item}>
              <Text style={styles.itemText}>{t.settings.privacy}</Text>
              <Text style={styles.arrow}>›</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeWrapper}
            onPress={() => router.back()}
          >
            <LinearGradient
              colors={["#ff3d00", "#ff1744"]}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>{t.settings.close}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
