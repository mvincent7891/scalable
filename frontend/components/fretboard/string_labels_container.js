import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/note_actions';
import StringLabels from './string_labels';

const mapStateToProps = state => ({
  numStrings: state.fretboard.numStrings,
  width: state.fretboard.width,
  height: state.fretboard.height,
  margin: state.fretboard.margin,
  tuning: state.tuning
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StringLabels);
