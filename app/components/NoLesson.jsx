import React from 'react';

const NoLesson = React.createClass({
  render() {
    return <article className="lessonSection lessonSectionCenter">
    <h3 className="lessonHeaderNo">
      (This lesson has not been fully written.<br /> Try the JavaScript Lesson to start learning now!)
    </h3>
    </article>
  }
});

export default NoLesson;
