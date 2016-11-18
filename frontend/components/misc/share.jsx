import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.getUrl = this.getUrl.bind(this);
    this.state = { modalIsOpen: false };
  }

  componentWillMount () {
      Modal.setAppElement('body');
   }

  openModal () {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal () {
    this.refs.subtitle.style.color = '#616161';
  }

  closeModal () {
    this.setState({ modalIsOpen: false });
  }

  getUrl() {
    let prefix = 'https://mvincent7891.github.io/scalable/#/';
    let session = this.props.data.join('#');
    return `${prefix}${session}`;
  }

  shareSession() {
    this.openModal.bind(this)();
  }

  render() {
    return (
      <div>
        <i className="material-icons"
          onClick={ this.shareSession.bind(this) }>
          share
        </i>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal.bind(this) }
          onRequestClose={ this.closeModal.bind(this) }
          className="modal" overlayClassName="overlay" >
          <h2 ref="subtitle">Share Session</h2>
          Share the url below to share this session
          <div className="share-session">{ this.getUrl() }</div>
          <button onClick={ this.closeModal.bind(this) }>Got it!</button>
        </Modal>
      </div>
    );
  }

}

export default Share;
