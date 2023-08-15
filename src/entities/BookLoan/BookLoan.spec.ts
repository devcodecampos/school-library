import { expect, test } from "vitest";
import { User } from "../User/User";
import { Book } from "../Book/Book";
import { BookLoan } from "./BookLoan";

test("create an book loan", () => {
  const numberOfDaysToSubtract = 1;
  const publishDate = new Date("2017-09-27");
  const loanDate = new Date();
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() + numberOfDaysToSubtract);

  const user = new User({
    id: "fap-20",
    name: "Matheus Campos",
  });

  const book = new Book({
    id: "BA-012",
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 2,
  });

  const bookLoan = new BookLoan({
    id: "LB-012",
    book: book,
    user: user,
    loanDate: loanDate,
    returnDate: returnDate,
  });

  expect(bookLoan).toBeInstanceOf(BookLoan);
  expect(bookLoan.id).toEqual("LB-012");
  expect(bookLoan.user).toEqual(user);
  expect(bookLoan.loanDate).toEqual(loanDate);
  expect(bookLoan.returnDate).toEqual(returnDate);
});

test("cannot create an book loan with return date before loan date", () => {
  const numberOfDaysToSubtract = 1;
  const publishDate = new Date("2017-09-27");
  const loanDate = new Date();
  const returnDate = new Date();
  returnDate.setDate(returnDate.getDate() - numberOfDaysToSubtract);

  const user = new User({
    id: "fap-20",
    name: "Matheus Campos",
  });

  const book = new Book({
    id: "BA-012",
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 2,
  });

  expect(() => {
    return new BookLoan({
      id: "LB-012",
      book: book,
      user: user,
      loanDate: loanDate,
      returnDate: returnDate,
    });
  }).toThrow("Invalid Return Date");
});