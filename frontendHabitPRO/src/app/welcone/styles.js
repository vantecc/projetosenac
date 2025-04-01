import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    justifyContent: 'center',
  },
  logo: {
    width: 312,
    height: 95,
    marginBottom: 20,
    flex: 0.5,
  },
  buttonContainer: {
    flex: 0.6,
    alignItems: "center",
    marginTop: 20,
    gap: 15,
    width: '100%',
  },
  textTitle: {
    color: "#7D7777",
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
