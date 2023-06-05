import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.title}>Rechercher un livre</Text>
      <TextInput
        style={{
          backgroundColor: "#fff",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          padding: 5,
        }}
        placeholder="Titre du livre"
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
});
