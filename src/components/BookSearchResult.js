import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const BookSearchResult = ({ title, author, thumbnail }) => (
  <div className={css(styles.bookSearchResult)}>
    <img className={css(styles.thumbnail)} src={thumbnail} alt="ok"></img>
    <h3 className={css(styles.title)}>{title}</h3>
    <p className={css(styles.author)}>By {author}</p>
  </div>
)

export default BookSearchResult;

const styles = StyleSheet.create({
  bookSearchResult: {
    width: '90%',
    margin: '0 auto',
    padding: '10px 0px',
    borderBottom: '1px solid black',
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'end'
  },
  thumbnail: {
    gridColumn: '1',
    gridRow: '1 / 3'
  },
  title: {
    gridColumn: '2 / 4',
    gridRow: '1',
    paddingLeft: 10
  },
  author: {
    gridColumn: '2 / 4',
    gridRow: '2',
    paddingLeft: 10
  }
})