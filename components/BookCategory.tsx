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
    <View key={category.id}>
      <Text
        style={[
          styles.categoryTitle,
          { backgroundColor: category.couleur, color: "#fff" },
        ]}
      >
        {category.genre}
      </Text>
      {category.id === "all" ? (
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
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "600",
  },
});
