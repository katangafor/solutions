import React from 'react';
import firebase from '../firebase/firebase';
import { withRouter } from 'react-router-dom';

class PracticeAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password1: '',
      password2: ''
    }
  }

  onUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }

  onPassword1Change = (e) => {
    this.setState({password1: e.target.value})
  }

  onPassword2Change =(e) => {
    this.setState({password2: e.target.value})
  }

  register = () => {
    console.log(this.state.username, this.state.password1)
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password1).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ...
    });
  }

  printUser = () => {
    var user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
      });
    }
  }

  render() {
    return (
        <>
        <form>
          <input 
            type="text"
            placeholder="Choose a username"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input 
            type="text"
            placeholder="Choose a password"
            value={this.state.password1}
            onChange={this.onPassword1Change}
          />
          <input 
            type="text"
            placeholder="Confirm password"
            value={this.state.password2}
            onChange={this.onPassword2Change}
          />
        </form>
        <button onClick={this.register}>Make account!</button>
        <button onClick={this.printUser}>print user</button>
        <button onClick={() => {this.props.history.push('/auth-home')}}>go to home</button>
      </>
    )
  }
}

export default withRouter(PracticeAuth);