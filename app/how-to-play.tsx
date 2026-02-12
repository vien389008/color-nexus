import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../src/styles/howToPlay.styles";
export default function HowToPlay() {
  const router = useRouter();

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
          <Text style={styles.title}>CÁCH CHƠI</Text>

          {/* ===== STEP 1 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepText}>Nối các điểm cùng màu</Text>
          </View>

          <Image
            source={require("../assets/images/logo.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* ===== STEP 2 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepText}>Lấp đầy bảng với các đường nối</Text>
          </View>

          <Image
            source={require("../assets/images/logo.png")}
            style={styles.image}
            resizeMode="contain"
          />

          {/* ===== STEP 3 ===== */}
          <View style={styles.stepContainer}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepText}>
              Đảm bảo các đường không cắt nhau
            </Text>
          </View>

          {/* ===== START BUTTON ===== */}
          <TouchableOpacity
            style={styles.startWrapper}
            onPress={() => router.push("/game")}
          >
            <LinearGradient
              colors={["#a64dff", "#ff3d00"]}
              style={styles.startButton}
            >
              <Text style={styles.startText}>BẮT ĐẦU</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
