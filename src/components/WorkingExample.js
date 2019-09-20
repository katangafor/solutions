import React from 'react';
import { connect } from 'react-redux';
import randomString from 'randomstring';

import { addBook } from '../actions/bookActions';

const WorkingExample = (props) => (
  <>
    <h1 onClick={() => console.log(randomString.generate(5))}>this is home</h1>
    <h2 onClick={() => console.log(props.wholeThing)}>pls</h2>
    <h3 onClick={props.addBook}>Add a book!</h3>
  </>
)

const mapStateToProps = (state) => {
  return {
    wholeThing: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: () => {
      const book = {
        title: randomString.generate(5),
        subject: randomString.generate(10)
      }
      dispatch(addBook(book))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkingExample);