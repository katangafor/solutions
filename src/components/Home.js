import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BookForm from './BookForm';
import NavWrapper from './NavWrapper';


const Home = (props) => (
  <>
    <div className={css(styles.spacer)}></div>
    <NavWrapper />
    <BookForm />
  </>
)

const styles = StyleSheet.create({
  mainTitle: {
    width: '90%',
    margin: '0 auto',
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  },
  spacer: {
    height: 55
  }
})

export default Home;