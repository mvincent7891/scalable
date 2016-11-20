// Scale map
// Guide in C: A A# B C C# D D# E F  F#  G  G#
//             1 2  3 4 5  6 7  8 9  10  11 12
import { Bidash } from './bidash';

export const colors = {
  chord: ['#FF6F00', '#FF8F00', '#FFB300', '#FFCA28',
          '#FFD54F', '#FFE082', '#FFE082', '#FFE082'],
  // scale: ['#D81B60', '#D81B60', '#E91E63', '#E91E63', '#EC407A',
  //         '#EC407A', '#F06292', '#F06292', '#F48FB1', '#F48FB1']
  // scale: ['#00BCD4', '#00BCD4', '#26C6DA', '#26C6DA', '#4DD0E1',
  //         '#4DD0E1', '#80DEEA', '#80DEEA', '#80DEEA', '#80DEEA']
  scale: ['#0288D1', '#0288D1', '#039BE5', '#03A9F4',
          '#29B6F6', '#4FC3F7', '#4FC3F7', '#81D4FA', '#81D4FA', '#81D4FA']
};

export const num2Note = ['A', 'A#', 'B', 'C', 'C#', 'D',
                  'D#', 'E', 'F', 'F#', 'G', 'G#'];

export const note2Num = {
  'A': 0, 'A#': 1, 'B': 2,
  'C': 3, 'C#': 4, 'D': 5,
  'D#': 6, 'E': 7, 'F': 8,
  'F#': 9, 'G': 10, 'G#': 11
};

export const scaleNames = {
  major: 'Major',
  natural_minor: 'Natural  Minor',
  major_pentatonic: 'Major Pentatonic',
  minor_pentatonic: 'Minor Pentatonic',
  harmonic_minor: 'Harmonic Minor',
  melodic_minor: 'Melodic Minor',
  dorian_mode: 'Dorian Mode',
  phrygian_mode: 'Phrygian Mode',
  lydian_mode: 'Lydian Mode',
  mixolydian_mode: 'Mixolydian Mode',
  none: 'No Scale'
};
export const scaleBidash = new Bidash(Object.keys(scaleNames));

export const chordNames = {
  major: 'Major',
  minor: 'Minor',
  dominant_seventh: 'Dominant 7th',
  major_seventh: 'Major 7th',
  minor_seventh: 'Minor 7th',
  seventh_sharp_nine: '7th #9 (Hendrix)',
  sixth: '6th',
  minor_sixth: 'Minor 6th',
  diminished: 'Diminished',
  diminished_seventh: 'Diminished 7th',
  none: 'No Chord'
};
export const chordBidash = new Bidash(Object.keys(chordNames));

export const scaleMaps = {
  major: [1, 3, 5, 6, 8, 10, 12],
  natural_minor: [1, 3, 4, 6, 8, 9, 11],
  major_pentatonic: [1, 3, 5, 8, 10],
  minor_pentatonic: [1, 4, 6, 8, 11],
  harmonic_minor: [1, 3, 4, 6, 8, 9, 12],
  melodic_minor: [1, 3, 4, 6, 8, 10, 12],
  dorian_mode: [1, 3, 4, 6, 8, 10, 11],
  phrygian_mode: [1, 2, 4, 6, 8, 9, 11],
  lydian_mode: [1, 3, 5, 7, 8, 10, 12],
  mixolydian_mode: [1, 3, 5, 6, 8, 10, 11],
  none: []
};

export const chordMaps = {
  major: [1, 5, 8],
  minor: [1, 4, 8],
  dominant_seventh: [1, 5, 8, 11],
  major_seventh: [1, 5, 8, 12],
  minor_seventh: [1, 4, 8, 11],
  seventh_sharp_nine: [1, 5, 8, 11, 4],
  sixth: [1, 5, 8, 10],
  minor_sixth: [1, 4, 8, 10],
  diminished: [1, 4, 7],
  diminished_seventh: [1, 4, 7, 10],
  none: []
};

export const menuItems = [
  'Tuning', 'Chord', 'Scale', 'Strings', 'Frets', 'Progression'
];

export const icons = [
  'tune', 'music_note', 'palette',
  'line_weight', 'view_week', 'queue_music'
];

// A A# B C  C# D D# E F  F# G   G#
// 0  1 2  3 4  5 6  7 8  9  10  11

export const alternateTunings = {
  dropD: {
    notes: {0: 5, 1: 0, 2: 5, 3: 10, 4: 2, 5: 7},
    name: 'Drop D'
  },
  halfStepDown: {
    notes: {0: 6, 1: 11, 2: 4, 3: 9, 4: 1, 5: 6},
    name: 'Half Step Down'
  },
  fullStepDown: {
    notes: {0: 5, 1: 10, 2: 3, 3: 8, 4: 0, 5: 5},
    name: 'Full Step Down'
  },
  doubleDropD: {
    notes: {0: 5, 1: 0, 2: 5, 3: 10, 4: 2, 5: 5},
    name: 'Double Drop D'
  },
  dadgad:{
    notes:  {0: 5, 1: 0, 2: 5, 3: 10, 4: 0, 5: 5},
    name: 'DADGAD'
  },
  standard: {
    notes: {0: 7, 1: 0, 2: 5, 3: 10, 4: 2, 5: 7},
    name: 'Standard'
  },
  openD: {
    notes: {0: 5, 1: 0, 2: 5, 3: 9, 4: 0, 5: 5},
    name: 'Open D'
  },
  "A-E-A-E-A-C": {
    notes: {
      "0": 0,
      "1": 7,
      "2": 0,
      "3": 7,
      "4": 0,
      "5": 3
    },
    name: "Open A"
  },
  "C-G-C-G-C-E": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 7
    },
    name: "Open C"
  },
  "C-E-G-C-E-G": {
    notes: {
      "0": 3,
      "1": 7,
      "2": 10,
      "3": 3,
      "4": 7,
      "5": 10
    },
    name: "Open C (2)"
  },
  "C-C-G-C-E-G": {
    notes: {
      "0": 3,
      "1": 3,
      "2": 10,
      "3": 3,
      "4": 7,
      "5": 10
    },
    name: "Open C (3)"
  },
  "F-A-C-F-C-F": {
    notes: {
      "0": 8,
      "1": 0,
      "2": 3,
      "3": 8,
      "4": 3,
      "5": 8
    },
    name: "Open F"
  },
  "C-F-C-F-A-C": {
    notes: {
      "0": 3,
      "1": 8,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 3
    },
    name: "Open F (2)"
  },
  "F-F-C-F-A-C": {
    notes: {
      "0": 8,
      "1": 8,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 3
    },
    name: "Open F (3)"
  },
  "D-G-D-G-B-D": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 5
    },
    name: "Open G"
  },
  "G-G-D-G-B-D": {
    notes: {
      "0": 10,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 5
    },
    name: "Open G (2)"
  },
  "C-G-D-G-B-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 5
    },
    name: "Open G (Big Wreck)"
  },
  "E-A-E-A-C-E": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 7,
      "3": 0,
      "4": 3,
      "5": 7
    },
    name: "Cross-note A"
  },
  "C-G-C-G-C-D#": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 6
    },
    name: "Cross-note C"
  },
  "D-A-D-F-A-D": {
    notes: {
      "0": 5,
      "1": 0,
      "2": 5,
      "3": 8,
      "4": 0,
      "5": 5
    },
    name: "Cross-note D"
  },
  "D-A-D-A-D-F": {
    notes: {
      "0": 5,
      "1": 0,
      "2": 5,
      "3": 0,
      "4": 5,
      "5": 8
    },
    name: "Cross-note D (2)"
  },
  "E-B-E-G-B-E": {
    notes: {
      "0": 7,
      "1": 2,
      "2": 7,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "Cross-note E"
  },
  "E-A-E-A-E-A": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 7,
      "3": 0,
      "4": 7,
      "5": 0
    },
    name: "Alt Cross A"
  },
  "E-A-B-E-A-E": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 2,
      "3": 7,
      "4": 0,
      "5": 7
    },
    name: "Asus2"
  },
  "E-A-D-E-A-E": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 5,
      "3": 7,
      "4": 0,
      "5": 7
    },
    name: "Asus4"
  },
  "E-A-C#-F#-A-C#": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 4,
      "3": 9,
      "4": 0,
      "5": 4
    },
    name: "Sleeping Ute"
  },
  "B-E-B-E-B-E": {
    notes: {
      "0": 2,
      "1": 7,
      "2": 2,
      "3": 7,
      "4": 2,
      "5": 7
    },
    name: "B modal"
  },
  "C-G-C-G-C-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 5
    },
    name: "Csus2"
  },
  "C-G-C-F-C-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 3,
      "5": 5
    },
    name: "Csus4+9"
  },
  "C-G-C-G-C-F": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 8
    },
    name: "Csus4"
  },
  "E-A-C-E-A-E": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 3,
      "3": 7,
      "4": 0,
      "5": 7
    },
    name: "Cross-note A (2)"
  },
  "C-G-D-G-C-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 3,
      "5": 5
    },
    name: "C15"
  },
  "C-G-D-G-A-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 0,
      "5": 5
    },
    name: "Low C"
  },
  "D-A-D-E-A-D": {
    notes: {
      "0": 5,
      "1": 0,
      "2": 5,
      "3": 7,
      "4": 0,
      "5": 5
    },
    name: "Dsus2"
  },
  "D-A-D-G-A-D": {
    notes: {
      "0": 5,
      "1": 0,
      "2": 5,
      "3": 10,
      "4": 0,
      "5": 5
    },
    name: "Dsus4"
  },
  "E-B-E-A-B-E": {
    notes: {
      "0": 7,
      "1": 2,
      "2": 7,
      "3": 0,
      "4": 2,
      "5": 7
    },
    name: "Esus4"
  },
  "E-A-D-E-B-E": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 5,
      "3": 7,
      "4": 2,
      "5": 7
    },
    name: "E7sus4"
  },
  "D-G-D-G-A-D": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 0,
      "5": 5
    },
    name: "Gsus2"
  },
  "D-G-D-G-C-D": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 3,
      "5": 5
    },
    name: "Gsus4"
  },
  "E-B-E-E-B-E": {
    notes: {
      "0": 7,
      "1": 2,
      "2": 7,
      "3": 7,
      "4": 2,
      "5": 7
    },
    name: "E modal"
  },
  "E-E-B-B-B-B": {
    notes: {
      "0": 7,
      "1": 7,
      "2": 2,
      "3": 2,
      "4": 2,
      "5": 2
    },
    name: "Alt E Modal"
  },
  "C-A-C-G-C-E": {
    notes: {
      "0": 3,
      "1": 0,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 7
    },
    name: "C6"
  },
  "C-F-C-G-B-E": {
    notes: {
      "0": 3,
      "1": 8,
      "2": 3,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "Cmaj11"
  },
  "D-G-C-G-C-D": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 5
    },
    name: "Open Page"
  },
  "D-A-D-F-A-C": {
    notes: {
      "0": 5,
      "1": 0,
      "2": 5,
      "3": 8,
      "4": 0,
      "5": 3
    },
    name: "Dmin7"
  },
  "C-G-D-G-B-E": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "Emin7/C"
  },
  "D-G-D-G-B-E": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "G6"
  },
  "D-G-D-G-B-F": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 8
    },
    name: "G7"
  },
  "D-G-D-G-B-C": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 3
    },
    name: "Gadd4"
  },
  "C-G-C-F-A-D": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 5
    },
    name: "Drop C"
  },
  "A-G-C-F-A-D": {
    notes: {
      "0": 0,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 5
    },
    name: "Drop A"
  },
  "C-G-C-F-A-C": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 3
    },
    name: "Double Drop C"
  },
  "G-D-G-C-E-A": {
    notes: {
      "0": 10,
      "1": 5,
      "2": 10,
      "3": 3,
      "4": 7,
      "5": 0
    },
    name: "Drop G"
  },
  "G-G-C-F-A-D": {
    notes: {
      "0": 10,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 5
    },
    name: "Alt Drop G"
  },
  "F#-F#-B-E-G#-C#": {
    notes: {
      "0": 9,
      "1": 9,
      "2": 2,
      "3": 7,
      "4": 11,
      "5": 4
    },
    name: "Drop F#"
  },
  "E-A-E-A-D-G": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 7,
      "3": 0,
      "4": 5,
      "5": 10
    },
    name: "Drop E"
  },
  "D#-G#-D#-G#-C-F": {
    notes: {
      "0": 6,
      "1": 11,
      "2": 6,
      "3": 11,
      "4": 3,
      "5": 8
    },
    name: "Drop D#"
  },
  "C-F-C-F-A#-D": {
    notes: {
      "0": 3,
      "1": 8,
      "2": 3,
      "3": 8,
      "4": 1,
      "5": 5
    },
    name: "Drop C1"
  },
  "G-B-D-G-B-D": {
    notes: {
      "0": 10,
      "1": 2,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 5
    },
    name: "Dobro Open G"
  },
  "B-A-D-G-B-E": {
    notes: {
      "0": 2,
      "1": 0,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "Drop B"
  },
  "B-E-D-G-B-E": {
    notes: {
      "0": 2,
      "1": 7,
      "2": 5,
      "3": 10,
      "4": 2,
      "5": 7
    },
    name: "Drop B-E"
  },
  "D-G-C-F-A-D": {
    notes: {
      "0": 5,
      "1": 10,
      "2": 3,
      "3": 8,
      "4": 0,
      "5": 5
    },
    name: "D Tuning"
  },
  "A-D-G-C-E-A": {
    notes: {
      "0": 0,
      "1": 5,
      "2": 10,
      "3": 3,
      "4": 7,
      "5": 0
    },
    name: "A Tuning"
  },
  "G-D-G-C-E-G": {
    notes: {
      "0": 10,
      "1": 5,
      "2": 10,
      "3": 3,
      "4": 7,
      "5": 10
    },
    name: "Double Drop G"
  },
  "F-G-C-E-G#-C": {
    notes: {
      "0": 8,
      "1": 10,
      "2": 3,
      "3": 7,
      "4": 11,
      "5": 3
    },
    name: "FGC3"
  },
  "C-G-C-G-C-G": {
    notes: {
      "0": 3,
      "1": 10,
      "2": 3,
      "3": 10,
      "4": 3,
      "5": 10
    },
    name: "Cittern"
  },
  "E-A-D-E-E-A": {
    notes: {
      "0": 7,
      "1": 0,
      "2": 5,
      "3": 7,
      "4": 7,
      "5": 0
    },
    name: "Balalaika"
  }
};
