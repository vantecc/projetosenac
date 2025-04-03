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
  buttom: {
    height: 90,
    width: 90
  },
  user: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
  },
  buttonContainer: {
    flex: 0.6,
    alignItems:'flex-end',
    marginTop: 20,
    gap: 15,
    width: "100%",
  },
  icon: {
    height: 30,
    width: 30
  },
  textTitle: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 20,
    flex: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

});
