import { connect } from 'react-redux';
import StringLabels from './string_labels';

const mapStateToProps = state => ({
  numStrings: state.fretboard.numStrings,
  width: state.fretboard.width,
  height: state.fretboard.height,
  margin: state.fretboard.margin,
  tuning: state.tuning
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StringLabels);
