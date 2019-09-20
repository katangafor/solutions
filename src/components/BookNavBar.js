import React from 'react';
import { connect } from 'react-redux';
import randomString from 'randomstring';
import { StyleSheet, css } from 'aphrodite';
import BookNavBarItem from './BookNavBarItem';

const BookNavBar = (props) => (
  <div className={css(
    styles.navBar,
    !props.bookNavOpen && styles.navBarHidden
  )}>
    {props.books.length === 0 ? (
      <p>No books!</p>
    ) : (
      props.books.map((book) => {
        return <BookNavBarItem key={randomString.generate(5)}  {...book} />
      })
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookNavBar);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2ecc71',
    position: 'fixed',
    left: 0,
    top: 60,
    // mobile
    '@media only screen and (max-width: 750px)': {
      width: '100vw',
      transition: 'left .6s'
    },
    // desktop
    '@media only screen and (min-width: 750px)': {
      width: '750px',
    }
  },
  navBarHidden: {
    // mobile
    '@media only screen and (max-width: 750px)': {
      left: '-100vw'
    }
  }
})