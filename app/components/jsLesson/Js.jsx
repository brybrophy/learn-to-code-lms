import JsLesson from './JsLesson';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import TourView from '../common/TourView';
import { browserHistory } from 'react-router';

const helloWorld = '"use strict";\n  function helloWorld() {\n  console.log("Hello world");\n}\n\nhelloWorld();';

const Js = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(3);
  },

  handleTouchTap() {
     browserHistory.push('/git');
  },

  render() {
    let tourView;
    let lessonView;

    if (!this.props.loggedIn) {
      tourView = <TourView
        onHandleTouchTap={this.handleTouchTap}
        handleLoginPage={this.props.handleLoginPage}
        slideIndex={this.props.slideIndex}
      />
    }

    if (this.props.loggedIn) {
      lessonView = <JsLesson
        handleCreateRepl={this.props.handleCreateRepl}
        handleReplChange={this.props.handleReplChange}
        handleSaveSnippets={this.props.handleSaveSnippets}
        handleThemeChange={this.props.handleThemeChange}
        replitAccess={this.props.replitAccess}
        snippets={this.props.snippets}
        snippets={this.props.snippets}
        theme={this.props.theme}
        timeout={this.props.timeout}
      />
    }

    return <div>
      <Snackbar
        autoHideDuration={3000}
        bodyStyle={{ backgroundColor: '#2D2D2D' }}
        message="Auto Saved"
        onRequestClose={this.props.handleRequestClose}
        open={this.props.snackbar}
      />

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
        {lessonView}
      </main>
    </div>;
  }
});

export default Js;
