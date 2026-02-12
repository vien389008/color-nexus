import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 28,
  },
  arrow: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 28,
  },
  closeWrapper: {
    marginTop: 30,
  },
  closeButton: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
