import React from 'react';

const About = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(5);
  },

  handleTouchTap() {
    this.props.handleSlideIndex(null);
    this.props.handleLoginPage();
  },

  render() {
    return <main className="mainAbout">
      <section className="mainContent">
        <h1 className="mainHeader aboutHeader">Learn To Code</h1>
        <p className="mainParagraph">
          Learn to code is run by
          <a
            className="regular eventLink"
            href="http://www.galvanize.com/courses"
          >
            {' '}Galvanize
          </a>
          , a school and co-working space that is dedicated to transforming lives and building community. Galvanize offers immersive programs in Web Development and Data Science that have helped hundreds of people level up their careers in a matter of months. Learn to code classes are a great first step in the journey to becoming a developer and we hope that the foundation they provide will help you as your journey continues. Good Luck!</p>
        <a
          className="getStartedBtn"
          href="#"
          onTouchTap={this.handleTouchTap}
        >
          GET STARTED
        </a>
      </section>
      <section className="mainContent events">
        <h3 className="eventsHeader">Upcoming Classes</h3>
        <div className="event">
          <h4 className="eventHeader">Intro to HTML and CSS</h4>
          <p className="eventInfo">@ Galvanize, Seattle</p>
          <p className="eventInfo">September 19th</p>
          <p className="eventInfo">6:30 PM</p>
          <a className="registerLink" href="#">REGISTER</a>

          <br />
        </div>
        <div className="event">
          <h4 className="eventHeader">Intro to HTML and CSS</h4>
          <p className="eventInfo">@ Galvanize, Seattle</p>
          <p className="eventInfo">September 19th</p>
          <p className="eventInfo">6:30 PM</p>
          <a className="registerLink" href="#">REGISTER</a>

          <br />
        </div>
        <p className="eventInfo">
          See more on
          <a
            className="eventLink"
            href="http://www.meetup.com/Learn-Code-Seattle/"
          >
            {' '}meetup.com
          </a>
        </p>
      </section>
    </main>;
  }
});

export default About;
