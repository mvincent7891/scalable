import React from 'react';
import Key from './key';
import { hashHistory } from 'react-router';
import { num2Note, scaleNames, chordNames,
         chordMaps, scaleMaps, menuItems, icons } from '../../util/references';
import Modal from 'react-modal';
import TuningSelectorContainer from '../menu/tuning_selector_container';
import ChordSelectorContainer from '../menu/chord_selector_container';
import ScaleSelectorContainer from '../menu/scale_selector_container';
import { menuComponents } from '../menu/menu';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: 1, modalIsOpen: false, item: null,
                   component: "" };
    this.renderDashboard = this.renderDashboard.bind(this);
    this.toggleDashboard = this.toggleDashboard.bind(this);
    this.dashboard = this.dashboard.bind(this);
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

  renderDashboard() {
    switch (this.state.toggle) {
      case -1:
        return  (<li className="dashboard-list-item"
                     onClick={ this.toggleDashboard }>
                    <i className="material-icons">dashboard</i>
                    <span>
                      <div className="simple-link">
                        Reveal Dashboard
                      </div>
                    </span>
                  </li>);
      case 1:
        return this.dashboard();
      default:
        return null;
    }
  }

  dashboard() {
    let scaleText = scaleNames[this.props.scaleName] === "No Scale" ? (
      "No Scale") : (`${num2Note[this.props.scaleRoot]} ${scaleNames[this.props.scaleName]} Scale`
    );
    let chordText = chordNames[this.props.chordName] === "No Chord" ? (
      "No Chord") : (`${num2Note[this.props.chordRoot]} ${chordNames[this.props.chordName]} Chord`
    );
    return (<div>
      <li className="dashboard-list-item"
          onClick={ this.toggleDashboard }>
        <i className="material-icons">dashboard</i>
          <span>
            <div className="simple-link">
              Hide Dashboard
            </div>
          </span>
      </li>
      <br/>
      <ul className="dashboard-info">
        <li className="dashboard-list-item"
            onClick={ this.openModal.bind(this, 'Tuning') }>
          <i className="material-icons">tune</i>
          <span>{ Object.values(this.props.tuning)
                        .map(num => num2Note[num])
                        .join(' ') }</span>
        </li>
        <li className="dashboard-list-item"
            onClick={ this.openModal.bind(this, 'Chord') }>
          <i className="material-icons">music_note</i>
          <span>{ chordText }</span>
        </li>
        <li className="dashboard-list-item key"
            onClick={ this.openModal.bind(this, 'Chord') }>
          <Key set="chord"
               root={ this.props.chordRoot }
               map={ chordMaps[this.props.chordName] }/>
        </li>
        <li className="dashboard-list-item"
            onClick={ this.openModal.bind(this, 'Scale') }>
          <i className="material-icons">palette</i>
          <span>{ scaleText }</span>
        </li>
        <li className="dashboard-list-item key"
            onClick={ this.openModal.bind(this, 'Scale') }>
          <Key set="scale"
               root={ this.props.scaleRoot }
               map={ scaleMaps[this.props.scaleName] }/>
        </li>
        <br/>
        <li>{ `Displaying ${this.props.numFrets - 1} frets on a ${this.props.numStrings} string guitar` }</li>
      </ul>
    </div>);
  }

  toggleDashboard() {
    let toggle = this.state.toggle * -1;
    this.setState({ toggle });
  }

  render () {
    return(
      <div className={`dashboard-container ${ this.state.toggle === 1 ? 'selected' : ''}`}>
        <ul className="dashboard-list">
          { this.renderDashboard() }
        </ul>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal.bind(this) }
          onRequestClose={ this.closeModal.bind(this) }
          className="modal" overlayClassName="overlay" >
          <h2 ref="subtitle">{ this.state.item }</h2>
          <div ref="component">{ this.state.component }</div>
          <button onClick={ this.closeModal.bind(this) }>Done</button>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
