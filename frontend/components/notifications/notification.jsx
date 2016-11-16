import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';;

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.renderNotifications = this.renderNotifications.bind(this);
  }

  componentWillReceiveProps(newProps) {
  }

  renderNotifications() {
    return this.props.notifications.map((notification, id) => {
      return <li key={id} className={`${notification.category}-notification`}>
              { notification.message }
             </li>;
    });
  }

  render() {
    return (
      <div>
        <ul className={"notification-stack"}>
          <ReactCSSTransitionGroup
            transitionName="notifications"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
            { this.renderNotifications() }
          </ReactCSSTransitionGroup>
        </ul>
        { this.props.children }
      </div>

    );
  }

}

export default Notification;
