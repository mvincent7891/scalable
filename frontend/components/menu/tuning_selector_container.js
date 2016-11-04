import { connect } from 'react-redux';
import TuningSelector from './tuning_selector';
import { updateNote } from '../../actions/tuning_actions';

const mapStateToProps = state => ({
  tuning: state.tuning,
  numStrings: state.fretboard.numStrings,
});

const mapDispatchToProps = dispatch => ({
  updateNote: (note, idx) => dispatch(updateNote(note, idx)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TuningSelector);
