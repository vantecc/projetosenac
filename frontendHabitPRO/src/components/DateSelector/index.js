import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DateSelector = ({
  value,
  onChangeDate,
  placeholder = "Data de início",
  backgroundColor = "#FFF",
  borderColor = "#5EC9FA",
  borderRadius = 20,
  width = 265,
  height = 45,
  placeholderTextColor = "#B0B0B0",
}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(value || new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios' ? true : false);
    setDate(currentDate);
    onChangeDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View>
      <TouchableOpacity
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
        onPress={showDatePicker}
      >
        <Icon 
          name="calendar" 
          size={20} 
          color="#A0D2EB" 
          style={styles.icon} 
        />
        <Text style={styles.text}>
          {date.toLocaleDateString("pt-BR") || placeholder}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          locale="pt-BR"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    paddingLeft: 15,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});

export default DateSelector;
