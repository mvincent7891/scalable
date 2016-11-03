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

  }

  componentDidMount() {
    this.updateFretboard();
    this.updateGrid();
  }

  updateFretboard() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      ctx.fillStyle = "yellow";
      ctx.fillRect(0, 0, width, height);
  }

  updateGrid() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.state.width;
      const height = this.state.height;
      const margin = this.margin;
      ctx.fillStyle = "black";

      let strings = this.calcStrings();
      for (let string of strings) {
        ctx.fillRect(margin, string, (width - 2 * margin), 1);
      }

      let frets = this.calcFrets();
      for (let fret of frets) {
        ctx.fillRect(fret, margin, 1, (height - 2 * margin));
      }
  }

  calcStrings() {
    return this.calcLines(6, this.state.height);
  }

  calcFrets() {
    return this.calcLines(13, this.state.width);
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
