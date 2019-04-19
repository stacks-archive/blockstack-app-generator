import React, { Component, Link } from 'react';
import Profile from './Profile.jsx';
import Signin from './Signin.jsx';
import {
  UserSession,
  AppConfig
} from 'blockstack';

const appConfig = new AppConfig()
const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {

  constructor(props) {
  	super(props);
  }

  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
    );
  }

  componentWillMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.location = window.location.origin;
      });
    }
  }
}
