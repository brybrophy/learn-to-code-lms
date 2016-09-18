import React from 'react';

const TourView = React.createClass({
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
        <h5 onTouchTap={this.props.handleLoginPage}>
          <a>Create an account</a> or <a>login</a> to view full lesson
        </h5>
      </div>
    </section>;
  }
});

export default TourView;
