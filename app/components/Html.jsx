import React from 'react';
import { withRouter } from 'react-router';

const Html = React.createClass({
  render() {
    return <div>
      <section className=" heroImg htmlHero">
        <h1 className="heroText htmlHeroText">Hyper</h1>
        <h1 className="heroText htmlHeroText">Text</h1>
        <h1 className="heroText">Markup</h1>
        <h1 className="heroText">Language</h1>
      </section>
    </div>;
  }
});

export default withRouter(Html);
