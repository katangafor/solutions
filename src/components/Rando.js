import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import encodeUrl from 'encodeurl';

import { addBook } from '../actions/bookActions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ 
      title,
      lastChanged: 'title'
    }))
  }

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({ 
      author,
      lastChanged: 'author'
    }))
  }

  // TODO searching only happens by title, the author is extra,

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === '') {
      this.setState({ error: 'Sorry, you hafta enter a title' });
    } else {
      this.setState({ error: '' });
      if (this.state.lastChanged === 'title') {
        const title = encodeUrl(this.state.title);
        const author = encodeUrl(this.state.author);
        let URL = '';
        // console.log(`author is ${author}`)
        // if (author === '') {
        //   URL = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        // } else {
        //   console.log('tryna fetch the book...')
        //   URL = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`
        // }
        console.log(URL);
        axios.get(URL)
        .then(function (response) {
          console.log(response);
          console.log(response.data.items[0].volumeInfo.title);
        })
        .catch(function (error) {
          console.log(error);
        })
      } else if (this.state.lastChanged === 'author') {
        

      }
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
          <p className={css(styles.label)}>Author:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <button onClick={(e) => {e.preventDefault();console.log(this.props.state)}}>print the state</button>
        </form>
        <button className={css(styles.submitButton)} onClick={this.onFormSubmit}>Add book</button>
        <p className={css(styles.errorMessage)}>{this.state.error}</p>
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