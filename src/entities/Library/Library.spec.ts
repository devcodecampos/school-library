import { expect, test } from "vitest";
import { Book } from "../Book/Book";
import { User } from "../User/User";
import { BookLoan } from "../BookLoan/BookLoan";
import { Library } from "./Library";

test("create a library", () => {
  const publishDate = new Date("2017-09-27");
  const book = new Book({
    id: "BA-012",
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 1,
  });

  const user = new User({
    id: "fap-20",
    name: "Matheus Campos",
  });

  const loanDate = new Date();
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 1);
  const bookLoan = new BookLoan({
    id: "LB-012",
    book: book,
    user: user,
    loanDate: loanDate,
    returnDate: returnDate,
  });

  const library = new Library({
    books: [book],
    users: [user],
    bookLoan: [bookLoan],
  });

  expect(library).toBeInstanceOf(Library);
});

test("cannot create a book loan with a book that has no available quantity", () => {
  const publishDate = new Date("2017-09-27");
  const book = new Book({
    id: "BA-012",
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 0,
  });

  const user = new User({
    id: "fap-20",
    name: "Matheus Campos",
  });

  const loanDate = new Date();
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + 1);
  const bookLoan = new BookLoan({
    id: "LB-012",
    book: book,
    user: user,
    loanDate: loanDate,
    returnDate: returnDate,
  });

  const library = new Library();

  expect(() => {
    return library.handleBookLoan(bookLoan);
  }).toThrow("The book is not available for loan");
});

test("cannot create a book search by title with an empty title", () => {
  const publishDate = new Date("2017-09-27");
  const book = new Book({
    id: "BA-012",
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 0,
  });

  const library = new Library();
  library.addBook(book);

  expect(() => {
    return library.HandleSearchBookByTitle("");
  }).toThrow("Empty title provided: The book title cannot be empty");
});