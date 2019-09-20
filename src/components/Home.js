import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BookForm from './BookForm';
import BookNavBar from './BookNavBar';
import NavWrapper from './NavWrapper';


const Home = (props) => (
  <>
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
  }
})

export default Home;