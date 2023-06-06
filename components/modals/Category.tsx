import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import type { CategoryWithoutId } from "../../models/categorie";

type CategoryModalProps = {
  addCategory: (category: CategoryWithoutId) => void;
  closeModal: () => void;
  isOpen: boolean;
};

export default function CategoryModal({
  addCategory,
  closeModal,
  isOpen,
}: CategoryModalProps) {
  const [category, setCategory] = useState<CategoryWithoutId>({
    couleur: "",
    genre: "",
  });

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Ajouter une catégorie</Text>
        <View style={styles.modalForm}>
          <TextInput
            placeholder="Genre"
            onChangeText={(genreName: string) =>
              setCategory({ ...category, genre: genreName })
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="Code/nom couleur"
            onChangeText={(colorCode: string) => {
              setCategory({ ...category, couleur: colorCode });
            }}
            style={styles.modalInput}
          />
        </View>
        <View style={styles.modalButtonsContainer}>
          <Button
            title="Ajouter"
            onPress={() => {
              addCategory(category);
              closeModal();
            }}
          />
          <Button title="Annuler" color="red" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#eeeeee",
    height: "100%",
    padding: 20,
    gap: 10,
    justifyContent: "center",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  modalForm: {
    gap: 10,
  },
  modalInput: {
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
