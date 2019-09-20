import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BookForm from './BookForm';
import BookNavBar from './BookNavBar';


const Home = (props) => (
  <>
    <h1 className={css(styles.mainTitle)}>Welcome to the home page!</h1>
    <BookForm />
    <BookNavBar />
  </>
)

const styles = StyleSheet.create({
  mainTitle: {
    width: '90%',
    margin: '0 auto',
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
})

export default Home;