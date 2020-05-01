import React, { Component } from 'react';
import { useConnect } from '@blockstack/connect';

export const Signin = () => {
  const { doOpenAuth } = useConnect();

  return (
    <div className="panel-landing" id="section-1">
      <h1 className="landing-heading">Hello, Blockstack!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signin-button"
          onClick={() => doOpenAuth()}
        >
          Sign In with Blockstack
        </button>
      </p>
    </div>
  );
}

export default Signin;
