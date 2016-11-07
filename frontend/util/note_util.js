export const fetchNotes = (state, options, success, error) => {
  console.log('state:', state);
  console.log('options:', options);
  let noteBuilder = new NoteBuilder(state, options);
  console.log('notes:', noteBuilder.notes);
  success();
};

class NoteBuilder {
  constructor(state, options) {
    // Initial state parameters
    this.numFrets = state.fretboard.numFrets;
    this.numStrings = state.fretboard.numStrings;
    this.tuning = state.tuning;
    this.height = options.height;
    this.width = options.width;
    this.margin = options.margin;
    this.chord = state.notes.chord;
    this.scale = state.notes.scale;
    this.notes = [];

    // Register functions
    this.buildFretboard = this.buildFretboard.bind(this);
    this.buildNotes = this.buildNotes.bind(this);
    this.addNote = this.addNote.bind(this);

    // Setup
    this.fretboard = this.buildFretboard();
    this.scaleMap = scaleMaps[this.scale.name]
                    .map(note => note + this.scale.root - 1);
    this.chordMap = chordMaps[this.chord.name]
                    .map(note => note + this.chord.root - 1);
    this.buildNotes();
  }

  buildNotes() {
    let fretboard = this.fretboard;
    let numFrets = this.numFrets;
    let numStrings = this.numStrings;
    let chordMap = this.chordMap;
    let scaleMap = this.scaleMap;
    for (let i = 0; i < numStrings; i++) {
      let string = fretboard[i];
      for (let j = 0; j < numFrets; j++) {
        let note = string[j];
        let chordOrder = chordMap.indexOf(note);
        let scaleOrder = scaleMap.indexOf(note);
        if (chordOrder >= 0) {
          this.addNote(0, i, j, note);
        }
        if (scaleOrder >= 0) {
          this.addNote(1, i, j, note);
        }
          // let order = map.indexOf(fret);
          // let y, x;
          // [y, x] = this.calcXY(i, j);
          // var circle = new Path2D();
          // ctx.fillStyle = color;
          // circle.arc(y, x, 10, 0, 2 * Math.PI);
          // ctx.fill(circle);
      }
    }
  }

  addNote(key, i, j, note) {
    let keys = { 0: 'chord', 1: 'scale'};
    note = num2Note[note];
    let newNote = {
      string: i,
      fret: j,
      belongsTo: keys[key],
      note
    };
    this.notes.push(newNote);
  }

  buildFretboard() {
    let fretboard = [];
    let numFrets = this.numFrets;
    let numStrings = this.numStrings;
    let tuning = this.tuning;
    for (let i = 0; i < numStrings; i++) {
      let string = Array.from({length: numFrets}, (v, k) => k)
                        .map(element => (element + tuning[i]) % 12);
      fretboard.push(string);
    }
    return fretboard;
  }

}

class Note {
  constructor() {
    this.note =  'C';
    this.belongsTo =  'chord';
    this.root =  'A';
    this.rootNum =  0;
    this.name =  'major';
    this.nameNum =  0;
    this.order =  1;
    this.color =  '#FFB300';
    this.string =  1;
    this.fret =  3;
    this.xCoord =  243;
    this.yCoord =  207;
    this.radius =  8;
  }
}

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
