import React from 'react';
import { hashHistory } from 'react-router';

// A A# B C C# D D# E F F# G  G#
// 0 1  2 3 4  5 6  7 8 9  10 11

const num2Note = ['A', 'A#', 'B', 'C', 'C#', 'D',
                  'D#', 'E', 'F', 'F#', 'G', 'G#'];

const note2Num = {
  'A': 0, 'A#': 1, 'B': 2,
  'C': 3, 'C#': 4, 'D': 5,
  'D#': 6, 'E': 7, 'F': 8,
  'F#': 9, 'G': 10, 'G#': 11
};

class TuningSelector extends React.Component {
  constructor(props) {
    super(props);
    this.renderCurrentTuning = this.renderCurrentTuning.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  renderCurrentTuning() {
    const tuning = this.props.tuning;
    return (Object.keys(tuning).map((num, idx) => {
      return <li key={`${idx}`} className="tuning-note">
               { num2Note[tuning[num]] }
             </li>;
    }));
  }

  render () {
    return(
      <div className="tuning-selector-container">
        <ul className="current-tuning-list">
          { this.renderCurrentTuning() }
        </ul>
      </div>
    );
  }
}

  export default TuningSelector;
