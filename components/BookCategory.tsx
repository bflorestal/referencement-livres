import { StyleSheet, Text, View } from "react-native";

import Categorie from "../models/categorie";
import Livre from "../models/livre";

import BookList from "./BookList";

type BookCategoryProps = {
  category: Categorie;
  books: Livre[];
};

export default function BookCategory({ category, books }: BookCategoryProps) {
  return (
    <View>
      <Text
        style={[
          styles.categoryTitle,
          {
            backgroundColor: category.couleur,
            color: "#fff",
            textTransform:
              category.genre.length > 2 ? "capitalize" : "uppercase",
          },
        ]}
      >
        {category.genre}
      </Text>
      {books.length === 0 ? (
        <Text style={styles.noBooksText}>
          Il n'y a livre dans cette catégorie. Ajoutez-en un en cliquant sur le
          bouton en haut de l'écran.
        </Text>
      ) : category.id === "all" ? (
        <BookList books={books} />
      ) : (
        <BookList
          books={books.filter((book) => book.categorieId.includes(category.id))}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryTitle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 18,
    fontWeight: "600",
  },
  noBooksText: {
    paddingVertical: 10,
    textAlign: "center",
  },
});
