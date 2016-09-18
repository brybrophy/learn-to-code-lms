import React from 'react';
import TourView from 'components/TourView';
import { browserHistory } from 'react-router';

const Git = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(4);
  },

  handleTouchTap(event) {
    browserHistory.push('/about');
  },

  render() {
    let tourView;

    if (!this.props.loggedIn) {
      tourView = <TourView
        onHandleTouchTap={this.handleTouchTap}
        handleLoginPage={this.props.handleLoginPage}
      />
    }

    return <div>
      <section className="heroImg gitHero">
        <h1 className="heroText gitHeroText">Git</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p>
          <strong className="regular">Git</strong> is a version control system. Version Control is a class of tools that programmers use to manage software projects. It allows you to track changes you make to files on your machine. This is helpful for when you screw things up!  Version control allows developers to revert back to a specific time and place in their code. Sort of like a reset button.
          </p>
        </section>
        {tourView}
      </main>
    </div>;
  }
});

export default Git;
