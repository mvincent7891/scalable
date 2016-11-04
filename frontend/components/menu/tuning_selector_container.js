import { connect } from 'react-redux';
import TuningSelector from './tuning_selector';

const mapStateToProps = state => ({
  tuning: state.tuning,
  numStrings: state.fretboard.numStrings,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TuningSelector);
