import { Book } from "../Book/Book";
import { User } from "../User/User";

interface BookLoanProps {
  id: string;
  book: Book;
  user: User;
  loanDate: Date;
  returnDate: Date;
}

export class BookLoan {
  private _bookLoanProps: BookLoanProps;

  constructor(bookLoanProps: BookLoanProps) {
    const { loanDate, returnDate } = bookLoanProps;

    if (returnDate <= loanDate) {
      throw new Error("Invalid Return Date");
    }

    this._bookLoanProps = bookLoanProps;
  }

  get id(): string {
    return this._bookLoanProps.id;
  }

  set id(id: string) {
    this._bookLoanProps.id = id;
  }

  get book(): Book {
    return this._bookLoanProps.book;
  }

  set book(book: Book) {
    this._bookLoanProps.book = book;
  }

  get user(): User {
    return this._bookLoanProps.user;
  }

  set user(user: User) {
    this._bookLoanProps.user = user;
  }

  get loanDate(): Date {
    return this._bookLoanProps.loanDate;
  }

  set loanDate(loanDate: Date) {
    this._bookLoanProps.loanDate = loanDate;
  }

  get returnDate(): Date {
    return this._bookLoanProps.returnDate;
  }

  set returnDate(returnDate: Date) {
    if (returnDate < this._bookLoanProps.loanDate) {
      throw new Error("Invalid Return Date");
    }

    this._bookLoanProps.returnDate = returnDate;
  }
}