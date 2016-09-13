import Landing from 'components/Landing';
import Nav from 'components/Nav';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  render() {
    return <div>
      <Nav />
      {/* <Landing /> */}
      <main className="mainAbout">
        <section className="mainContent">
          <h1 className="mainHeader aboutHeader">Learn To Code</h1>
          <p className="mainParagraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.</p>
          <a className="getStarted" href="#">GET STARTED</a>
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
            See more on  <a
              className="eventLink"
              href="http://www.meetup.com/Learn-Code-Seattle/">meetup.com
            </a>
          </p>
        </section>
      </main>
    </div>
  }
});

export default App;
