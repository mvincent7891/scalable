import { connect } from 'react-redux';
import ChordSelector from './chord_selector';
import { fetchNotes,
         updateChord } from '../../actions/note_actions';


const mapStateToProps = state => ({
  chord: state.notes.chord
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: options => dispatch(fetchNotes(options)),
  updateChord: chord => dispatch(updateChord(chord))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChordSelector);
