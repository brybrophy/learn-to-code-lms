import React from 'react';
import cookie from 'react-cookie';

const TourView = React.createClass({
  handleTouchTap() {
    cookie.save('lessonIndex', this.props.slideIndex);
    this.props.handleLoginPage();
  },

  render() {
    return <section className="tourView">
      <div className="fastForwardContainer"
        onTouchTap={this.props.onHandleTouchTap}>
        <div className="fastForward">
          <img src="/images/fast-forward.svg" />
        </div>
        <div>
          <p className="fastForwardLabel">Continue <br />Tour</p>
        </div>
      </div>
      <div className="lessonLogin">
        <h5 onTouchTap={this.handleTouchTap}>
          <a>Create an account</a> or <a>login</a> to view full lesson
        </h5>
      </div>
    </section>;
  }
});

export default TourView;
