import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  backgroundColor = "#BCE5FA",
  borderColor = "#A0D2EB",
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
      placeholderTextColor={placeholderTextColor} // ✅ aqui você usa!
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingLeft: 25,
    marginBottom: 20,
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)',
  },
});

export default CustomInput;
