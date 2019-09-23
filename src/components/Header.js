import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = (props) => {

  const toggleBookNav = (e) => {
    e.preventDefault();
    props.toggleBookNav();
  }

  return (
    <div className={css(styles.header)}>
      <button className={css(styles.toggleButton)} onClick={toggleBookNav}>books</button>
    </div>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100vw',
    position: 'fixed',
    height: 60,
    top: 0,
    left: 0,
    backgroundColor: 'black',
  },
  toggleButton: {
    color: 'white',
    fontSize: '30px',
    padding: 10
  }
})