import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  /* ===== LOGO IMAGE ===== */

  logo: {
    width: "80%",
    height: 180,
    marginBottom: 60,
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
