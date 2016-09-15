import Play from 'material-ui/svg-icons/av/play-arrow';
import React from 'react';
import { browserHistory } from 'react-router';

const Home = React.createClass({
  handleTouchTap() {
    browserHistory.push('/html');
  },

  render() {
    return <main className="main">
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
            <Play style={{ color: '#FFFFFF' }} />
          </div>
          <div style={{ flex: '1' }}>
            <p className="playLabel">Tour <br />Curriculum</p>
          </div>
        </div>
      </section>

      <section className="mainContent hideLg">
        <div className="playContainer" onTouchTap={this.handleTouchTap}>
          <a className="play" href="#">
            <Play style={{ color: '#FFFFFF'}} />
          </a>
          <div style={{ flex: '1' }}>
            <p className="playLabel">Tour <br />Curriculum</p>
          </div>
        </div>
      </section>
    </main>;
  }
});

export default Home;
