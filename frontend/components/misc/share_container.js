import { connect } from 'react-redux';
import Share from './share';
import { withRouter } from 'react-router';
import * as REFS from '../../util/references';

const mapStateToProps = state => {
  let tuningString = Object.values(state.tuning).join('&');
  let propsObject = {data: [ 'session',
    state.notes.chord.root,
    REFS.chordBidash.hash[state.notes.chord.name],
    state.notes.scale.root,
    REFS.scaleBidash.hash[state.notes.scale.name],
    tuningString
  ]};
  return propsObject;
};


const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  null
)(Share));
