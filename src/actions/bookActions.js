
// this is fed an object that represents a book
export const addBook = (bookData) => dispatch => {
  //console.log(bookData.edition)
  const {
    title,
    author = '',
    subject = '',
    yearPublished = '',
    edition = ''
  } = bookData;
  const book = { title, subject, author, yearPublished, edition };
  
  dispatch({
    type: 'ADD_BOOK',
    book
  })
}