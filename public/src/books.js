function findAuthorById(authors, id) {
  let authorFound = authors.find((author) => author.id === id);
return authorFound;
}
// used .find to find the author with the id provided.

function findBookById(books, id) {
  let bookFound = books.find((book) => book.id === id);
return bookFound;
}
// used .find to find the books with the id provided.

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
// I created 2 empty arrays one for borrowedBooks and one for returnedBooks, after, I used a for/in loop to check all the books in the array, and with an if, I sorted them in the 2 arrays respectively.

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
