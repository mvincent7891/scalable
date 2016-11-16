import React from 'react';
import  css  from '../../../assets/css/hidden_message.css';

class HiddenMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hidden-message-container">
        <div className="message-body">Welcome to Scalable! The app is still very much under construction, but feel free to poke around, and reach out if you have any suggestions.</div>
        <div className="bottom-handle">
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>

    );
  }

}

export default HiddenMessage;
