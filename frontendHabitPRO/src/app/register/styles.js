import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  inputContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    flex: 0.6,
    alignItems: "center",
    marginTop: 20,
    gap: 15,
    width: "100%",
  },
  textTitle: {
    color: "#fff",
    fontSize: 50,
    marginBottom: 20,
    flex: 0.5,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
});
