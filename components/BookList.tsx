import { StyleSheet, View } from "react-native";

import Livre from "../models/livre";

import BookCard from "./BookCard";

export default function BookList({ books }: { books: Livre[] }) {
  return (
    <View style={styles.bookList}>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bookList: {
    paddingVertical: 5,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
