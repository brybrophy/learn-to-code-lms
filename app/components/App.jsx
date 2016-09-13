import { Tab, Tabs } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavLogo from 'components/NavLogo';
import Play from 'material-ui/svg-icons/av/play-circle-filled';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  render() {
    const styles = {
      tab: {
        backgroundColor: '#FFFFFF',
        color: '#444444'
      }
    }
    return <div>
      <nav className="nav">
        <NavLogo />

        <Tabs
          inkBarStyle={{ marginLeft: '7%', width: '5%' }}
          className="tabs"
          tabItemContainerStyle={{ backgroundColor: 'none' }}
        >
          <Tab
            label="HTML"
            style={styles.tab}
            value={0}
          />
          <Tab
            label="CSS"
            style={styles.tab}
            value={1}
          />
          <Tab
            label="JAVASCRIPT"
            style={styles.tab}
            value={2}
          />
          <Tab
            label="GIT"
            style={styles.tab}
            value={3}
          />
          <Tab
            label="ABOUT"
            style={styles.tab}
            value={4}
          />
        </Tabs>

        <Menu className="menu" />
      </nav>
      <main className="main">
        <section className="mainContent">
          <h1 className="mainHeader">Learn</h1>
          <h1 className="mainHeader">To Code</h1>
          <p className="mainSubHeader">Welcome to ltc</p>
          <p className="mainText">A complete set of tools to learn</p>
          <p className="mainText">the basics of web development</p>
        </section>

        <section className="mainContent">
          <img src="/images/hero-logo.png"></img>
        </section>

        <section className="mainContent">
          <div className="playContainer">
            <Play className="play" />
            <div style={{ flex: '1' }}>
              <p className="playLabel">Tour <br />Curriculum</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  }
});

export default App;
