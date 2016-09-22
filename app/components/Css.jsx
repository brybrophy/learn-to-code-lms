import React from 'react';
import TourView from 'components/TourView';
import { browserHistory } from 'react-router';

const Css = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(2);
  },

  handleTouchTap(event) {
    browserHistory.push('/javascript');
  },

  render() {
    let tourView;

    if (!this.props.loggedIn) {
      tourView = <TourView
        onHandleTouchTap={this.handleTouchTap}
        handleLoginPage={this.props.handleLoginPage}
        slideIndex={this.props.slideIndex}
      />
    }

    return <div>
      <section className="heroImg cssHero">
        <h1 className="heroText cssHeroText">Cascading</h1>
        <h1 className="heroText cssHeroText">Style</h1>
        <h1 className="heroText cssHeroText">Sheets</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p>
          <strong className="regular">CSS</strong> is a style sheet language used to describe way elements appear on a web page. Developers use CSS to control the style of elements on a page, like the color of text or the size of a box.  Just like we think of HTML as the skeleton of a webpage, we can think of CSS as the muscles, skin, hair, etc...
          </p>
        </section>
        {tourView}
      </main>
    </div>;
  }
});

export default Css;
