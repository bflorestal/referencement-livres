import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import { useState } from "react";

import { CATEGORIES, LIVRES } from "../models/data";
import Categorie from "../models/categorie";
import Livre from "../models/livre";
import BookCategory from "../components/BookCategory";

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Recherche">;
};

export default function Home({ navigation }: HomeProps) {
  const [data, setData] = useState({ categories: CATEGORIES, books: LIVRES });

  const addCategory = (category: Categorie) => {
    setData((prevState) => ({
      ...prevState,
      categories: [...prevState.categories, category],
    }));
  };

  const addBook = (book: Livre) => {
    setData((prevState) => ({
      ...prevState,
      books: [...prevState.books, book],
    }));
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
            onPress={() => console.log("Ouverture de la modale")}
          />
          <Button
            title="Ajouter un livre"
            onPress={() => console.log("Ouverture de la modale")}
          />
        </View>
      </View>
      <ScrollView style={styles.bookCategoryContainer}>
        <BookCategory
          category={{ id: "all", couleur: "#000", genre: "Tous" }}
          books={LIVRES}
        />
        {data.categories.map((category) => (
          <BookCategory
            key={category.id}
            category={category}
            books={data.books.filter((book) =>
              book.categorieId.includes(category.id)
            )}
          />
        ))}
      </ScrollView>
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
