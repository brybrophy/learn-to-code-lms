import Time from 'react-time';
import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

const About = React.createClass({
  componentWillMount() {
    this.props.handleSlideIndex(5);
  },

  handleTouchTap() {
    this.props.handleSlideIndex(null);
    this.props.handleLoginPage();
  },

  handleRegister(event) {
    const url = `http://www.meetup.com/Learn-Code-Seattle/events/${event.target.id}`;
    const options = 'height=590,left=50,location=0,menubar=0,toolbar=0,top=100,width=1000';
    window.open(url, '_blank', options);
  },

  render() {
    let GetStarted;

    if (cookie.load('loggedIn')) {
      GetStarted = (
        <a
          className="getStartedBtn"
          href="#"
          onTouchTap={this.handleTouchTap}
        >
          GET STARTED
        </a>
      );
    }

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
        {GetStarted}
      </section>
      <section className="mainContent events">
        <h3 className="eventsHeader">Upcoming Classes</h3>
        {this.props.events.map((event, index) => {
          return <div className="event" key={index}>
            <h4 className="eventHeader">{event.name}</h4>
            <p
              className="eventInfo"
            >
              {event.venue ? '@ ' + event.venue.address_1 + ', ' + event.venue.city : ''}
            </p>
            <p className="eventInfo">
              <Time format="MMMM Do" value={event.time} />
            </p>
            <p className="eventInfo">
              <Time format="h:mm a" value={event.time} />
            </p>
            <a
              className="registerLink"
              href="#"
              id={event.id}
              onTouchTap={this.handleRegister}
            >
              REGISTER
            </a>

            <br />
          </div>
        })}
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
