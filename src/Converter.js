// src/Converter.js
import React from 'react';
import LengthInput from './LengthInput';

function toMillimeters(cm) {
  return cm * 10;
}

function toCentimeters(mm) {
  return mm / 10;
}

function tryConvert(length, convert) {
  const input = parseFloat(length);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function LengthVerdict({ length, scale }) {
  const lengthInCm = scale === 'mm' ? length / 10 : length;
  if (lengthInCm >= 100) {
    return <p>The length is more than 1 meter.</p>;
  }
  return <p>The length is less than 1 meter.</p>;
}

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.handleCmChange = this.handleCmChange.bind(this);
    this.handleMmChange = this.handleMmChange.bind(this);
    this.state = { length: '', scale: 'cm' };
  }

  handleCmChange(length) {
    this.setState({ scale: 'cm', length });
  }

  handleMmChange(length) {
    this.setState({ scale: 'mm', length });
  }

  render() {
    const { scale, length } = this.state;
    const cm = scale === 'mm' ? tryConvert(length, toCentimeters) : length;
    const mm = scale === 'cm' ? tryConvert(length, toMillimeters) : length;

    return (
      <div>
        <LengthInput
          scale="cm"
          length={cm}
          onLengthChange={this.handleCmChange}
        />
        <LengthInput
          scale="mm"
          length={mm}
          onLengthChange={this.handleMmChange}
        />
        <LengthVerdict
          length={parseFloat(scale === 'cm' ? cm : mm)}
          scale={scale}
        />
      </div>
    );
  }
}

export default Converter;
