import { Tab, Tabs } from 'material-ui/Tabs';
import NavLogo from 'components/NavLogo';
import React from 'react';
import { browserHistory, Link } from 'react-router';

const pages = {
  home: 0,
  html: 1,
  css: 2,
  javascript: 3,
  git: 4,
  about: 5
}

const Nav = React.createClass({
  handleTouchTapAvatar() {
    if (!this.props.loggedIn) {
      this.props.handleSlideIndex(null);
      
      return browserHistory.push('/login');
    }

    browserHistory.push('/profile');

    return this.props.handleSlideIndex(null);
  },

  handleTouchTapMenu() {
    const authBtnMeetup = document.getElementsByClassName('authBtnMeetup')[0];
    const cancelBtn = document.getElementsByClassName('cancelBtn')[0];
    const editIcon = document.getElementsByClassName('editIcon')[0];
    const menu = document.getElementsByClassName('menu')[0];
    const saveBtn = document.getElementsByClassName('saveBtn')[0];
    const sideMenu = document.getElementsByClassName('sideMenu')[0];
    const sideMenuWrap = document.getElementsByClassName('sideMenuWrapper')[0];

    if (menu.className === 'menu hideLg open') {
      if (authBtnMeetup) {
        authBtnMeetup.style.zIndex = '1100';
      }

      if (editIcon) {
        editIcon.style.zIndex = '1100';
      }

      if (saveBtn) {
        cancelBtn.style.zIndex = '1100';
        saveBtn.style.zIndex = '1100';
      }

      menu.className = 'menu hideLg';
      sideMenu.style.left = '500px';
      sideMenuWrap.style.zIndex = '0';
      sideMenuWrap.style.borderLeft = '';
    }

    else {
      if (authBtnMeetup) {
        authBtnMeetup.style.zIndex = '0';
      }

      if (editIcon) {
        editIcon.style.zIndex = '0';
      }

      if (saveBtn) {
        cancelBtn.style.zIndex = '0';
        saveBtn.style.zIndex = '0';
      }

      menu.className += ' open';
      sideMenu.style.left = '0';
      sideMenuWrap.style.zIndex = '999';
      sideMenuWrap.style.borderLeft = '100vw solid rgba(34, 34, 34, 0.75)';
    }

  },

  handleTouchTapSideNav(event) {
    const index = parseInt(event.target.id);
    const menu = document.getElementsByClassName('menu')[0];
    const sideMenu = document.getElementsByClassName('sideMenu')[0];
    const sideMenuWrap = document.getElementsByClassName('sideMenuWrapper')[0];

    for (const page in pages) {
      if (index === 0) {
        browserHistory.push(`/`);
      }
      else if (index === pages[page]) {
        browserHistory.push(`/${page}`);
      }
    }

    menu.className = 'menu hideLg';
    sideMenu.style.left = '500px';
    sideMenuWrap.style.borderLeft = '';

    return this.props.handleSlideIndex(index)
  },

  handleTouchTapTabs(value) {
    for (const page in pages) {
      if (value === 0) {
        browserHistory.push(`/`);
      }
      else if (value === pages[page]) {
        browserHistory.push(`/${page}`);
      }
    }

    return this.props.handleSlideIndex(value)
  },

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
        onChange={this.handleTouchTapTabs}
        tabItemContainerStyle={{ backgroundColor: 'none' }}
        value={this.props.slideIndex}
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

      <div className="avatar hideSm" onTouchTap={this.handleTouchTapAvatar}>
        <img className="avatarImg" src="images/avatar.png" />
      </div>
      <div
        className="menu hideLg"
        id="menu"
        onTouchTap={this.handleTouchTapMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="sideMenuWrapper">
        <aside className="sideMenu">
          <a
            className="sideNav"
          >SIGNUP / LOGIN</a>

          <a
            className="sideNav"
            onTouchTap={this.handleTouchTapSideNav}
            id="0"
          >HOME</a>

          <a
            className="sideNav"
            id="1"
            onTouchTap={this.handleTouchTapSideNav}
          >HTML</a>

          <a
            className="sideNav"
            id="2"
            onTouchTap={this.handleTouchTapSideNav}
          >CSS</a>

          <a
            className="sideNav"
            id="3"
            onTouchTap={this.handleTouchTapSideNav}
          >JAVASCRIPT</a>

          <a
            className="sideNav"
            id="4"
            onTouchTap={this.handleTouchTapSideNav}
          >GIT</a>

          <a
            className="sideNav"
            id="5"
            onTouchTap={this.handleTouchTapSideNav}
          >ABOUT</a>
        </aside>
      </div>
    </nav>;
  }
});

export default Nav;
