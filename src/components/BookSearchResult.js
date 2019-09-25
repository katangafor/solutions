import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const BookSearchResult = ({ title, author, thumbnail }) => (
  <div className={css(styles.bookSearchResult)}>

    <h3 onClick={() => {console.log(thumbnail)}}>{title}</h3>
    <p>{author}</p>
    <img src={thumbnail} alt="ok"></img>
  </div>
)

export default BookSearchResult;

const styles = StyleSheet.create({
  bookSearchResult: {
    borderBottom: '1px solid black'
  }
})