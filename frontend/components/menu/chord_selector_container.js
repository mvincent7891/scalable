import { connect } from 'react-redux';
import ChordSelector from './chord_selector';
import { fetchNotes } from '../../actions/note_actions';


const mapStateToProps = state => ({
  chord: state.notes.chord
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
