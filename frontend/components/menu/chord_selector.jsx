import React from 'react';
import { hashHistory } from 'react-router';
import { note2NUm, num2Note,
         chordNames, scaleNames } from '../../util/references';

class ChordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { revealed: false };
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.renderCurrentChord = this.renderCurrentChord.bind(this);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.changeNote = this.changeNote.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  changeNote() {
    this.toggleNotes();
  }

  renderAllNotes() {
    return (num2Note.map((note, idx) => {
      return <li key={`${idx}`} className="tuning-note"
                 onClick={ this.changeNote.bind(this, note) }>
               { note }
             </li>;
    }));
  }

  toggleNotes() {
    let revealed = !this.state.revealed;
    this.setState({ revealed });
    $('.all-notes-list').toggleClass('hidden');
  }

  renderCurrentChord() {
    return <div className="flex-row">
             <li className={`tuning-note`}
                 onClick={ this.toggleNotes.bind(this) }>
               { num2Note[this.props.chord.root] }
             </li>
             { chordNames[this.props.chord.name] }
           </div>;
  }

  render () {
    return(
      <div className="tuning-selector-container">

        <ul className="current-tuning-list">
          { this.renderCurrentChord() }
        </ul>
        <ul className="all-notes-list hidden">
          Select a note
        </ul>
        <ul className="all-notes-list hidden">
          { this.renderAllNotes() }
        </ul>
      </div>
    );
  }
}

  export default ChordSelector;
