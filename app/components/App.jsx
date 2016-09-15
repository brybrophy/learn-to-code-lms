import Nav from 'components/Nav';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  render() {
    return <div>
      <Nav />
      {React.cloneElement(this.props.children, {
      })}
    </div>
  }
});

export default App;
