import React from 'react';
import { browserHistory } from 'react-router';

const Js = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(3);
  },

  handleTouchTap(event) {
    if (event.target.class = 'fastForwardContainer') {
      return browserHistory.push('/git');
    }

    this.props.handleSlideIndex(null);
    this.props.handleLoginPage();
  },

  render() {
    return <div>
      <section className="heroImg jsHero">
        <h1 className="heroText jsHeroText">Java</h1>
        <h1 className="heroText jsHeroText">Script</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p>
          <strong className="regular">JavaScript</strong> is a high-level, dynamic, untyped, and interpreted programming language that is primarily used to change how a website looks and behaves when a user interacts with it. For this reason, JavaScript is an essential technology for web developers.
          </p>
          <br />
        </section>
        <div className="fastForwardContainer" onTouchTap={this.handleTouchTap}>
          <div className="fastForward">
            <img src="/images/fast-forward.svg" />
          </div>
          <div>
            <p className="fastForwardLabel">Continue <br />Tour</p>
          </div>
        </div>
        <div className="lessonLogin">
          <h5 onTouchTap={this.handleTouchTap}>
            <a>Create an account</a> or <a>login</a> to view full lesson
          </h5>
        </div>
      </main>
    </div>;
  }
});

export default Js;
