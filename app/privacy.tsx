import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useI18n } from "../src/i18n/I18nContext";
import { styles } from "../src/styles/privacy.styles";

export default function Privacy() {
  const router = useRouter();
  const { t } = useI18n();

  return (
    <LinearGradient
      colors={["#0f0c29", "#1a1a3a", "#0f0c29"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* ===== TITLE ===== */}
          <Text style={styles.title}>{t.privacy.title}</Text>

          {/* ===== LOGO ===== */}
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* ===== SECTION 1 ===== */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons
                name="shield-lock"
                size={20}
                color="#fff"
              />
              <Text style={styles.cardTitle}> {t.privacy.section1Title}</Text>
            </View>
            <Text style={styles.cardText}>{t.privacy.section1Desc}</Text>
          </View>

          {/* ===== SECTION 2 ===== */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="database" size={20} color="#fff" />
              <Text style={styles.cardTitle}> {t.privacy.section2Title}</Text>
            </View>
            <Text style={styles.cardText}>{t.privacy.section2Desc}</Text>
          </View>

          {/* ===== SECTION 3 ===== */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons
                name="account-check"
                size={20}
                color="#fff"
              />
              <Text style={styles.cardTitle}> {t.privacy.section3Title}</Text>
            </View>
            <Text style={styles.cardText}>{t.privacy.section3Desc}</Text>
          </View>

          {/* ===== CLOSE BUTTON ===== */}
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => router.back()}
          >
            <LinearGradient
              colors={["#ff3d00", "#ff1744"]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{t.privacy.close}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
