// Scale map
// Guide in C: A A# B C C# D D# E F  F#  G  G#
//             1 2  3 4 5  6 7  8 9  10  11 12

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
  dorian_mode: 'Dorian Moe',
  phrygian_mode: 'Phrygian Mode',
  lydian_mode: 'Lydian Mode',
  mixolydian_mode: 'Mixolydian Mode'
};

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
  diminished_seventh: 'Diminished 7th'
};

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
  mixolydian_mode: [1, 3, 5, 6, 8, 10, 11]
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
  diminished_seventh: [1, 4, 7, 10]
};

export const menuItems = [
  'Tuning', 'Chord', 'Scale', 'Strings', 'Frets', 'Progression'
];

export const icons = [
  'tune', 'music_note', 'palette',
  'line_weight', 'view_week', 'queue_music'
];
