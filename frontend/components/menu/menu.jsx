import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import TuningSelectorContainer from '../selectors/tuning_selector_container';
import ChordSelectorContainer from '../selectors/chord_selector_container';
import ScaleSelectorContainer from '../selectors/scale_selector_container';
import { menuItems, icons, selectionDialogue } from '../../util/references';

class ComingSoon extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        Component Coming Soon!
        <br/><br/>
        {""}
      </div>
    );
  }
}

export const menuComponents = [
  <TuningSelectorContainer/>,
  <ChordSelectorContainer/>,
  <ScaleSelectorContainer/>,
  <ComingSoon/>,
  <ComingSoon/>,
  <ComingSoon/>,
];

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, item: null,
                   component: "" };
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
          <div className="selection-dialogue">
            {this.state.item && selectionDialogue[this.state.item]}
          </div>
          <div ref="component">{ this.state.component }</div>
          <button onClick={ this.closeModal.bind(this) }>Done</button>
        </Modal>
      </div>
    );
  }
}
