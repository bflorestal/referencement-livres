import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import Livre from "../models/livre";
import { LIVRES } from "../models/data";

import BookItem from "../components/BookItem";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState<Livre[]>(LIVRES);

  const handleChangeText = (text: string) => {
    setSearchTerm(text);
  };

  const filteredBooks = books.filter((book) =>
    book.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.title}>Rechercher un livre</Text>
      <TextInput
        placeholder="Titre du livre"
        value={searchTerm}
        onChangeText={handleChangeText}
        style={{
          backgroundColor: "#fff",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        }}
      />
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => <BookItem book={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookItemList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#eeeeee",
    height: "100%",
    padding: 20,
    gap: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
  },
  bookItemList: {
    gap: 10,
  },
});
