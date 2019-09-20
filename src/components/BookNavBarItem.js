import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const BookNavBarItem = ({ title, author, subject, description, edition }) => (
  <div className={css(styles.item)}>
    <p>{title}</p>
  </div>
)

export default BookNavBarItem;

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10
  }
})