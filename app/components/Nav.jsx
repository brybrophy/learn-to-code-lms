import { Tab, Tabs } from 'material-ui/Tabs';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavLogo from 'components/NavLogo';
import React from 'react';

const Nav = React.createClass({
  render() {
    const styles = {
      tab: {
        backgroundColor: '#FFFFFF',
        color: '#444444'
      }
    };

    return <nav className="nav">
      <NavLogo />

      <Tabs
        inkBarStyle={{ marginLeft: '6%', width: '5%' }}
        className="tabs hideSm"
        tabItemContainerStyle={{ backgroundColor: 'none' }}
      >
        <Tab
          label="HOME"
          style={styles.tab}
          value={0}
        />
        <Tab
          label="HTML"
          style={styles.tab}
          value={1}
        />
        <Tab
          label="CSS"
          style={styles.tab}
          value={2}
        />
        <Tab
          label="JAVASCRIPT"
          style={styles.tab}
          value={3}
        />
        <Tab
          label="GIT"
          style={styles.tab}
          value={4}
        />
        <Tab
          label="ABOUT"
          style={styles.tab}
          value={5}
        />
      </Tabs>

      <Menu className="menu" />
    </nav>;
  }
});

export default Nav;
