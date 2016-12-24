import { connect } from 'react-redux';
import ProgressionSelector from './Progression_selector';
import * as LIBRARY from '../../actions/progression_actions';


const mapStateToProps = state => ({
  chord: state.notes.chord
});

const mapDispatchToProps = dispatch => ({
  // fetchNotes: options => dispatch(fetchNotes(options)),
  // updateChord: chord => dispatch(updateChord(chord))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressionSelector);
