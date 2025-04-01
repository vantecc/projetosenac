import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  logo: {
    width: 312,
    height: 95,
    marginBottom: 20,
    flex: 0.5,
  },
  inputContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#7D7777",
    fontSize: 14,
  },
  buttonContainer: {
    flex: 0.6,
    alignItems: "center",
    marginTop: 20,
    gap: 15,
    width: "100%",
  },
});
