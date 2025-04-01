import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  backgroundColor = "#BCE5FA",  // cor de fundo padrão
  borderColor = "#A0D2EB",  // cor da borda padrão
  borderRadius = 20,  // borda arredondada padrão
  width = 265,  // largura padrão
  height = 45,  // altura padrão
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
        }
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
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
