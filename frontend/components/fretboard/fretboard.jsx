import React from 'react';
import { hashHistory } from 'react-router';

class Fretboard extends React.Component {
  constructor(props) {
    super(props);
    this.width = 600;
    this.height = 100;
    this.state = { width: this.width, height: this.height};
    this.handleSlider = this.handleSlider.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      const width = this.refs.canvas.width;
      const height = this.refs.canvas.height;
      ctx.fillRect(0, 0, width, height);
  }

  handleSlider(e) {
    let scale = (parseInt(e.target.value) + 50) / 100;
    let newWidth = Math.floor(scale * this.width);
    let newHeight = Math.floor(scale * this.height);
    this.setState({ width: newWidth, height: newHeight}, this.updateCanvas);
  }

  render () {
    console.log(this.state);
    return(
      <div className="fretboard-container">
        <input type="range" onChange={ this.handleSlider }></input>
        <br/>
        <canvas ref="canvas" width={ this.state.width } height={ this.state.height }/>
      </div>
    );
  }
}

  export default Fretboard;
