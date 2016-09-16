import React from 'react';

const Css = React.createClass({
  render() {
    return <div>
      <section className="heroImg cssHero">
        <h1 className="heroText cssHeroText">Cascading</h1>
        <h1 className="heroText cssHeroText">Style</h1>
        <h1 className="heroText cssHeroText">Sheets</h1>
      </section>
      <main className="mainLesson">
        <section className="lessonStarter">
          <p>
          <strong className="regular">CSS</strong> is a style sheet language used to describe way elements appear on a web page. Developers use CSS to control the style of elements on a page, like the color of text or the size of a box.  Just like we think of HTML as the skeleton of a webpage, we can think of CSS as the muscles, skin, hair, etc...
          </p>
        </section>
        <div className="fastForwardContainer">
          <div className="fastForward">
            <img src="/images/fast-forward.svg" />
          </div>
          <div>
            <p className="fastForwardLabel">Continue <br />Tour</p>
          </div>
        </div>
        <div className="lessonLogin">
          <h5>
            <a>Create an account</a> or <a>login</a> to view full lesson
          </h5>
        </div>
      </main>
    </div>;
  }
});

export default Css;
