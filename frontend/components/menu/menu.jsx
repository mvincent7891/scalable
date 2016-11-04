import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';

const menuItems = [
  'Tuning', 'Chord', 'Scale', 'Strings', 'Frets', 'Progression'
];

const menuDictionary = {};

Object.keys(menuItems).forEach(key => {
  menuDictionary[key] = menuItems[key];
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, item: null };
  }

  componentWillMount () {
      Modal.setAppElement('body');
   }

  openModal (item) {
    this.setState({ modalIsOpen: true, item });
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal () {
    this.setState({ modalIsOpen: false });
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  nextItem() {

  }

  renderMenuItem(item, key) {
    return <li onClick={ this.openModal.bind(this, item) }
               key={ `${key}`} >
              { item }
           </li>;
  }

  render () {
    return(
      <div className="menu-container">
        <ul className="menu">
          { menuItems.slice(0,3).map((item, idx) => this.renderMenuItem(item, idx))}
        </ul>
        <ul className="menu last">
          { menuItems.slice(3).map((item, idx) => this.renderMenuItem(item, idx))}
        </ul>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal.bind(this) }
          onRequestClose={ this.closeModal.bind(this) }
          className="modal" overlayClassName="overlay" >
          <h2 ref="subtitle">{ this.state.item }</h2>
          <button onClick={ this.closeModal.bind(this) }>Cancel</button>
        </Modal>
      </div>
    );
  }
}

export default Menu;
