import React from 'react';

const ThemeSelector = React.createClass({
  handleChange(event) {
    this.props.handleThemeChange(event.target.value);
  },

  render() {
    return <div className="replHeader">
      <label className="themeLabel" htmlFor="themes">
      </label>
      <select
        defaultValue="Tomorrow Night Eighties"
        id="themes"
        name='themes'
        onChange={this.handleChange}
      >
        <option>TextMate</option>
        <option>Tomorrow</option>
        <option>Cobalt</option>
        <option>Tomorrow Night Eighties</option>
      </select>
    </div>
  }
});

export default ThemeSelector;
