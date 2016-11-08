import { connect } from 'react-redux';
import TuningSelector from './tuning_selector';
import { updateNote,
         resetTuning } from '../../actions/tuning_actions';
import { fetchNotes } from '../../actions/note_actions';


const mapStateToProps = state => ({
  tuning: state.tuning,
  numStrings: state.fretboard.numStrings,
});

const mapDispatchToProps = dispatch => ({
  updateNote: (note, idx) => dispatch(updateNote(note, idx)),
  resetTuning: () => dispatch(resetTuning()),
  fetchNotes: options => dispatch(fetchNotes(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TuningSelector);
