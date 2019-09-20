import React from 'react';
import BookForm from './BookForm';
import { StyleSheet, css } from 'aphrodite';

const Home = (props) => (
  <>
    <h1 className={css(styles.mainTitle)}>Welcome to the home page!</h1>
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
  }
})

export default Home;