import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3a0ca3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  stepNumberText: {
    color: "#fff",
    fontWeight: "bold",
  },

  stepText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 160,
    marginBottom: 25,
  },

  startWrapper: {
    marginTop: 20,
    marginBottom: 10,
  },

  startButton: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  startText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
