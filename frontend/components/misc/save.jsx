import React from 'react';
import { hashHistory } from 'react-router';

class Save extends React.Component {
  constructor(props) {
    super(props);
  }

  saveSession() {
    this.props.savedSession();
    const url = this.props.data.join('#');
    hashHistory.push(url);
  }

  render() {
    return (
      <i className="material-icons"
         onClick={ this.saveSession.bind(this) }>
        save
      </i>
    );
  }

}

export default Save;
