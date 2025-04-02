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
      fontSize: 40,
      marginBottom: 20,
      flex: 0.5,
      textShadowColor: 'rgba(0, 0, 0, 0.2)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
    },

});
