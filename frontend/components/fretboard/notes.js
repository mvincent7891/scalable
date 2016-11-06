import React from 'react';
import { hashHistory } from 'react-router';

// Scale map
// Guide in C: A A# B C C# D D# E F  F#  G  G#
//             1 2  3 4 5  6 7  8 9  10  11 12

const colors = ['#FF8F00', '#FFB300', '#FFCA28', '#FFD54F', '#FFE082'];

const num2Note = ['A', 'A#', 'B', 'C', 'C#', 'D',
                  'D#', 'E', 'F', 'F#', 'G', 'G#'];

const note2Num = {
  'A': 0, 'A#': 1, 'B': 2,
  'C': 3, 'C#': 4, 'D': 5,
  'D#': 6, 'E': 7, 'F': 8,
  'F#': 9, 'G': 10, 'G#': 11
};

const scaleNames = {
  major: 'Major',
  natural_minor: 'Natural  Minor',
  major_pentatonic: 'Major Pentatonic',
  minor_pentatonic: 'Minor Pentatonic',
  harmonic_minor: 'Harmonic Minor',
  melodic_minor: 'Melodic Minor',
  dorian_mode: 'Dorian Moe',
  phrygian_mode: 'Phrygian Mode',
  lydian_mode: 'Lydian Mode',
  mixolydian_mode: 'Mixolydian Mode'
};

const chordNames = {
  major: 'Major',
  minor: 'Minor',
  dominant_seventh: 'Dominant 7th',
  major_seventh: 'Major 7th',
  minor_seventh: 'Minor 7th',
  seventh_sharp_nine: '7th #9 (Hendrix)',
  sixth: '6th',
  minor_sixth: 'Minor 6th',
  diminished: 'Diminished',
  diminished_seventh: 'Diminished 7th'
};

const scaleMaps = {
  major: [1, 3, 5, 6, 8, 10, 12],
  natural_minor: [1, 3, 4, 6, 8, 9, 11],
  major_pentatonic: [1, 3, 5, 8, 10],
  minor_pentatonic: [1, 4, 6, 8, 11],
  harmonic_minor: [1, 3, 4, 6, 8, 9, 12],
  melodic_minor: [1, 3, 4, 6, 8, 10, 12],
  dorian_mode: [1, 3, 4, 6, 8, 10, 11],
  phrygian_mode: [1, 2, 4, 6, 8, 9, 11],
  lydian_mode: [1, 3, 5, 7, 8, 10, 12],
  mixolydian_mode: [1, 3, 5, 6, 8, 10, 11]
};

const chordMaps = {
  major: [1, 5, 8],
  minor: [1, 4, 8],
  dominant: [1, 5, 8, 11],
  major_seventh: [1, 5, 8, 12],
  minor_seventh: [1, 4, 8, 11],
  seventh_sharp_nine: [1, 5, 8, 11, 4],
  sixth: [1, 5, 8, 10],
  minor_sixth: [1, 4, 8, 10],
  diminished: [1, 4, 7],
  diminished_seventh: [1, 4, 7, 10]
};

// 1  Major: 1 3 5 6 8 10 12
// 2  Natural Minor: 1 3 4 6 8 9 11
// 3  Major Pentatonic: 1 3 5 8 10
// 4  Minor Pentatonic: 1 4 6 8 11
// 5  Harmonic Minor: 1 3 4 6 8 9 12
// 6  Melodic Minor: 1 3 4 6 8 10 12
// 7  Dorian Mode: 1 3 4 6 8 10 11
// 8  Phrygian Mode: 1 2 4 6 8 9 11
// 9  Lydian Mode: 1 3 5 7 8 10 12
// 10 Mixolydian Mode: 1 3 5 6 8 10 11


// Chord map
// 1  Major: 1 5 8
// 2  Minor: 1 4 8
// 3  Dominant 7th: 1 5 8 11
// 4  Major 7th: 1 5 8 12
// 5  Minor 7th: 1 4 8 11
// 6  7th #9 (Hendrix Chord): 1 5 8 11 4
// 7  6th: 1 5 8 10
// 8  Minor 6th: 1 4 8 10
// 9  Diminished: 1 4 7
// 10 Diminished 7th: 1 4 7 10

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.renderNotes = this.renderNotes.bind(this);
    this.renderScale = this.renderScale.bind(this);
    this.renderChord = this.renderChord.bind(this);
    this.buildFretboard = this.buildFretboard.bind(this);
    this.drawNotes = this.drawNotes.bind(this);
    this.calcXY = this.calcXY.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
  }

  renderNotes() {
    this.renderScale();
    this.renderChord();
  }

  renderScale() {
    let scaleName = this.props.scaleName;
    let scaleRoot = this.props.scaleRoot;
    let scaleMap= scaleMaps[scaleName].map(note => note + scaleRoot - 1);
    // this.drawNotes(scaleMap);
  }

  renderChord() {
    let chordName = this.props.chordName;
    let chordRoot = this.props.chordRoot;
    let chordMap= chordMaps[chordName].map(note => note + chordRoot - 1);
    this.drawNotes(chordMap);
  }

  drawNotes(map) {
    const canvas = this.props.canvas;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let fretboard = this.buildFretboard();
      let numFrets = this.props.numFrets;
      let numStrings = this.props.numStrings;
      for (let i = 0; i < numStrings; i++) {
        let string = fretboard[i];
        for (let j = 0; j < numFrets; j++) {
          let fret = string[j];
          if (map.includes(fret)) {
            let color = colors[map.indexOf(fret)];
            let y, x;
            [y, x] = this.calcXY(i, j);
            var circle = new Path2D();
            ctx.fillStyle = color;
            circle.arc(y, x, 10, 0, 2 * Math.PI);
            ctx.fill(circle);
          }
        }
      }
    }
  }

  calcXY(row, col) {
    let numFrets = this.props.numFrets;
    let numStrings = this.props.numStrings;
    let margin = this.props.margin;
    let width = this.props.width;
    let height = this.props.height;

    let fretSpacing = (width - 2 * margin) / numFrets;
    let stringSpacing = (height - 2 * margin) / (numStrings - 1);

    let x_coord = Math.floor(margin + (fretSpacing * col) + (fretSpacing / 2));
    let y_coord = Math.floor(height - margin - (stringSpacing * row));

    return [x_coord, y_coord];
  }

  buildFretboard() {
    let fretboard = [];
    let numFrets = parseInt(this.props.numFrets);
    let numStrings = parseInt(this.props.numStrings);
    let tuning = this.props.tuning;
    for (let i = 0; i < numStrings; i++) {
      let string = Array.from({length: numFrets}, (v, k) => k)
                        .map(element => (element + tuning[i]) % 12);
      fretboard.push(string);
    }
    return fretboard;
  }

  render () {
    return(
      <div className="notes-container">
        { this.renderNotes() }
      </div>
    );
  }
}

  export default Notes;
