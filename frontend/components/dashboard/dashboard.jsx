import React from 'react';
import { hashHistory } from 'react-router';

const num2Note = ['A', 'A#', 'B', 'C', 'C#', 'D',
                  'D#', 'E', 'F', 'F#', 'G', 'G#'];

const scaleNames = {
  major: 'Major',
  natural_minor: 'Natural  Minor',
  major_pentatonic: 'Major Pentatonic',
  minor_pentatonic: 'Minor Pentatonic',
  harmonic_minor: 'Harmonic Minor',
  melodic_minor: 'Melodic Minor',
  dorian_mode: 'Dorian Moe',
  phrygian_mode: 'Phrygian Mode',
  lydian_mode: 'Lydian Mode',
  mixolydian_mode: 'Mixolydian Mode'
};

const chordNames = {
  major: 'Major',
  minor: 'Minor',
  dominant_seventh: 'Dominant 7th',
  major_seventh: 'Major 7th',
  minor_seventh: 'Minor 7th',
  seventh_sharp_nine: '7th #9 (Hendrix)',
  sixth: '6th',
  minor_sixth: 'Minor 6th',
  diminished: 'Diminished',
  diminished_seventh: 'Diminished 7th'
};


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: -1 };
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
                    <span>Reveal Dashboard</span>
                  </li>);
      case 1:
        return this.dashboard();
      default:
        return null;
    }
  }

  dashboard() {
    return (<div>
      <li className="dashboard-list-item"
          onClick={ this.toggleDashboard }>
        <i className="material-icons">dashboard</i>
        <span>Hide Dashboard</span>
      </li>
      <br/>
      <ul className="dashboard-info">
        <li>Chord: {num2Note[this.props.chordRoot]} {chordNames[this.props.chordName]}</li>
        <li>Scale: {num2Note[this.props.scaleRoot]} {scaleNames[this.props.scaleName]}</li>
        <br/>
        <li>{ `Currently displaying ${this.props.numFrets} frets of a ${this.props.numStrings} string guitar.` }</li>
      </ul>
    </div>);
  }

  toggleDashboard() {
    let toggle = this.state.toggle * -1;
    this.setState({ toggle });
  }

  render () {
    return(
      <div className="dashboard-container">
        <ul className="dashboard-list">
          { this.renderDashboard() }
        </ul>
      </div>
    );
  }
}

  export default Dashboard;
