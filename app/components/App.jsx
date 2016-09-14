import About from 'components/About';
import Css from 'components/Css';
import Git from 'components/Git';
import Html from 'components/Html';
import Js from 'components/Js';
import Landing from 'components/Landing';
import Nav from 'components/Nav';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  render() {
    return <div>
      <Nav />
      <Landing />
      {/* <About /> */}
      {/* <Html /> */}
      {/* <Css /> */}
      {/* <Js /> */}
      {/* <Git /> */}
    </div>
  }
});

export default App;
