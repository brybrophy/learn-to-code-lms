import React from 'react';

const Profile = React.createClass({
  handleTouchTap(event) {
    const id = parseInt(event.currentTarget.id);

    this.props.handleProfileStatus(id);
  },

  render() {

    const bio = "I am web developer by trade and a creator in essence. Whether through code, through a camera, or though sound, the creation of “things” is my driving force."

    let ProfileMain;

    if (this.props.profileStatus === 1) {
      ProfileMain = <main className="mainProfile">
        <div>
          <img className="avatarProfile" src="/images/avatar-photo.png" />
          <img
            className="editIcon"
            id="2"
            onTouchTap={this.handleTouchTap}
            src="/images/edit.svg"
          />
        </div>
        <section className="profileGroup nonEdit">
          <label>name </label>
          <p className="profileInfo">Bryan Brophy</p>

          <label>email </label>
          <p className="profileInfo">bbrophy@highseas.com</p>

          <label>bio </label>
          <p className="profileInfo">I am web developer by trade and a creator in essence. Whether through code, through a camera, or though sound, the creation of “things” is my driving force.</p>
        </section>
      </main>
    }

    if (this.props.profileStatus === 2) {
      ProfileMain = <main className="mainProfile">
        <img className="avatarProfile" src="/images/avatar-photo.png" />
        <form className="profileGroup">
          <label htmlFor="name">name </label>
          <input name="name" type="text" defaultValue="Bryan Brophy"/>

          <label htmlFor="email">email </label>
          <input name="email" type="email" defaultValue="bbrophy@highseas.com"/>

          <label htmlFor="bio">bio </label>
          <div className="textarea" contentEditable>I am web developer by trade and a creator in essence. Whether through code, through a camera, or though sound, the creation of “things” is my driving force.</div>
        </form>
        <div className="btnGroup">
          <a
            className="cancelBtn"
            href="#"
            id="1"
            onTouchTap={this.handleTouchTap}
          >
            cancel
          </a>
          <a className="saveBtn" href="#">save</a>
        </div>
      </main>
    }

    return <div>
      <section className="heroImg profileHero">
        <h1 className="heroText">Profile</h1>
      </section>
      {ProfileMain}
    </div>
  }
});

export default Profile;
