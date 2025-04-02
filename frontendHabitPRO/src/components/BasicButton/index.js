import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BasicButton = ({
  title,
  width,
  onPress,
  height,
  color = "#007bff",
  textColor = "#fff",
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color, width, height },
        style // 👈 necessário
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
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default BasicButton;
