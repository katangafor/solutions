import React from 'react';
import firebase from '../firebase/firebase';
import { withRouter } from 'react-router-dom';

class PracticeAuthHome extends React.Component {
  constructor(props) {
    super(props)
  }

  printUser = () => {
    var user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      })
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.history.push('/auth')
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
        <button onClick={this.printUser}>print user</button>
        <button onClick={this.signOut}>sign out</button>
      </>
    )
  }
}

export default withRouter(PracticeAuthHome);