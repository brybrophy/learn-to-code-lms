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
          <h1 className="mainHeader">Learn To Code</h1>
          <p className="mainParagraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.</p>
          <a className="getStarted" href="#">GET STARTED</a>
        </section>
        <section className="mainContent">
          <h3 className="mainSubHeader">Upcoming Classes</h3>
          <div className="event">
            <h5 className="eventHeader">Intro to HTML and CSS</h5>

          </div>
        </section>
      </main>
    </div>
  }
});

export default App;
