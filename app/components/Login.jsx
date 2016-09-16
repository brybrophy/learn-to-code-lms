import React from 'react';

const Login = React.createClass({
  render() {
    return <div>
      <section className="heroImg profileHero">
        <h1 className="heroText">Login</h1>
      </section>
      <main className="mainLogin">
        <h3 className="mainLoginHeader">Signup or Login with meetup.com</h3>
        <h3 className="mainLoginHeader">to view lessons or view and</h3>
        <h3 className="mainLoginHeader">edit your profile.</h3>
        <a
          className="authBtnMeetup"
        >
          <img src="/images/meetup-logo.svg" />
          <img src="/images/meetup-word-logo.svg" />
        </a>
      </main>
    </div>;
  }
});

export default Login;
