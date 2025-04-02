import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DaySelector = ({
  selectedDays = [],  // Recebe os dias selecionados do componente pai
  onSelectDay,       // Recebe a função onSelectDay do componente pai
  backgroundColor = "#FFF",
  borderColor = "#A0D2EB",
  borderRadius = 20,
  width = 300,
  height = 45,
}) => {
  const daysOfWeek = [
    { label: "Dom", value: "Sunday" },
    { label: "Seg", value: "Monday" },
    { label: "Ter", value: "Tuesday" },
    { label: "Qua", value: "Wednesday" },
    { label: "Qui", value: "Thursday" },
    { label: "Sex", value: "Friday" },
    { label: "Sáb", value: "Saturday" },
  ];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      // Remover o dia selecionado
      onSelectDay(selectedDays.filter((d) => d !== day));
    } else {
      // Adicionar o dia selecionado
      onSelectDay([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.selectorContainer, { width, height, borderColor, backgroundColor, borderRadius }]}>
        {daysOfWeek.map((day) => (
          <TouchableOpacity
            key={day.value}
            style={[
              styles.dayButton,
              selectedDays.includes(day.value) && styles.selectedButton,
            ]}
            onPress={() => toggleDay(day.value)} // Chama a função quando o botão é pressionado
          >
            <Text style={styles.dayText}>{day.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  selectorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 5,
    borderWidth: 1,
    borderRadius: 20,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: "#A0D2EB",
  },
  dayText: {
    fontSize: 16,
    color: "#000",
  },
});

export default DaySelector;
