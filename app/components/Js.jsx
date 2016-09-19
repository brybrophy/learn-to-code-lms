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
          <article className="lessonSection">
            <h3 className="lessonHeader">
              Let's Get Started
            </h3>

            <p>
              First things first. Throughout this lesson you'll be typing code into text boxes called editors. These editors will format your code and make it easier to read and understand.
            </p>

            <p className="regular">Use the selector to choose a theme.</p>

            <ThemeSelector
              handleThemeChange={this.props.handleThemeChange}
            />

            <JsRepl
              handleReplChange={this.props.handleReplChange}
              replName="chooseTheme"
              theme={this.props.theme}
            />

            <p>Now that you have choosen your editor theme, let's talk about the objectives for this course.</p>

            <p className="regular">In this course we will cover:</p>

            <ul>
              <li>Basic Javascript Syntax</li>
              <li>Variables and Functions</li>
              <li>Conditional statements (if, else if, else)</li>
              <li>“Rock, Paper, Scissors” - JavaScript style</li>
            </ul>

            <h3 className="lessonHeader">
              Where Did JavaScript Come From?
            </h3>

            <p>In 1995, an engineer at Netscape named Brendan Eich created JavaScript to provide a user-friendly, lightweight programming language that could be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet.</p>

            <p>Fun fact: Brendan Eich wrote the core language for JavaScript in just 10 days!</p>

            <p>Many professional programmers initially criticized the language because its target audience consisted of web masters and other "amateurs". The advent of something called Ajax, which became a standard in 2006, returned JavaScript to the spotlight and brought it more professional programming attention. The result has been a proliferation of comprehensive frameworks and libraries, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers as seen by server-side platforms like Node.js.</p>

            <h3 className="lessonHeader">
              Practice the Basics
            </h3>

            <p>Before we can dive deeper into JavaScript, we need to learn some basic syntax. The official JavaScript website has put together a quick, 5 minute mini-tutorial that we are going to follow.</p>

            <a
              className="lessonLink"
              href="https://www.javascript.com/try"
              target="_blank"
            >
              https://www.javascript.com/try
            </a>
          </article>
      </main>
    </div>;
  }
});

export default Js;
