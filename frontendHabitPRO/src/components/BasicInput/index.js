import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  backgroundColor = "#BCE5FA",
  borderColor = "#5EC9FA",
  borderRadius = 20,
  width = 265,
  height = 45,
  placeholderTextColor = "#B0B0B0",
}) => {
  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor,
          borderColor,
          width,
          height,
          borderRadius,
        },
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    paddingLeft: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});

export default CustomInput;
