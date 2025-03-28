import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#BCE5FA",
    width: 265,
    height: 45,
    borderColor: "#A0D2EB",
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default CustomInput;
