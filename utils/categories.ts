import { CATEGORIES } from "../models/data";

export function getCategoryName(categoryId: string) {
  return CATEGORIES.find((category) => category.id === categoryId)?.genre;
}

export function getCategoryColor(categoryId: string) {
  const category = CATEGORIES.find((category) => category.id === categoryId);
  return category?.couleur;
}
