import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
  
const BasicButton = ({
  title,
  width,
  onPress,
  height,
  color = "#5EC9FA",
  textColor = "#FFF",
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color, width, height },
        style
      ]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold, sans-serif',
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default BasicButton;
