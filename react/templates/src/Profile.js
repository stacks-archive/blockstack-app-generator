import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export const Profile = ({ userData, handleSignOut }) => {
  const { username } = userData;
  const person = new Person(userData.profile);
  return (
    <div className="panel-welcome" id="section-2">
      <div className="avatar-section">
        <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
      </div>
      <h1>Hello, <span id="heading-name">{ person.name() || username || 'Nameless Person' }</span>!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signout-button"
          onClick={ handleSignOut.bind(this) }
        >
          Logout
        </button>
      </p>
    </div>
  );
}

export default Profile
