import { FlatList } from "react-native";

import Livre from "../models/livre";

import BookCard from "./BookCard";

export default function BookList({ books }: { books: Livre[] }) {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <BookCard {...item} />}
      contentContainerStyle={{
        paddingVertical: 5,
        gap: 10,
        flexDirection: "row",
      }}
    />
  );
}
