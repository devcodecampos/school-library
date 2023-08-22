import { Book } from "./entities/Book/Book";
import { BookLoan } from "./entities/BookLoan/BookLoan";
import { Library } from "./entities/Library/Library";
import { Student } from "./entities/Student/Student";
import { Teacher } from "./entities/Teacher/Teacher";
import { User } from "./entities/User/User";
import { input, select } from "@inquirer/prompts";

type SelectInquirerChoice = {
  name: string;
  value: string;
};

const cli = async (): Promise<string> => {
  return await select({
    message: "Select An Option",
    choices: [
      {
        name: "searchBookByTitle",
        value: "searchBookByTitle",
      },
      {
        name: "addBook",
        value: "addBook",
      },
      {
        name: "registerUser",
        value: "registerUser",
      },
      {
        name: "bookLoan",
        value: "bookLoan",
      },
      {
        name: "bookReturn",
        value: "bookReturn",
      },
      {
        name: "getUsers",
        value: "getUsers",
      },
      {
        name: "getBookLoans",
        value: "getBookLoans",
      },
      {
        name: "getBooks",
        value: "getBooks",
      },
      {
        name: "exit",
        value: "exit",
      },
    ],
  });
};

const app = async () => {
  let optionMenu: string;
  const library = new Library();

  do {
    console.log("{ SCHOOL LIBRARY }");
    optionMenu = await cli();

    switch (optionMenu) {
      case "searchBookByTitle": {
        const bookTitle: string = await input({
          message: "title:",
        });

        console.log(library.HandleSearchBookByTitle(bookTitle));
        break;
      }
      case "addBook": {
        const title: string = await input({
          message: "title:",
        });
        const author: string = await input({
          message: "author:",
        });
        const publishDate: string = await input({
          message: "publishDate, in the format 2023/12/01:",
        });

        const genre: string = await input({
          message: "genre:",
        });

        const quantityAvailable: string = await input({
          message: "quantityAvailable:",
        });

        const book = new Book({
          title,
          author,
          publishDate: new Date(publishDate),
          genre,
          quantityAvailable: +quantityAvailable,
        });

        library.addBook(book);
        break;
      }
      case "registerUser": {
        const userType = async (): Promise<string> => {
          return await select({
            message: "Select An Option",
            choices: [
              {
                name: "student",
                value: "student",
              },
              {
                name: "teacher",
                value: "teacher",
              },
            ],
          });
        };

        const user = await userType();
        if (user === "student") {
          const name: string = await input({
            message: "name:",
          });
          const studentClass: string = await input({
            message: "studentClass:",
          });
          const registrationId: string = await input({
            message: "registrationId:",
          });
          const student = new Student(
            {
              name,
            },
            { studentClass, registrationId }
          );

          library.registerUser(student);
        } else if (user === "teacher") {
          const arr: SelectInquirerChoice[] = [];

          library.users.filter((users) => {
            if (users instanceof Student) {
              arr.push({
                name: users.name,
                value: users.id,
              });
            }
            return users;
          });

          const name: string = await input({
            message: "name:",
          });

          const studentSelected = async (): Promise<string> => {
            return await select({
              message: "Select Students From Teacher",
              choices: arr,
            });
          };

          const studentID: string = await studentSelected();
          const filteredStudent = library.users.find((users) => {
            if (users instanceof Student && users.id === studentID) return true;
            return false;
          }) as Student;

          const teacher = new Teacher(
            {
              name,
            },
            {
              students: [filteredStudent],
            }
          );

          library.registerUser(teacher);
        }
        break;
      }
      case "bookLoan": {
        const arrBooks: SelectInquirerChoice[] = [];
        const arrUsers: SelectInquirerChoice[] = [];

        library.books.filter((book) => {
          arrBooks.push({
            name: book.title,
            value: book.id,
          });
          return book;
        });

        library.users.filter((user) => {
          arrUsers.push({
            name: user.name,
            value: user.id,
          });

          return user;
        });

        const bookSelected = async (): Promise<string> => {
          return await select({
            message: "Select The Book",
            choices: arrBooks,
          });
        };

        const bookID: string = await bookSelected();
        const filteredBook: Book = library.books.find((book) => {
          return book.id === bookID;
        }) as Book;

        const userSelected = async (): Promise<string> => {
          return await select({
            message: "Select The User",
            choices: arrUsers,
          });
        };

        const userID: string = await userSelected();
        const filteredUser: User = library.users.find((user) => {
          return user.id === userID;
        }) as User;

        const loanDate: string = await input({
          message: "loanDate, in the format 2023/12/01:",
        });
        const returnDate: string = await input({
          message: "returnDate, in the format 2023/12/01:",
        });

        const bookLoan = new BookLoan({
          book: filteredBook,
          user: filteredUser,
          loanDate: new Date(loanDate),
          returnDate: new Date(returnDate),
        });

        library.handleBookLoan(bookLoan);
        break;
      }
      case "bookReturn": {
        const arrBookReturn: SelectInquirerChoice[] = [];

        library.bookLoan.filter((bookLoan) => {
          arrBookReturn.push({
            name: bookLoan.book.title,
            value: bookLoan.id,
          });
          return bookLoan;
        });

        const bookLoanSelected = async (): Promise<string> => {
          return await select({
            message: "Select Book Loan",
            choices: arrBookReturn,
          });
        };

        const bookLoanID: string = await bookLoanSelected();
        const filteredBookLoan: BookLoan = library.bookLoan.find((bookLoan) => {
          return bookLoan.id === bookLoanID;
        }) as BookLoan;

        library.handleBookReturn(filteredBookLoan);
        break;
      }
      case "getUsers": {
        const filteredUsers: User[] = library.users.filter((users) => {
          return users;
        });

        console.log(filteredUsers);
        break;
      }
      case "getBookLoans": {
        const filteredBookLoans: BookLoan[] = library.bookLoan.filter(
          (bookLoans) => {
            return bookLoans;
          }
        );

        console.log(filteredBookLoans);
        break;
      }
      case "getBooks": {
        const filteredBooks: Book[] = library.books.filter((books) => {
          return books;
        });

        console.log(filteredBooks);
        break;
      }
    }
  } while (optionMenu !== "exit");
};

app();