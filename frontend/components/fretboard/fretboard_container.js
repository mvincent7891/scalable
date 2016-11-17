import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Fretboard from './fretboard';
import { fetchNotes } from '../../actions/note_actions';
import { loadSession } from '../../actions/misc_actions';
import { updateDimensions } from '../../actions/fretboard_actions';

const mapStateToProps = state => ({
  numFrets: state.fretboard.numFrets,
  numStrings: state.fretboard.numStrings,
  width: state.fretboard.width,
  height: state.fretboard.height,
  margin: state.fretboard.margin,
  scaleRoot: state.notes.scale.root,
  scaleName: state.notes.scale.name,
  chordRoot: state.notes.chord.root,
  chordName: state.notes.chord.name,
  tuning: state.tuning,
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  loadSession: session => dispatch(loadSession(session)),
  updateDimensions: dimensions => dispatch(updateDimensions(dimensions))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard));
