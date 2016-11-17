import { connect } from 'react-redux';
import Save from './save';
import * as REFS from '../../util/references';
import { createNotification,
         destroyNotification } from '../../actions/notification_actions';

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

const savedSession = dispatch => {
  const message1 = "Session saved";
  const message2 = "Copy URL to share or reload";
  dispatch(createNotification(message1, 'success'));
  // setTimeout(() => dispatch(createNotification(message2, 'success'), 2000));
  setTimeout(() => dispatch(destroyNotification()), 2000);
  // setTimeout(() => dispatch(destroyNotification()), 4500);
};

const mapDispatchToProps = dispatch => ({
  savedSession: () => savedSession(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Save);
