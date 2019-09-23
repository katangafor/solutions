import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const BookNavBarItem = ({ title, author, subject, description, edition }) => (
  <div className={css(styles.itemContainer)}>
    <p className={css(styles.item)}>{title}</p>
  </div>
)

export default BookNavBarItem;

const styles = StyleSheet.create({
  itemContainer: {
    fontSize: 20,
    padding: 10,
    margin: 0,
    borderBottom: '1px solid black'
  },
  item: {
    margin: 0
  }
})