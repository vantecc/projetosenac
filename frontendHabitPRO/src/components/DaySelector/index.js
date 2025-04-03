import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DaySelector = ({
  selectedDays = [],  
  onSelectDay,       
  placeholder = "Selecione os dias",
  backgroundColor = "#FFF",
  borderColor = "#5EC9FA",
  borderRadius = 20,
  width = 300,
  height = 60,
  placeholderTextColor = "#B0B0B0",
}) => {
  const [showModal, setShowModal] = useState(false); // Controle do Modal
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
      onSelectDay(selectedDays.filter((d) => d !== day));
    } else {
      onSelectDay([...selectedDays, day]);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
        onPress={toggleModal} 
      >
        <Text style={styles.text}>
          {selectedDays.length > 0
            ? selectedDays.map((day) => daysOfWeek.find(d => d.value === day)?.label).join(", ")
            : placeholder
          }
        </Text>
        <Icon 
          name="calendar" 
          size={20} 
          color="#A0D2EB" 
          style={styles.icon} 
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione os dias</Text>
            <View style={styles.daySelector}>
              {daysOfWeek.map((day) => (
                <TouchableOpacity
                  key={day.value}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day.value) && styles.selectedButton,
                  ]}
                  onPress={() => toggleDay(day.value)}
                >
                  <Text style={styles.dayText}>{day.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={toggleModal}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    paddingLeft: 15,
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent:'space-between',
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  daySelector: {
    justifyContent: "center",
    marginBottom: 20,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedButton: {
    backgroundColor: "#A0D2EB",
  },
  dayText: {
    fontSize: 16,
    color: "#000",
  },
  saveButton: {
    backgroundColor: "#5EC9FA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  saveText: {
    fontSize: 16,
    color: "#FFF",
  },
});

export default DaySelector;
