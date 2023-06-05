import { FlatList, Text } from "react-native";

import Livre from "../models/livre";

export default function BookList({ books }: { books: Livre[] }) {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <Text>{item.titre}</Text>}
      contentContainerStyle={{
        gap: 10,
        flexDirection: "row",
      }}
    />
  );
}
