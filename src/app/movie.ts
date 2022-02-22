export class Movie {
  id: number;
  name: string;
  description: string | undefined;
  imageUrl: string | undefined;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
