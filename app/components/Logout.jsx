import React from 'react';
import { browserHistory } from 'react-router';

const Logout = React.createClass({
  handleLogout() {
    this.props.handleLoginState(false);
    window.location.href = '/auth/logout';
  },

  render() {
    return <div>
      <section className="heroImg profileHero">
        <h1 className="heroText">Logout</h1>
      </section>
      <main className="mainLogin">
        <h3 className="mainLoginHeader">Thank you for using Learn To Code!</h3>
        <h3 className="mainLoginHeader">See you again soon.</h3>
        <a
          className="authBtnLogout"
          onTouchTap={this.handleLogout}
        >
        LOGOUT
        </a>
      </main>
    </div>;
  }
});

export default Logout;
