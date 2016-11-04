export const drawNotes = (width, height, props) => {

};

// Scale map
// Guide in C: A A# B C C# D D# E F  F#  G  G#
//             1 2  3 4 5  6 7  8 9  10  11 12

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
