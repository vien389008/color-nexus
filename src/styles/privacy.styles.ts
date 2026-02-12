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
  },

  logo: {
    width: "100%",
    height: 120,
    alignSelf: "center",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#1c1c3a",
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 6,
  },

  cardText: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 20,
  },
  /* ===== BUTTON ===== */

  buttonWrapper: {
    width: "100%",
    marginBottom: 18,
  },

  button: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
