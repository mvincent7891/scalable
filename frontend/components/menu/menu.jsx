import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import TuningSelectorContainer from './tuning_selector_container';

const menuItems = [
  'Tuning', 'Chord', 'Scale', 'Strings', 'Frets', 'Progression'
];

const icons = [
  'tune', 'music_note', 'palette',
  'line_weight', 'view_week', 'queue_music'
];

const menuComponents = [
  <TuningSelectorContainer/>,
  <TuningSelectorContainer/>,
  <TuningSelectorContainer/>,
  <TuningSelectorContainer/>,
  <TuningSelectorContainer/>,
  <TuningSelectorContainer/>,
];

const menuDictionary = {};

Object.keys(menuItems).forEach(key => {
  menuDictionary[key] = menuItems[key];
});

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, item: null, component: "" };
  }

  componentWillMount () {
      Modal.setAppElement('body');
   }

  openModal (item) {
    let current = menuItems.indexOf(item);
    const component = menuComponents[current];
    this.setState({ modalIsOpen: true, item, component });
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#616161';
    // this.refs.component.appendChild(this.state.component);
  }

  closeModal () {
    this.props.fetchNotes();
    this.setState({ modalIsOpen: false });
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  nextItem() {
    let current = menuItems.indexOf(this.state.item);
    let next = (current + 1) % menuItems.length;
    const item = menuDictionary[next];
    const component = menuComponents[current];
    this.setState({ item, component });
  }

  renderMenuItem(item, key) {
    let idx = menuItems.indexOf(item);
    return <li onClick={ this.openModal.bind(this, item) }
               key={ `${key}`} >
              <i className="material-icons">{ icons[idx] }</i>
              <span>{ item }</span>
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
          <div ref="component">{ this.state.component }</div>
          <button onClick={ this.closeModal.bind(this) }>Done</button>
          <button onClick={ this.nextItem.bind(this) }>Next</button>
        </Modal>
      </div>
    );
  }
}

export default Menu;
