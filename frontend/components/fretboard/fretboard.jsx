import React from 'react';
import { hashHistory } from 'react-router';
import { parseSession } from '../../util/parse_session';
import { num2Note } from '../../util/references';

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.background = "#fff";
    const sessionHash = this.props.location.hash;
    this.state = { canvas: null, sessionHash };
    this.width = 860;
    this.height = 215;
    this.handleSlider = this.handleSlider.bind(this);
    this.updateFretboard = this.updateFretboard.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.fetchNotes = this.fetchNotes.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  fetchNotes() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    this.updateFretboard();
    if (this.props.notes.notes.length === 0) {
      this.props.fetchNotes();
    }

    if (this.state.sessionHash) {
      let hash = parseSession(this.state.sessionHash);
      this.props.loadSession(hash);
    }

    const canvas = this.refs.canvas;
    this.setState({ canvas });
  }

  componentDidUpdate() {
    this.updateFretboard();
    if (this.props.notes.notes.length === 0) {
      this.props.fetchNotes();
    }
  }

  renderNotes() {
    let strings = {};
    const ctx = this.refs.canvas.getContext('2d');
    this.props.notes.notes.forEach(note => {
      strings[note.yCoord] = true;
      // Draw Shadow
      // TODO: Need to drop two shadows: one for chord and one for scale
      // Drop both before drawing either note. That way, when a note belongs
      // a chord but not the scale, it will still have a shadow.
      if (note.belongsTo === 'scale') {
        var shadow = new Path2D();
        ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        shadow.arc((note.xCoord + 2), (note.yCoord + 2),
        note.radius, 0, 2 * Math.PI);
        ctx.fill(shadow);

        var shadow2 = new Path2D();
        ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
        shadow2.arc((note.xCoord + 1), (note.yCoord + 1),
        note.radius, 0, 2 * Math.PI);
        ctx.fill(shadow2);
      }

      var circle = new Path2D();
      ctx.fillStyle = note.color;
      circle.arc(note.xCoord, note.yCoord,
                 note.radius, 0, 2 * Math.PI);
      ctx.fill(circle);

      var highlight = new Path2D();
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      highlight.arc((note.xCoord), (note.yCoord),
      note.radius, Math.PI, 2 * Math.PI, true);
      ctx.fill(highlight);
    });
  }

  updateFretboard() {
    if (this.refs.canvas) {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      ctx.clearRect(0, 0, width, height);
      const margin = this.props.margin;
      ctx.fillStyle = this.background;
      ctx.fillRect(0, 0, width, height);

      var img = new Image();
      let frets = this.calcFrets();
      let fretWidth = frets[1] - frets[0];
      img.onload = function () {
        ctx.drawImage(img, 0, 400, 800, 200,
          (fretWidth + margin), margin, (width - 2 * margin - fretWidth),
          (height - 2 * margin));
          this.updateGrid();
          this.renderNotes();
        }.bind(this);
        img.src = "./assets/images/rosewood.jpg";
    }
  }

  updateGrid() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.props.width;
      const height = this.props.height;
      const margin = this.props.margin;

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

      ctx.fillStyle = this.background;
      let fretWidth = frets[1] - frets[0];
      ctx.fillRect(margin, margin, fretWidth, height);

  }

  calcStrings() {
    return this.calcLines(this.props.numStrings, this.props.height);
  }

  calcFrets() {
    return this.calcLines(this.props.numFrets + 1, this.props.width);
  }

  calcLines(numLines, totalSpace) {
    let margin = this.props.margin;
    let space = (totalSpace - margin * 2) / (numLines - 1);
    return (Array
            .from({length: numLines}, (v, k) => k)
            .map(element => Math.floor(element * space + margin)));
  }

  handleSlider(e) {
    let scale = (parseInt(e.target.value) + 50) / 100;
    let newWidth = Math.floor(scale * this.width);
    let newHeight = Math.floor(scale * this.height);
    let dimensions = { width: newWidth, height: newHeight };
    this.props.updateDimensions(dimensions);
    this.fetchNotes();
    // this.setState({ width: newWidth, height: newHeight}, () => {
    //   this.updateFretboard();
    //   this.fetchNotes();
    // });
  }

  render () {
    return(
      <div className="fretboard-container">
        <input type="range" min={ 30 } max = { 70 }
               onChange={ this.handleSlider }
               className="slider"></input>
        <br/>
        <canvas ref="canvas" id="canvas"
                width={ this.props.width }
                height={ this.props.height }/>
      </div>
    );
  }
}

  export default Fretboard;
