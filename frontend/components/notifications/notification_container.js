import Notification from './notification';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  notifications: state.notifications
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//
// });


export default connect(
  mapStateToProps,
  null
)(Notification);
