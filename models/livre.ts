class Livre {
  id: string;
  categorieId: string[];
  titre: string;
  description: string;
  tomes: number;
  imageUrl: string;
  enCours: boolean;

  constructor(
    id: string,
    categorieId: string[],
    titre: string,
    description: string,
    tomes: number,
    imageUrl: string,
    enCours: boolean
  ) {
    this.id = id;
    this.categorieId = categorieId;
    this.titre = titre;
    this.description = description;
    this.tomes = tomes;
    this.imageUrl = imageUrl;
    this.enCours = enCours;
  }
}

export default Livre;

export type BookWithoutId = Omit<Livre, "id">;
