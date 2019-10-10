import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { addBook } from '../actions/bookActions';

const BookSearchResult = (props) => {

  const submitBook = () => {
    props.submitBook({
      title: props.title,
      author: props.author
    })
  }

  return (
  <div className={css(styles.bookSearchResult)}>
    <img className={css(styles.thumbnail)} src={props.thumbnail} alt="ok" onClick={submitBook}></img>
    <h3 className={css(styles.title)}>{props.title} ({props.date})</h3>
    <p className={css(styles.author)}>By {props.author}</p>
  </div>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitBook: (book) => dispatch(addBook(book))
  }
}

export default connect(undefined, mapDispatchToProps)(BookSearchResult);

const styles = StyleSheet.create({
  bookSearchResult: {
    width: '90%',
    height: 200,
    margin: '0 auto',
    padding: '10px 0px',
    borderBottom: '1px solid black',
    position: 'relative'
  },
  thumbnail: {
    ':hover': {
      cursor: 'pointer'
    }
  },
  title: {
    fontSize: 20,
    position: 'absolute',
    left: 150,
    top: 10
  },
  author: {
    position: 'absolute',
    left: 150,
    bottom: 20
  }
})