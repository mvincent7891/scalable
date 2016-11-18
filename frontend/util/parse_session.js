import * as REFS from './references';

export const parseSession = hash => {
  let data = hash.split('#');

  let cRoot = parseInt(data[1]);
  let cName = REFS.chordBidash.hash[data[2]];
  let chord = { root: cRoot, name: cName };

  let sRoot = parseInt(data[3]);
  let sName = REFS.scaleBidash.hash[data[4]];
  let scale = { root: sRoot, name: sName };

  let tuning = {};
  data[5].split('&').forEach((element, idx) => {
    tuning[idx] = parseInt(element);
  });
  let b = REFS.bScaleNames;

  return { chord, scale, tuning };
};
