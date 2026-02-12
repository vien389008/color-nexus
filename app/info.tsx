import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useI18n } from "../src/i18n/I18nContext";
import { styles } from "../src/styles/info.styles";

export default function Info() {
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
          <Text style={styles.title}>{t.info.title}</Text>

          {/* ===== LOGO ===== */}
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* ===== DESCRIPTION ===== */}
          <Text style={styles.description}>{t.info.description}</Text>

          {/* ===== GAME BOX ===== */}
          <LinearGradient colors={["#3f51b5", "#6a00f4"]} style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons
                name="gamepad-variant"
                size={22}
                color="#fff"
              />
              <Text style={styles.cardTitle}> {t.info.gameTitle}</Text>
            </View>
            <Text style={styles.cardText}>{t.info.gameDesc}</Text>
          </LinearGradient>

          {/* ===== AUTHOR BOX ===== */}
          <LinearGradient colors={["#ff9800", "#ff3d00"]} style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="account" size={22} color="#fff" />
              <Text style={styles.cardTitle}> {t.info.authorTitle}</Text>
            </View>

            <Text style={styles.cardText}>{t.info.authorDesc}</Text>
          </LinearGradient>

          {/* ===== SOCIAL ===== */}
          <Text style={styles.followText}>{t.info.follow}</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="twitter" size={24} color="#1DA1F2" />
            </TouchableOpacity>
          </View>

          {/* ===== CLOSE ===== */}
          <TouchableOpacity
            style={styles.closeWrapper}
            onPress={() => router.back()}
          >
            <LinearGradient
              colors={["#ff3d00", "#ff1744"]}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>{t.info.close}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
