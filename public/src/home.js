function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooksCount = books.filter((book) => book.borrows[0].returned === false);
return borrowedBooksCount.length;
}

function getMostCommonGenres(books) {
  const genreCounts = books.reduce((acc, book) => {
    if (acc.hasOwnProperty(book.genre)) {
      acc[book.genre]++;
    } else {
      acc[book.genre] = 1;
    }
    return acc;
  }, {});

  const sortedGenres = Object.entries(genreCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return sortedGenres;
}

function getMostPopularBooks(books) {
  const timesBorrowed = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  const sortedPopularBooks = timesBorrowed
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return sortedPopularBooks;
}

function getMostPopularAuthors(books, authors) {
  const authorCounts = authors.map((author) => {
    const authorBooks = books.filter((book) => book.authorId === author.id);
    const borrowCount = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: borrowCount };
  });

  const sortedPopularAuthors = authorCounts
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return sortedPopularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
