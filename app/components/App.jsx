import { Tab, Tabs } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavLogo from 'components/NavLogo';
import React from 'react';
// import SwipeableViews from 'react-swipeable-views';

const App = React.createClass({
  render() {
    const styles = {
      logo: {
        height: '40px',
        margin: '20px 0 0 50px'
      },

      menu: {
        color: '#444444',
        padding: '25px 60px 0 0'
      },

      nav: {
        color: '#444444',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      },

      tab: {
        backgroundColor: '#FFFFFF',
        color: '#444444'
      },

      tabs: {
        flex: '1 auto',
        margin: '12px 25vw'
      }
    };

    return <div>
      <nav style={styles.nav}>

        <NavLogo style={styles.logo} />
        
        <Tabs
          inkBarStyle={{ marginLeft: '7%', width: '5%' }}
          style={styles.tabs}
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

        <Menu style={styles.menu} />

      </nav>
    </div>
  }
});

export default App;
