import { note2Num, num2Note,
         colors, scaleNames,
         chordNames, scaleMaps,
         chordMaps } from './references';

export const fetchNotes = (state, success, error) => {
  let noteBuilder = new NoteBuilder(state);
  success(noteBuilder.notes);
};

class NoteBuilder {
  constructor(state) {
    // Initial state parameters
    this.numFrets = state.fretboard.numFrets;
    this.numStrings = state.fretboard.numStrings;
    this.tuning = state.tuning;
    this.height = state.fretboard.height;
    this.width = state.fretboard.width;
    this.margin = state.fretboard.margin;
    this.chord = state.notes.chord;
    this.scale = state.notes.scale;
    this.notes = [];

    // Register functions
    this.buildFretboard = this.buildFretboard.bind(this);
    this.buildNotes = this.buildNotes.bind(this);
    this.calcXY = this.calcXY.bind(this);

    // Setup
    this.fretboard = this.buildFretboard();
    this.scaleMap = scaleMaps[this.scale.name]
                    .map(note => (note + this.scale.root - 1) % 12);
    this.chordMap = chordMaps[this.chord.name]
                    .map(note => (note + this.chord.root - 1) % 12);
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
        if (scaleOrder >= 0) {
          let newNote = new Note(1, i, j, note, scaleOrder);
          this.calcXY(newNote);
          this.notes.push(newNote);
        }
        if (chordOrder >= 0) {
          let newNote = new Note(0, i, j, note, chordOrder);
          this.calcXY(newNote);
          this.notes.push(newNote);
        }
      }
    }
  }

  calcXY(note) {
    let row = note.string;
    let col = note.fret;

    let numFrets = this.numFrets;
    let numStrings = this.numStrings;
    let margin = this.margin;
    let width = this.width;
    let height = this.height;

    let fretSpacing = (width - 2 * margin) / numFrets;
    let stringSpacing = (height - 2 * margin) / (numStrings - 1);

    let xCoord = Math.floor(margin + (fretSpacing * col) + (fretSpacing / 2));
    let yCoord = Math.floor(height - margin - (stringSpacing * row));

    note.xCoord = xCoord;
    note.yCoord = yCoord;

    let radii = {'chord': .6, 'scale': .8};
    note.radius = (Math.floor(radii[note.belongsTo] * fretSpacing / 4));
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
  constructor(key, i, j, note, order) {
    let keys = { 0: 'chord', 1: 'scale'};
    this.string = i;
    this.fret = j;
    this.belongsTo = keys[key];
    this.note = num2Note[note];
    this.order = order;
    this.color = colors[keys[key]][order];
    this.xCoord =  null;
    this.yCoord =  null;
    this.radius =  null;
  }
}
