import React from 'react';
import Key from './key';
import { hashHistory } from 'react-router';
import { num2Note, scaleNames, chordNames,
         chordMaps, scaleMaps } from '../../util/references';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: 1 };
    this.renderDashboard = this.renderDashboard.bind(this);
    this.toggleDashboard = this.toggleDashboard.bind(this);
    this.dashboard = this.dashboard.bind(this);
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
        <li className="dashboard-list-item">
          <i className="material-icons">tune</i>
          <span>{ Object.values(this.props.tuning)
                        .map(num => num2Note[num])
                        .join(' ') }</span>
        </li>
        <li className="dashboard-list-item">
          <i className="material-icons">music_note</i>
          <span>{ chordText }</span>
        </li>
        <li className="dashboard-list-item key">
          <Key set="chord"
               root={ this.props.chordRoot }
               map={ chordMaps[this.props.chordName] }/>
        </li>
        <li className="dashboard-list-item">
          <i className="material-icons">palette</i>
          <span>{ scaleText }</span>
        </li>
        <li className="dashboard-list-item key">
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
      </div>
    );
  }
}

  export default Dashboard;
