import React from 'react';
import { hashHistory } from 'react-router';

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.width = 800;
    this.height = 200;
    this.margin = 15;
    this.state = { width: this.width, height: this.height};
    this.handleSlider = this.handleSlider.bind(this);
    this.updateFretboard = this.updateFretboard.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // Can change number of frets and strings here, just check if they
    // are equal to current props
  }

  componentDidMount() {
    this.updateFretboard();
    this.updateGrid();
  }

  updateFretboard() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      const margin = this.margin;
      ctx.fillStyle = "#ddd";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#8D6E63";
      ctx.fillRect(margin, margin, (width - 2 * margin), (height - 2 * margin));
  }

  updateGrid() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.state.width;
      const height = this.state.height;
      const margin = this.margin;

      ctx.fillStyle = "black";
      let strings = this.calcStrings();
      for (let i = 0; i < strings.length; i++) {
        let stringWidth = Math.ceil((i + 1) / 2);
        let stringLength = ((width - 2 * margin) + 2);
        ctx.fillRect(margin, strings[i], stringLength, stringWidth);
      }

      let frets = this.calcFrets();
      for (let fret of frets) {
        ctx.fillRect(fret, margin, 2, (height - 2 * margin));
      }

      ctx.fillStyle = "#ddd";
      let fretWidth = frets[1] - frets[0];
      ctx.fillRect(margin, margin, fretWidth, height);
  }

  calcStrings() {
    return this.calcLines(this.props.numStrings, this.state.height);
  }

  calcFrets() {
    return this.calcLines(this.props.numFrets + 1, this.state.width);
  }

  calcLines(numLines, totalSpace) {
    let margin = this.margin;
    let space = (totalSpace - margin * 2) / (numLines - 1);
    return (Array
            .from({length: numLines}, (v, k) => k)
            .map(element => Math.floor(element * space + margin)));
  }

  handleSlider(e) {
    let scale = (parseInt(e.target.value) + 50) / 100;
    let newWidth = Math.floor(scale * this.width);
    let newHeight = Math.floor(scale * this.height);
    this.setState({ width: newWidth, height: newHeight}, () => {
      this.updateFretboard();
      this.updateGrid();
    });
  }

  render () {
    return(
      <div className="fretboard-container">
        <input type="range" min={ 30 } max = { 70 }
               onChange={ this.handleSlider }></input>
        <br/>
        <canvas ref="canvas" width={ this.state.width } height={ this.state.height }/>
      </div>
    );
  }
}

  export default Fretboard;
