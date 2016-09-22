import React from 'react';
import TourView from 'components/TourView';
import { browserHistory } from 'react-router';

const Html = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(1);
  },

  handleTouchTap() {
    browserHistory.push('/css');
  },

  render() {
    let tourView;

    if (!this.props.loggedIn) {
      tourView = <TourView
        handleLoginPage={this.props.handleLoginPage}
        onHandleTouchTap={this.handleTouchTap}
        slideIndex={this.props.slideIndex}
      />
    }

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

        {tourView}
      </main>
    </div>;
  }
});

export default Html;
