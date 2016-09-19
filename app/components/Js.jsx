import JsRepl from 'components/JsRepl';
import React from 'react';
import ThemeSelector from 'components/ThemeSelector';
import TourView from 'components/TourView';
import { browserHistory } from 'react-router';

const Js = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(3);
  },

  handleTouchTap() {
     browserHistory.push('/git');
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
      <section className="heroImg jsHero">
        <h1 className="heroText jsHeroText">Java</h1>
        <h1 className="heroText jsHeroText">Script</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p><strong className="regular">JavaScript</strong> is a high-level, dynamic, untyped, and interpreted programming language that is primarily used to change how a website looks and behaves when a user interacts with it. For this reason, JavaScript is an essential technology for web developers.
          </p>
          <br />
        </section>
        {tourView}
          <section className="lessonSection">
            <h3 className="lessonHeader">
              Let's Get Started
            </h3>

            <p>
              First things first. Through out this lesson you'll be typing code into text boxes called editors. These editors will format your code and make it easier to read and understand.
            </p>

            <p>Use the selector to choose a theme.</p>

            <ThemeSelector
              handleThemeChange={this.props.handleThemeChange}
            />

            <JsRepl
              handleReplChange={this.props.handleReplChange}
              replName="helloWorld"
              theme={this.props.theme}
            />
          </section>
      </main>
    </div>;
  }
});

export default Js;
