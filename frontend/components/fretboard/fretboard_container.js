import { connect } from 'react-redux';
import Fretboard from './fretboard';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = state => ({
  numFrets: state.fretboard.numFrets,
  numStrings: state.fretboard.numStrings,
  scaleRoot: state.notes.scale.root,
  scaleName: state.notes.scale.name,
  chordRoot: state.notes.chord.root,
  chordName: state.notes.chord.name,
  tuning: state.tuning,
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: options => dispatch(fetchNotes(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard);
