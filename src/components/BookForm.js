import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import encodeUrl from 'encodeurl';
import randomstring from 'randomstring';

import { addBook } from '../actions/bookActions';
import BookSearchResult from '../components/BookSearchResult';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      books: [],
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ 
      title
    }))
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '') {
      this.setState({ error: 'Sorry, you hafta enter a title' });
    } else {
      this.setState({ error: '' });
      const title = encodeUrl(this.state.title);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
      .then( (response) => {
        console.log(response);  
        let books = [];
        for (let i = 0; i < 10; i++) {
          let author  = 'Unknown';
          if (response.data.items[i].volumeInfo.authors) {
            author = response.data.items[i].volumeInfo.authors[0];
          }
          books.push({
            title: response.data.items[i].volumeInfo.title,
            author,
            thumbnail: response.data.items[i].volumeInfo.imageLinks.thumbnail
          })
          this.setState({
            books
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    
  }

  render() {
    return (
      <div  className={css(styles.bookForm)}>
        <form>
          <p className={css(styles.label)}>Title:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <button onClick={(e) => {e.preventDefault();console.log(this.state)}}>print the state</button>
        </form>
        <button className={css(styles.submitButton)} onClick={this.onFormSubmit}>Search books</button>
        <p className={css(styles.errorMessage)}>{this.state.error}</p>
        {this.state.books.length === 0 ? (
          <p>No books!</p>
        ) : (
          this.state.books.map((book) => {
            return <BookSearchResult 
              key={randomstring.generate(10)} 
              title={book.title} 
              author={book.author}
              thumbnail={book.thumbnail}
            />
      })
    )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitBook: (book) => dispatch(addBook(book))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookForm));

const styles = StyleSheet.create({
  bookForm: {
    width: '80%',
    margin: '0 auto'
  },
  label: {
    fontSize: 18,
    marginBottom: 6
  },
  textField: {
    width: '80%',
    padding: '8px 14px',
    margin: 0,
    border: '1px solid #ccc',
    borderRadius: 8,
    fontSize: 20,
  },
  errorMessage: {
    color: 'red'
  },
  submitButtonContainer: {

  },
  submitButton: {
    fontSize: 30,
    padding: 10,
    border: '2px solid #ccc',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: '#bdc3c7',
    margin: 0,
    marginTop: 20,
    width: '80%',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

// TODO get the add book button to be the same size as the text fields, or just have it be centered or something. Padding is weird