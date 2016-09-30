import React from 'react';
import { browserHistory } from 'react-router';

const Home = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(0);
  },

  handleTouchTap() {
    browserHistory.push('/html');
  },

  render() {
    let homeView;

    if (!this.props.loggedIn) {
      homeView = <main className="main">
        <section className="mainContent">
          <img className="hideLg bracket" src="/images/bracket-left.png"></img>
          <div className="inlineSm">
            <h1 className="mainHeader">Learn</h1>
            <h1 className="mainHeader">To Code</h1>
            <p className="mainSubHeader">Welcome to ltc</p>
            <p className="mainText">A complete set of tools to learn</p>
            <p className="mainText">the basics of web development</p>
          </div>
          <img className="hideLg bracket" src="/images/bracket-right.png"></img>
        </section>

        <section className="mainContent heroLogoLg">
          <img src="/images/hero-logo.png"></img>
        </section>

        <section className="mainContent hideSm">
          <div className="playContainer" onTouchTap={this.handleTouchTap}>
            <div className="play">
              <img src="/images/play.svg" />
            </div>
            <div style={{ flex: '1' }}>
              <p className="playLabel">Tour <br />Curriculum</p>
            </div>
          </div>
        </section>

        <section className="mainContent hideLg">
          <div className="playContainer" onTouchTap={this.handleTouchTap}>
            <a className="play" href="#">
              <img src="/images/play.svg" />
            </a>
            <div style={{ flex: '1' }}>
              <p className="playLabel">Tour <br />Curriculum</p>
            </div>
          </div>
        </section>
      </main>;
    }

    if (this.props.loggedIn) {
      homeView = <main className="main">
        <section className="mainContent loggedInMargin">
          <img className="hideLg bracket" src="/images/bracket2-left.svg" />
          <div className="inlineSm">
            <h1 className="mainHeader">Learn</h1>
            <h1 className="mainHeader">To Code</h1>
            <p className="mainSubHeader">Welcome to ltc</p>
            <p className="mainText">Choose a subject from the menu </p>
            <p className="mainText">to get started or continue from </p>
            <p className="mainText">where you left off</p>
          </div>
          <img className="hideLg bracket" src="/images/bracket2-right.svg" />
        </section>

        <section className="mainContent heroLogoLg">
          <img src="/images/hero-logo2.svg"></img>
        </section>
      </main>;
    }

    return <div>
      {homeView}
    </div>
  }
});

export default Home;
