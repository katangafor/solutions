import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { addBook } from '../actions/bookActions';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      subject: '',
      description: '',
      version: '',
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }))
  }

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({ author }))
  }

  onSubjectChange = (e) => {
    const subject = e.target.value;
    this.setState(() => ({ subject }))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onVersionChange = (e) => {
    const version = e.target.value;
    this.setState(() => ({ version }))
  }

    onFormSubmit = (e) => {
      e.preventDefault();
      const book = {
        title: this.state.title,
        author: this.state.author,
        subject: this.state.subject,
        description: this.state.description,
        version: this.state.version
      }

      if (this.state.title === '') {
        console.log('boutta make an error')
        this.setState(() => ({ error: 'You have to include a book title. The other fields are optional.' }))
      } else {
        this.props.submitBook(book);
      }
      // const book = {
      //   title: this.state.title,
      //   author: this.state.author,
      //   subject: this.state.subject,
      //   description: this.state.description,
      //   version: this.state.version
      // }

      // if (this.state.error === '') {

      // }
    }

  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   const book = {
  //     ...this.state
  //   }
  //   this.props.submitBook(book);
  // }

  render() {
    return (
      <div  className={css(styles.bookForm)}>
        <form>

          <p className={css(styles.label)}>Title:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <p className={css(styles.label)}>Author:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <p className={css(styles.label)}>Subject:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.subject}
            onChange={this.onSubjectChange}
          />
          <p className={css(styles.label)}>Description:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <p className={css(styles.label)}>Version:</p>
          <input
            className={css(styles.textField)}
            type="text"
            placeholder=""
            value={this.state.version}
            onChange={this.onVersionChange}
          />
          <button onClick={(e) => {e.preventDefault();console.log(this.props.state)}}>print the state</button>
        </form>
        <button className={css(styles.submitButton)} onClick={this.onFormSubmit}>Add book</button>
        <p className={css(styles.errorMessage)}>{this.state.error}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitBook: (book) => dispatch(addBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm)

const styles = StyleSheet.create({
  bookForm: {
    width: '80%',
    margin: '0 auto'
  },
  label: {
    fontSize: 18,
    marginBottom: 6
  },
  textField: {
    width: '80%',
    padding: '8px 14px',
    margin: 0,
    border: '1px solid #ccc',
    borderRadius: 8,
    fontSize: 20,
  },
  errorMessage: {
    color: 'red'
  },
  submitButtonContainer: {

  },
  submitButton: {
    fontSize: 30,
    padding: 10,
    border: '2px solid #ccc',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: '#bdc3c7',
    margin: 0,
    marginTop: 20,
    width: '80%',
    ':hover': {
      cursor: 'pointer'
    }
  }
})

// TODO get the add book button to be the same size as the text fields, or just have it be centered or something. Padding is weird