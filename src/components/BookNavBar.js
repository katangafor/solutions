import React from 'react';
import { connect } from 'react-redux';

const BookNavBar = (props) => (
  <div>
    <p>yep</p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookNavBar);