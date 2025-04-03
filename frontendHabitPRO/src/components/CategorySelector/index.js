import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const CategorySelector = ({
  selectedCategory = "",  
  onSelectCategory,       
  placeholder = "Selecione uma categoria",
  categories = ["Tecnologia", "Saúde", "Educação", "Finanças", "Esportes", "Música", "Arte"], 
  backgroundColor = "#FFF",
  borderColor = "#5EC9FA",
  borderRadius = 20,
  width = 265,
  height = 45,
  placeholderTextColor = "#B0B0B0",
}) => {
  const [showModal, setShowModal] = useState(false); 

  const toggleCategorySelection = (category) => {
    if (selectedCategory === category) {
      onSelectCategory(""); 
    } else {
      onSelectCategory(category);
    }
    setShowModal(false); 
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
        onPress={() => {
          if (selectedCategory) {
            toggleCategorySelection(selectedCategory);
          } else {
            toggleModal(); 
          }
        }}
      >
        <Text style={styles.text}>
          {selectedCategory || placeholder} 
        </Text>
        <Icon 
          name="tags" 
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
            <Text style={styles.modalTitle}>Selecione uma Categoria</Text>
            <View style={styles.categorySelector}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.selectedButton, 
                  ]}
                  onPress={() => toggleCategorySelection(category)} 
                >
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={toggleModal}>
              <Text style={styles.saveText}>Fechar</Text>
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
  categorySelector: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems:"center",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    width: 120,
    height:50
  },
  selectedButton: {
    backgroundColor: "#A0D2EB",
  },
  categoryText: {
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

export default CategorySelector;
