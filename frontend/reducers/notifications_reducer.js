import { NotificationConstants } from '../actions/notification_actions.js';

let count = 0;
const NotificationReducer = (state = [], action) => {
  
  let newState;
  switch (action.type) {
    case NotificationConstants.CREATE_NOTIFICATION:
      newState = [...state];
      newState.push({id: count++, category: action.category,
                     message: action.message});
      return newState;
    case NotificationConstants.DESTROY_NOTIFICATION:
      newState = [...state];
      newState.shift();
      return newState;
    default:
      return state;
  }
};

export default NotificationReducer;
