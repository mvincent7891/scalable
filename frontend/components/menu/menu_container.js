import { connect } from 'react-redux';
import Menu from './menu';

const mapStateToProps = state => ({
  numFrets: state.fretboard.numFrets,
  numStrings: state.fretboard.numStrings,
  scaleRoot: state.notes.scale.root,
  scaleName: state.notes.scale.name,
  chordRoot: state.notes.chord.root,
  chordName: state.notes.chord.name
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);