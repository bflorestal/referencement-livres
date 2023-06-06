import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

import Categorie from "../../models/categorie";
import type { BookWithoutId } from "../../models/livre";
import { useState } from "react";

type BookModalProps = {
  addBook: (livre: BookWithoutId) => void;
  categories: Categorie[];
  closeModal: () => void;
  isOpen: boolean;
};

export default function BookModal({
  addBook,
  categories,
  closeModal,
  isOpen,
}: BookModalProps) {
  const [book, setBook] = useState<BookWithoutId>({
    titre: "",
    categorieId: [],
    description: "",
    enCours: false,
    imageUrl: "",
    tomes: 1,
  });
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Ajouter un livre</Text>
        <View style={styles.modalForm}>
          <TextInput
            placeholder="Titre"
            onChangeText={(newTitle: string) =>
              setBook({ ...book, titre: newTitle })
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="URL de l'image"
            onChangeText={(newImageUrl: string) =>
              setBook({ ...book, imageUrl: newImageUrl })
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="Description"
            onChangeText={(newDescription: string) =>
              setBook({ ...book, description: newDescription })
            }
            style={styles.modalInput}
          />
          <TextInput
            placeholder="Nombre de tomes"
            keyboardType="numeric"
            onChangeText={(volumes: string) =>
              setBook({ ...book, tomes: +volumes })
            }
            style={styles.modalInput}
          />
          {/* TODO: Remplacer par un picker */}
          <TextInput
            placeholder="Catégorie"
            onChangeText={(id: string) =>
              setBook({ ...book, categorieId: [...book.categorieId, id] })
            }
            style={styles.modalInput}
          />
          {/* en cours ? */}
        </View>
        <View style={styles.modalButtonsContainer}>
          <Button
            title="Ajouter"
            color="green"
            onPress={() => {
              addBook(book);
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
