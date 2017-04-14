import React, { Component, Link } from 'react';
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  isSignInPending,
  isUserSignedIn,
  loadUserData,
  makeAuthRequest,
  Person,
  redirectUserToSignIn,
  signUserIn,
  signUserOut,
} from 'blockstack';

export default class App extends Component {

  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name: 'Anonymous',
  	  	avatarUrl() {
  	  	  return 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
  	  	},
  	  },
  	};
  }

  handleSignIn(e) {
    e.preventDefault();
  	const authRequest = makeAuthRequest(null, window.location.origin);
    redirectUserToSignIn(authRequest);

  	if (isUserSignedIn()) {
      loadUserData(function(userData) {
        this.setState({
          person: new Person(userData.profile),
        });
      });
    } else if (isSignInPending()) {
      signUserIn(function(userData) {
        window.location = window.location.origin;
      });
    }
  }

  handleSignOut(e) {
    e.preventDefault();
    signUserOut(window.location.origin);
  }

  render() {
    const { person } = this.state;
    console.log(isUserSignedIn());
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !isUserSignedIn() ?
            <Signin
              handleSignIn={ this.handleSignIn }
            />
            :
            <Profile
              handleSignOut={ this.handleSignOut }
            />
          }
        </div>
      </div>
    );
  }
}
