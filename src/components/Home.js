import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { withRouter } from 'react-router-dom';
import NavWrapper from './NavWrapper';


const Home = (props) => {

  return(
    <>
      <div className={css(styles.spacer)}></div>
      <NavWrapper />
      <h3>Welcome home</h3>
      <p className={css(styles.addBookLink)} onClick={() => {props.history.push('/addbook')}}>Add book!</p>
      <p onClick={() => console.log(process.env.REACT_APP_BOOKS_API_KEY)}>check environment variables</p>
    </>
  )
}

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
  },
  addBookLink: {
    ':hover': {
      cursor: 'pointer'
    }
  }
})

export default withRouter(Home);