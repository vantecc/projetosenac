import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  width,
  onPress,
  height,
  color = "#007bff",
  textColor = "#fff",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, width: width, height: height },
      ]}
      onPress={onPress}
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
  },
});

export default CustomButton;
