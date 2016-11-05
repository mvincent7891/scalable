import React from 'react';
import { hashHistory } from 'react-router';
import NotesContainer from './notes_container';

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.background = "#fff";
    this.width = 860;
    this.height = 215;
    this.margin = 30;
    this.state = { width: this.width, height: this.height, canvas: null };
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
    const canvas = this.refs.canvas;
    this.setState({ canvas });
  }

  updateFretboard() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      const margin = this.margin;
      ctx.fillStyle = this.background;
      // ctx.fillRect(0, 0, width, height);

      var img = new Image();
      let frets = this.calcFrets();
      let fretWidth = frets[1] - frets[0];
      img.onload = function () {
        // ctx.drawImage(img, 0, 400, 800, 200,
                      // (fretWidth + margin), margin, (width - 2 * margin - fretWidth),
                      // (height - 2 * margin));
        this.updateGrid();
      }.bind(this);

      img.src = "../assets/images/rosewood.jpg";

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
        // ctx.fillRect(margin, strings[i], stringLength, stringWidth);
      }

      let frets = this.calcFrets();
      for (let fret of frets) {
        // ctx.fillRect(fret, margin, 2, (height - 2 * margin));
      }

      ctx.fillStyle = this.background;
      let fretWidth = frets[1] - frets[0];
      // ctx.fillRect(margin, margin, fretWidth, height);
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
    });
  }

  render () {
    return(
      <div className="fretboard-container">
        <input type="range" min={ 30 } max = { 70 }
               onChange={ this.handleSlider }
               className="slider"></input>
        <br/>
        <canvas ref="canvas" id="canvas"
                width={ this.state.width }
                height={ this.state.height }/>
        <NotesContainer width={ this.state.width }
                        height={ this.state.height }
                        margin={ this.margin }
                        canvas={ this.state.canvas }/>
      </div>
    );
  }
}

  export default Fretboard;
