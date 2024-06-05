// src/LengthInput.js
import React from 'react';

const scaleNames = {
  cm: 'Centimeters',
  mm: 'Millimeters'
};

class LengthInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onLengthChange(e.target.value);
  }

  render() {
    const { length, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter length in {scaleNames[scale]}:</legend>
        <input value={length} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default LengthInput;
