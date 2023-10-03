function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account) => account.id === id);
return foundAccount;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountsB) =>
  accountA.name.last.toLowerCase() > accountsB.name.last.toLowerCase() ? 1 : -1
);
return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let borrows = books.filter((book) => book.borrows.some((borrow) => borrow.id === account.id));
  return borrows.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter((book) => {
    const [currentTransaction] = book.borrows;

    return (
      currentTransaction.id === account.id && !currentTransaction.returned
    );
  });

  const booksWithAuthors = borrowedBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);

    return {
      ...book,
      author,
    };
  });

  return booksWithAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
