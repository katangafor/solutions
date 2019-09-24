import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import NavWrapper from './NavWrapper';
import BookForm from './BookForm';

const AddBookPage = () => (
  <div>
    <div className={css(styles.spacer)}></div>
    <NavWrapper />
    <BookForm />
  </div>
)

const styles = StyleSheet.create({
  spacer: {
    height: 55
  }
})

export default AddBookPage;