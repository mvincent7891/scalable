import { connect } from 'react-redux';
import Notes from './notes';


const mapStateToProps = state => ({
  numFrets: state.fretboard.numFrets,
  numStrings: state.fretboard.numStrings,
  scaleRoot: state.notes.scale.root,
  scaleName: state.notes.scale.name,
  chordRoot: state.notes.chord.root,
  chordName: state.notes.chord.name,
  tuning: state.tuning
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
