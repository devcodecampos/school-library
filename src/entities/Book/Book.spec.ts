import { expect, test } from "vitest";
import { Book } from "./Book";

test("create an book", () => {
  const publishDate = new Date("2017-09-27");

  const book = new Book({
    title: "The Things You Can See Only When You Slow Down",
    author: "Haemin Sunim",
    publishDate: publishDate,
    genre: "self-help",
    quantityAvailable: 2,
  });

  expect(book).toBeInstanceOf(Book);
  expect(book.title).toEqual("The Things You Can See Only When You Slow Down");
  expect(book.author).toEqual("Haemin Sunim");
  expect(book.publishDate).toEqual(publishDate);
  expect(book.genre).toEqual("self-help");
  expect(book.quantityAvailable).toEqual(2);
});