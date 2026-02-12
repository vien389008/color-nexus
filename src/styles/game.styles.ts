import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87c9e6",
  },

  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  clockIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  progressContainer: {
    flex: 1,
    height: 28,
    backgroundColor: "#c5e86c",
    borderRadius: 14,
    overflow: "hidden",
    marginRight: 10,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#7ed957",
  },

  roundText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2c2c2c",
  },

  scoreBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },

  hudText: {
    color: "#000",
    fontSize: 16,
  },

  gridWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  resetButton: {
    backgroundColor: "#FF5C5C",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: 300,
    backgroundColor: "#1C1C1C",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },

  modalTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },

  modalButton: {
    backgroundColor: "#6C63FF",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },

  homeButton: {
    backgroundColor: "#999",
  },

  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
