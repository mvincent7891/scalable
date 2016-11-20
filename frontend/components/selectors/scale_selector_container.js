import { connect } from 'react-redux';
import ScaleSelector from './scale_selector';
import { fetchNotes,
         updateScale } from '../../actions/note_actions';


const mapStateToProps = state => ({
  scale: state.notes.scale
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: options => dispatch(fetchNotes(options)),
  updateScale: scale => dispatch(updateScale(scale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleSelector);
