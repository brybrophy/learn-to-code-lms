import React from 'react';

const Git = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(4);
  },

  handleTouchTap() {
    this.props.handleSlideIndex(null);
    this.props.handleLoginPage();
  },

  render() {
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
        <div className="fastForwardContainer">
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

export default Git;
