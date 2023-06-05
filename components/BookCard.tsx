import { Image, Text, StyleSheet, View } from "react-native";
import React from "react";

type BookCardProps = {
  titre: string;
  imageUrl: string;
};

export default function BookCard({ titre, imageUrl }: BookCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} alt={titre} style={styles.image} />
      <Text style={styles.title}>{titre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 100,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 35,
    height: 75,
    aspectRatio: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
});
