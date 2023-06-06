import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { useState } from "react";

import { CATEGORIES, LIVRES } from "../models/data";
import type { CategoryWithoutId } from "../models/categorie";
import type { BookWithoutId } from "../models/livre";

import BookCategory from "../components/BookCategory";
import CategoryModal from "../components/modals/Category";
import BookModal from "../components/modals/Book";

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Recherche">;
};

export default function Home({ navigation }: HomeProps) {
  const [data, setData] = useState({ categories: CATEGORIES, books: LIVRES });
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const addCategory = (category: CategoryWithoutId) => {
    if (category.genre !== "" || category.couleur !== "") {
      setData((prevState) => ({
        ...prevState,
        categories: [
          ...prevState.categories,
          { ...category, id: (prevState.categories.length + 1).toString() },
        ],
      }));
    }

    closeCategoryModal();
  };

  const closeCategoryModal = () => {
    setIsCategoryModalOpen(false);
  };

  const addBook = (book: BookWithoutId) => {
    // TODO: Revoir la condition
    if (book.titre !== "") {
      setData((prevState) => ({
        ...prevState,
        books: [
          ...prevState.books,
          { ...book, id: `c${prevState.books.length + 1}` },
        ],
      }));
    }

    closeBookModal();
  };

  const closeBookModal = () => {
    setIsBookModalOpen(false);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.searchButtonContainer}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate("Recherche")}
        >
          <Text style={styles.searchButtonText}>Rechercher</Text>
        </Pressable>
      </View>
      <View style={{ gap: 10 }}>
        <Text style={styles.homeTitle}>Librairie</Text>
        {/* Ajouter un nouveau livre ou une nouvelle catégorie */}
        <View style={styles.addButtonsContainer}>
          <Button
            title="Ajouter une catégorie"
            onPress={() => setIsCategoryModalOpen(true)}
          />
          <Button
            title="Ajouter un livre"
            onPress={() => setIsBookModalOpen(true)}
          />
        </View>
      </View>
      {/* Modales d'ajout de catégorie et de livre */}
      <CategoryModal
        isOpen={isCategoryModalOpen}
        addCategory={addCategory}
        closeModal={closeCategoryModal}
      />
      <BookModal
        isOpen={isBookModalOpen}
        addBook={addBook}
        closeModal={closeBookModal}
        categories={CATEGORIES}
      />
      <FlatList
        data={data.categories}
        renderItem={({ item }) => (
          <BookCategory
            category={item}
            books={data.books.filter((book) =>
              book.categorieId.includes(item.id)
            )}
          />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <BookCategory
            category={{ id: "all", couleur: "#000", genre: "Tous" }}
            books={LIVRES}
          />
        }
        contentContainerStyle={styles.bookCategoryContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#eeeeee",
    height: "100%",
    padding: 20,
    gap: 10,
  },
  searchButtonContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  searchButton: {
    backgroundColor: "purple",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
  },
  homeTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  addButtonsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  bookCategoryContainer: {
    paddingVertical: 20,
    gap: 10,
  },
});
