import { Book } from "../Book/Book";
import { BookLoan } from "../BookLoan/BookLoan";
import { User } from "../User/User";

interface LibraryProps {
  books: Book[];
  users: User[];
  bookLoan: BookLoan[];
}

export class Library {
  private _libraryProps: LibraryProps;

  constructor(libraryProps?: LibraryProps) {
    this._libraryProps = libraryProps || { books: [], users: [], bookLoan: [] };
  }

  addBook(book: Book): void {
    this._libraryProps.books.push(book);
  }

  registerUser(user: User): void {
    this._libraryProps.users.push(user);
  }

  handleBookLoan(bookLoan: BookLoan): BookLoan {
    if (bookLoan.book.quantityAvailable === 0) {
      throw new Error("The book is not available for loan");
    }

    this._libraryProps.bookLoan.push(bookLoan);
    bookLoan.book.quantityAvailable = bookLoan.book.quantityAvailable - 1;

    return bookLoan;
  }

  handleBookReturn(bookLoan: BookLoan): Book {
    const indexLoanBook: number = this._libraryProps.bookLoan.findIndex(
      (index) => {
        index.id === bookLoan.id;
      }
    );

    this._libraryProps.bookLoan.splice(indexLoanBook, 1);
    bookLoan.book.quantityAvailable = bookLoan.book.quantityAvailable + 1;

    return bookLoan.book;
  }

  HandleSearchBookByTitle(title: string): Book[] {
    if (title.trim() === "") {
      throw new Error("Empty title provided: The book title cannot be empty");
    }

    const filteredBook: Book[] = this._libraryProps.books.filter((book) => {
      return book.title.toLowerCase().includes(title.toLowerCase());
    });

    return filteredBook;
  }
}