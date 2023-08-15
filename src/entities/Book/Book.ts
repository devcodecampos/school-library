interface BookProps {
  id: string;
  title: string;
  author: string;
  publishDate: Date;
  genre: string;
  quantityAvailable: number;
}

export class Book {
  private _bookProps: BookProps;

  constructor(bookProps: BookProps) {
    this._bookProps = bookProps;
  }

  get id(): string {
    return this._bookProps.id;
  }

  set id(id: string) {
    this._bookProps.id = id;
  }

  get title(): string {
    return this._bookProps.title;
  }

  set title(title: string) {
    this._bookProps.title = title;
  }

  get author(): string {
    return this._bookProps.author;
  }

  set author(author: string) {
    this._bookProps.author = author;
  }

  get publishDate(): Date {
    return this._bookProps.publishDate;
  }

  set publishDate(publishDate: Date) {
    this._bookProps.publishDate = publishDate;
  }

  get genre(): string {
    return this._bookProps.genre;
  }

  set genre(genre: string) {
    this._bookProps.genre = genre;
  }

  get quantityAvailable(): number {
    return this._bookProps.quantityAvailable;
  }

  set quantityAvailable(quantityAvailable: number) {
    this._bookProps.quantityAvailable = quantityAvailable;
  }
}