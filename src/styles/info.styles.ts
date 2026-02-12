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
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
  },

  logo: {
    width: "100%",
    height: 120,
    marginBottom: 10,
  },

  description: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 14,
    marginBottom: 20,
  },

  card: {
    width: "100%",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 8,
    includeFontPadding: false, //
  },

  cardText: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
  },

  followText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  socialRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },

  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#1e1e3f",
    alignItems: "center",
    justifyContent: "center",
  },

  socialIcon: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  closeWrapper: {
    width: "100%",
  },

  closeButton: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
