import React from 'react';
import { browserHistory } from 'react-router';

const Html = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(1);
  },

  handleTouchTap(event) {
    if (event.target.className = 'fastForwardContainer') {
      return browserHistory.push('/css');
    }

    this.props.handleSlideIndex(null);
    this.props.handleLoginPage();
  },

  render() {
    return <div>
      <section className=" heroImg htmlHero">
        <h1 className="heroText htmlHeroText">Hyper</h1>
        <h1 className="heroText htmlHeroText">Text</h1>
        <h1 className="heroText">Markup</h1>
        <h1 className="heroText">Language</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p>
          <strong className="regular">HyperText Markup Language</strong> (HTML) is the standard language used to create webpages. Anytime you see a webpage in a browser, HTML is the language telling the browser what content to put on the screen. If a webpage had a human anatomy, HTML would be the skeleton.
          </p>
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

export default Html;
