function getTotalBooksCount(books) {
  return books.length;
}
// I just did a quick count with the use of .length

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// I just did a quick count with the use of .length

function getBooksBorrowedCount(books) {
  let borrowedBooksCount = books.filter((book) => book.borrows[0].returned === false);
return borrowedBooksCount.length;
}
// I used the .filter to get the books that are out and did a quick count with the use of .length

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
  return getFiveMostPopular(sortedGenres);
}

// HELPER FUNCTION that sorts most popular and then gives 5 entries max.
function getFiveMostPopular(item){ 
  return item.sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  const timesBorrowed = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));

  return getFiveMostPopular(timesBorrowed);
}
// I used .map to get an array of the most borrowed books just including the title and the count of times that it's been borrowed, and lastly i used my helper function to get it the 5 most popular.

function getMostPopularAuthors(books, authors) {
  const authorCounts = authors.map((author) => {
    const authorBooks = books.filter((book) => book.authorId === author.id);
    const borrowCount = authorBooks.reduce((acc, book) => acc + book.borrows.length, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: borrowCount };
  });

  return getFiveMostPopular(authorCounts);
}
// used .map to get an array of the outhors, used .filter to get the authors books filtered and I accomodated how the array should look like. Lastly I used my helper function to get the 5 most popular.

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

