import { note2Num } from './references';

const rawTunings = {
  "E-A-C#-F#-A-C#": [
    "E",
    "A",
    "C#",
    "F#",
    "A",
    "C#"
  ],
  "A-E-A-E-A-C": [
    "A",
    "E",
    "A",
    "E",
    "A",
    "C"
  ],
  "C-G-C-G-C-E": [
    "C",
    "G",
    "C",
    "G",
    "C",
    "E"
  ],
  "C-E-G-C-E-G": [
    "C",
    "E",
    "G",
    "C",
    "E",
    "G"
  ],
  "C-C-G-C-E-G": [
    "C",
    "C",
    "G",
    "C",
    "E",
    "G"
  ],
  "F-A-C-F-C-F": [
    "F",
    "A",
    "C",
    "F",
    "C",
    "F"
  ],
  "C-F-C-F-A-C": [
    "C",
    "F",
    "C",
    "F",
    "A",
    "C"
  ],
  "F-F-C-F-A-C": [
    "F",
    "F",
    "C",
    "F",
    "A",
    "C"
  ],
  "D-G-D-G-B-D": [
    "D",
    "G",
    "D",
    "G",
    "B",
    "D"
  ],
  "G-G-D-G-B-D": [
    "G",
    "G",
    "D",
    "G",
    "B",
    "D"
  ],
  "G-B-D-G-B-D": [
    "G",
    "B",
    "D",
    "G",
    "B",
    "D"
  ],
  "C-G-D-G-B-D": [
    "C",
    "G",
    "D",
    "G",
    "B",
    "D"
  ],
  "D-G-B-D-G-B": [
    "D",
    "G",
    "B",
    "D",
    "G",
    "B"
  ],
  "E-A-E-A-C-E": [
    "E",
    "A",
    "E",
    "A",
    "C",
    "E"
  ],
  "E-A-C-E-A-E": [
    "E",
    "A",
    "C",
    "E",
    "A",
    "E"
  ],
  "D-A-D-F-A-D": [
    "D",
    "A",
    "D",
    "F",
    "A",
    "D"
  ],
  "D-A-D-A-D-F": [
    "D",
    "A",
    "D",
    "A",
    "D",
    "F"
  ],
  "E-B-E-G-B-E": [
    "E",
    "B",
    "E",
    "G",
    "B",
    "E"
  ],
  "E-A-E-A-E-A": [
    "E",
    "A",
    "E",
    "A",
    "E",
    "A"
  ],
  "E-A-B-E-A-E": [
    "E",
    "A",
    "B",
    "E",
    "A",
    "E"
  ],
  "E-A-D-E-A-E": [
    "E",
    "A",
    "D",
    "E",
    "A",
    "E"
  ],
  "B-E-B-E-B-E": [
    "B",
    "E",
    "B",
    "E",
    "B",
    "E"
  ],
  "C-G-C-G-C-D": [
    "C",
    "G",
    "C",
    "G",
    "C",
    "D"
  ],
  "C-G-C-F-C-D": [
    "C",
    "G",
    "C",
    "F",
    "C",
    "D"
  ],
  "C-G-C-G-C-F": [
    "C",
    "G",
    "C",
    "G",
    "C",
    "F"
  ],
  "C-G-D-G-C-D": [
    "C",
    "G",
    "D",
    "G",
    "C",
    "D"
  ],
  "C-G-D-G-A-D": [
    "C",
    "G",
    "D",
    "G",
    "A",
    "D"
  ],
  "D-A-D-E-A-D": [
    "D",
    "A",
    "D",
    "E",
    "A",
    "D"
  ],
  "D-A-D-G-A-D": [
    "D",
    "A",
    "D",
    "G",
    "A",
    "D"
  ],
  "E-B-E-A-B-E": [
    "E",
    "B",
    "E",
    "A",
    "B",
    "E"
  ],
  "E-A-D-E-B-E": [
    "E",
    "A",
    "D",
    "E",
    "B",
    "E"
  ],
  "D-G-D-G-A-D": [
    "D",
    "G",
    "D",
    "G",
    "A",
    "D"
  ],
  "D-G-D-G-C-D": [
    "D",
    "G",
    "D",
    "G",
    "C",
    "D"
  ],
  "E-B-E-E-B-E": [
    "E",
    "B",
    "E",
    "E",
    "B",
    "E"
  ],
  "E-E-B-B-B-B": [
    "E",
    "E",
    "B",
    "B",
    "B",
    "B"
  ],
  "C-A-C-G-C-E": [
    "C",
    "A",
    "C",
    "G",
    "C",
    "E"
  ],
  "C-F-C-G-B-E": [
    "C",
    "F",
    "C",
    "G",
    "B",
    "E"
  ],
  "D-G-C-G-C-D": [
    "D",
    "G",
    "C",
    "G",
    "C",
    "D"
  ],
  "D-A-D-F-A-C": [
    "D",
    "A",
    "D",
    "F",
    "A",
    "C"
  ],
  "C-G-D-G-B-E": [
    "C",
    "G",
    "D",
    "G",
    "B",
    "E"
  ],
  "D-G-D-G-B-E": [
    "D",
    "G",
    "D",
    "G",
    "B",
    "E"
  ],
  "D-G-D-G-B-F": [
    "D",
    "G",
    "D",
    "G",
    "B",
    "F"
  ],
  "D-G-D-G-B-C": [
    "D",
    "G",
    "D",
    "G",
    "B",
    "C"
  ],
  "D-A-D-G-B-E": [
    "D",
    "A",
    "D",
    "G",
    "B",
    "E"
  ],
  "C-G-C-F-A-D": [
    "C",
    "G",
    "C",
    "F",
    "A",
    "D"
  ],
  "A-G-C-F-A-D": [
    "A",
    "G",
    "C",
    "F",
    "A",
    "D"
  ],
  "G-D-G-C-E-A": [
    "G",
    "D",
    "G",
    "C",
    "E",
    "A"
  ],
  "G-G-C-F-A-D": [
    "G",
    "G",
    "C",
    "F",
    "A",
    "D"
  ],
  "F#-F#-B-E-G#-C#": [
    "F#",
    "F#",
    "B",
    "E",
    "G#",
    "C#"
  ],
  "E-A-E-A-D-G": [
    "E",
    "A",
    "E",
    "A",
    "D",
    "G"
  ],
  "E-A-E-A-D-F#": [
    "E",
    "A",
    "E",
    "A",
    "D",
    "F#"
  ],
  "D#-G#-D#-G#-C#-F#": [
    "D#",
    "G#",
    "D#",
    "G#",
    "C#",
    "F#"
  ],
  "D-A-D-A-D-G": [
    "D",
    "A",
    "D",
    "A",
    "D",
    "G"
  ],
  "C-F-C-F-A#-D": [
    "C",
    "F",
    "C",
    "F",
    "A#",
    "D"
  ],
  "B-A-D-G-B-E": [
    "B",
    "A",
    "D",
    "G",
    "B",
    "E"
  ],
  "B-E-D-G-B-E": [
    "B",
    "E",
    "D",
    "G",
    "B",
    "E"
  ],
  "D-G-C-F-A-D": [
    "D",
    "G",
    "C",
    "F",
    "A",
    "D"
  ],
  "A-D-G-C-E-A": [
    "A",
    "D",
    "G",
    "C",
    "E",
    "A"
  ],
  "E-A-D-G-B-E": [
    "E",
    "A",
    "D",
    "G",
    "B",
    "E"
  ],
  "D-A-D-G-B-D": [
    "D",
    "A",
    "D",
    "G",
    "B",
    "D"
  ],
  "C-G-C-F-A-C": [
    "C",
    "G",
    "C",
    "F",
    "A",
    "C"
  ],
  "G-D-G-C-E-G": [
    "G",
    "D",
    "G",
    "C",
    "E",
    "G"
  ],
  "F-G-C-E-G#-C": [
    "F",
    "G",
    "C",
    "E",
    "G#",
    "C"
  ],
  "C-G-C-G-C-G": [
    "C",
    "G",
    "C",
    "G",
    "C",
    "G"
  ],
  "A-E-A-D-G-B": [
    "A",
    "E",
    "A",
    "D",
    "G",
    "B"
  ],
  "A-E-A-D-F#-B": [
    "A",
    "E",
    "A",
    "D",
    "F#",
    "B"
  ],
  "G-D-G-C-F-A": [
    "G",
    "D",
    "G",
    "C",
    "F",
    "A"
  ],
  "E-B-E-A-D-F": [
    "E",
    "B",
    "E",
    "A",
    "D",
    "F"
  ],
  "E-B-E-A-D-G": [
    "E",
    "B",
    "E",
    "A",
    "D",
    "G"
  ],
  "D-A-D-G-C-E": [
    "D",
    "A",
    "D",
    "G",
    "C",
    "E"
  ],
  "D-A-D-G-C-F": [
    "D",
    "A",
    "D",
    "G",
    "C",
    "F"
  ],
  "E-B-E-B-E-F#": [
    "E",
    "B",
    "E",
    "B",
    "E",
    "F#"
  ],
  "B-E-B-E-A-D": [
    "B",
    "E",
    "B",
    "E",
    "A",
    "D"
  ]
};

const moreAlternateTunings = {};

Object.keys(rawTunings).forEach(tuning => {
  const formatted = {};
  rawTunings[tuning].forEach((note, idx) => {
    formatted[idx] = note2Num[note];
  });
  moreAlternateTunings[tuning] = formatted;
});

export default moreAlternateTunings;
