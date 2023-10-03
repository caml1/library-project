function findAuthorById(authors, id) {
  let authorFound = authors.find((author) => author.id === id);
return authorFound;
}

function findBookById(books, id) {
  let bookFound = books.find((book) => book.id === id);
return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = [];
  const returnedBooks = [];

  for (let book of books) {
    const [currentTransaction] = book.borrows;
    if (currentTransaction.returned) {
      returnedBooks.push(book);
    } else {
      borrowedBooks.push(book);
    }
  }

  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map(({ id, returned }) => {
    const account = accounts.find((account) => account.id === id);
    return { ...account, returned };
  });

  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
