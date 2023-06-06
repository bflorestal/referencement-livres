import { Image, StyleSheet, Text, View } from "react-native";

import Livre from "../models/livre";
import { CATEGORIES } from "../models/data";

function getCategoryName(categoryId: string) {
  return CATEGORIES.find((category) => category.id === categoryId)?.genre;
}

function getCategoryColor(categoryId: string) {
  const category = CATEGORIES.find((category) => category.id === categoryId);
  return category?.couleur;
}

export default function BookItem({ book }: { book: Livre }) {
  return (
    <View style={styles.bookItemContainer}>
      <View style={styles.bookImageContainer}>
        <Image
          source={{ uri: book.imageUrl }}
          alt={book.titre}
          style={styles.bookImage}
        />
      </View>
      <View style={styles.bookDescriptionContainer}>
        <View>
          <Text style={styles.bookTitle}>{book.titre}</Text>
          <Text
            style={[
              styles.smallText,
              { color: book.enCours ? "green" : "blue" },
            ]}
          >
            {book.enCours ? "En cours" : "Terminé"}
          </Text>
          <Text style={styles.smallText}>Nombre de tomes : {book.tomes}</Text>
        </View>
        <View>
          <Text style={styles.categoriesListTitle}>Catégories :</Text>
          <View style={styles.categoriesListContainer}>
            {book.categorieId.map((categoryId) => (
              <Text
                style={[
                  styles.categoryPill,
                  { backgroundColor: getCategoryColor(categoryId) || "#000" },
                  styles.smallText,
                ]}
                key={categoryId}
              >
                {getCategoryName(categoryId)}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const RIGHT_MAX_WIDTH = 100;
const TITLE_MARGIN_BOTTOM = 4;

const styles = StyleSheet.create({
  bookItemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  bookImageContainer: {
    maxWidth: RIGHT_MAX_WIDTH,
    gap: 5,
  },
  bookImage: {
    width: RIGHT_MAX_WIDTH,
    aspectRatio: 3 / 4,
  },
  bookTitle: {
    fontWeight: "600",
    marginBottom: TITLE_MARGIN_BOTTOM,
  },
  bookDescriptionContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  smallText: {
    fontSize: 12,
  },
  categoriesListTitle: {
    fontWeight: "500",
    fontSize: 13,
    marginBottom: TITLE_MARGIN_BOTTOM,
  },
  categoriesListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  categoryPill: {
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
    color: "#fff",
  },
});
