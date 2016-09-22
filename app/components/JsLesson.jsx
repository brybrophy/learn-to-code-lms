import JsRepl from 'components/JsRepl';
import React from 'react';
import ThemeSelector from 'components/ThemeSelector';

const JsLesson = React.createClass({
  render() {
    return <article className="lessonSection">
      <h3 className="lessonHeader">
        Let's Get Started
      </h3>

      <p>
        First things first. Throughout this lesson you'll be typing code into text boxes called editors. These editors will format your code and make it easier to read and understand.
      </p>

      <p className="regular">Use the selector to choose a theme.</p>

      <ThemeSelector
        handleThemeChange={this.props.handleThemeChange}
      />

      <JsRepl
        handleReplChange={this.props.handleReplChange}
        initialValue={this.props.snippets.helloWorld}
        minLines={10}
        replName="helloWorld"
        resultName="themeResult"
        snippets={this.props.snippets}
        theme={this.props.theme}
      />

      <p>Now that you have choosen your editor theme, let's talk about the objectives for this course.</p>

      <p className="regular">In this course we will cover:</p>

      <ul>
        <li>Basic Javascript Syntax</li>
        <li>Variables and Functions</li>
        <li>Conditional statements (if, else if, else)</li>
        <li>“Rock, Paper, Scissors” - JavaScript style</li>
      </ul>

      <h3 className="lessonHeader">
        Where Did JavaScript Come From?
      </h3>

      <p>In 1995, an engineer at Netscape named Brendan Eich created JavaScript to provide a user-friendly, lightweight programming language that could be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet.</p>

      <p>Fun fact: Brendan Eich wrote the core language for JavaScript in just 10 days!</p>

      <p>Many professional programmers initially criticized the language because its target audience consisted of web masters and other "amateurs". The advent of something called Ajax, which became a standard in 2006, returned JavaScript to the spotlight and brought it more professional programming attention. The result has been a proliferation of comprehensive frameworks and libraries, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers as seen by server-side platforms like Node.js.</p>

      <h3 className="lessonHeader">
        Practice the Basics
      </h3>

      <p>Before we can dive deeper into JavaScript, we need to learn some basic syntax.</p>

      <p>Follow the instructions in the editors below.</p>

      <section className="lessonExercise">
        <p className="replHeader">1. Strings</p>

        <JsRepl
          handleReplChange={this.props.handleReplChange}
          initialValue={this.props.snippets.stringJs}
          minLines={7}
          replName="stringJs"
          resultName="stringResult"
          snippets={this.props.snippets}
          theme={this.props.theme}
        />
      </section>

      <p className="replHeader">2. Numbers</p>

      <JsRepl
        handleReplChange={this.props.handleReplChange}
        initialValue={this.props.snippets.numberJs}
        minLines={7}
        replName="numberJs"
        resultName="numberResult"
        snippets={this.props.snippets}
        theme={this.props.theme}
      />

      <p className="replHeader">3. Variables</p>

      <JsRepl
        handleReplChange={this.props.handleReplChange}
        initialValue={this.props.snippets.varJs}
        minLines={10}
        replName="varJs"
        resultName="varResult"
        snippets={this.props.snippets}
        theme={this.props.theme}
      />

      <p className="replHeader">4. Functions</p>

      <JsRepl
        handleReplChange={this.props.handleReplChange}
        initialValue={this.props.snippets.functionJs}
        minLines={10}
        replName="functionJs"
        resultName="functionResult"
        snippets={this.props.snippets}
        theme={this.props.theme}
      />

      <p className="replHeader">5. Functions with Arguments</p>

      <JsRepl
        handleReplChange={this.props.handleReplChange}
        initialValue={this.props.snippets.functionJsTwo}
        minLines={13}
        replName="functionJsTwo"
        resultName="functionResultTwo"
        snippets={this.props.snippets}
        theme={this.props.theme}
      />

      <h3 className="lessonHeader">
        Review the Basics
      </h3>

      <ul>
        <li>What is a string?</li>
        <li>What is a number?</li>
        <li>What is a variable?</li>
        <li>What does a function do?</li>
        <li>How are parameters and arguments different?</li>
      </ul>

      <p>Awesome! Now that we have the basics down, lets move on to some heavier material!</p>

      <h3 className="lessonHeader">
        Equality
      </h3>

      <p>In JavaScript, there are three different ways of writing "equals" and they each mean something different.</p>

      <p>First, there is single equals: =</p>

      <p>Single equals is how you assign value to something. To give a variable value, you would say:</p>

      <code>var one = 1;</code>

      <p>Next comes double equals: ==</p>

      <p>Double equals checks to see if two things are loosly equal. JavaScript will return true or false depending on whether the two items are loosly equal or not. Javascript has different data-types. Some of the data-types we have alreay talked about are strings and numbers. We can use a string and a number to write an example of loose equality.</p>

      <code className="example">return '1' == 1;<br />
        true
      </code>

      <p>Even though the string '1' and the number 1 are not the same data-type, they are loosly equal. When using double equals, JavaScript is able to convert them both to a common data-type before it makes the comparison.</p>

      <p>Last is triple equals: ===</p>

      <p>Triple equals looks for strict equality. It asks, "are these two things exactly the same?" and returns true or false. Let's look at two examples.</p>

      <code className="example">return '1' === 1;<br />
        false<br />
        return 1 === 1;<br />
        true
      </code>

      <p>In the first example, the returned value is false because the string '1' is not strictly equal to the number 1. In the second example, the returned value is true because the number 1 is strictly equal to the the number 1.</p>

      <h3 className="lessonHeader">
        Conditionals
      </h3>

      <p>Conditionals use equality to perform logic. You tell JavaScript to do one thing if a certain condition is true, do a different thing if another condition is true, and do another thing if neither of those conditions are true. The basic syntax looks like this:</p>

      <code className="example">
        if (this === true) {'{'}<br />
          [then do this thing];<br />
        {'}'}<br />
        else if (that === true) {'{'}<br />
          [then do this different thing];<br />
        {'}'}<br />
        else {'{'}<br />
          [then do this other thing];<br />
        {'}'}
      </code>
    </article>
  }
});

export default JsLesson;
