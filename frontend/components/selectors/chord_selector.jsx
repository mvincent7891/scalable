import React from 'react';
import { hashHistory } from 'react-router';
import { note2Num, num2Note,
         chordNames, scaleNames } from '../../util/references';

class ChordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.renderAllNames = this.renderAllNames.bind(this);
    this.renderCurrentChord = this.renderCurrentChord.bind(this);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.toggleNames = this.toggleNames.bind(this);
    this.changeNote = this.changeNote.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  changeNote(note) {
    this.toggleNotes();
    let root = note2Num[note];
    let name = this.props.chord.name;
    this.props.updateChord({ root, name });
  }

  changeName(name) {
    this.toggleNames();
    let root = this.props.chord.root;
    this.props.updateChord({ root, name });
  }

  renderAllNotes() {
    return (num2Note.map((note, idx) => {
      return <li key={`${idx}`} className="chord-note any-note"
                 onClick={ this.changeNote.bind(this, note) }>
               { note }
             </li>;
    }));
  }

  renderAllNames() {
    return (Object.keys(chordNames).map((chord, idx) => {
      let name = chordNames[chord];
      return <li key={`${idx}`} className="chord-name"
                 onClick={ this.changeName.bind(this, chord) }>
               { name }
             </li>;
    }));
  }

  toggleNotes() {
    $('.all-notes-list').toggleClass('hidden');
  }

  toggleNames() {
    $('.all-names-list').toggleClass('hidden');
  }

  renderCurrentChord() {
    return <div className="flex-row">
             <li className={`chord-note any-note selected`}
                 onClick={ this.toggleNotes.bind(this) }>
               { num2Note[this.props.chord.root] }
             </li>
             <div onClick={ this.toggleNames.bind(this) }
                  className="chord">
               { chordNames[this.props.chord.name] }
             </div>
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
        <ul className="all-names-list hidden">
          Select chord
        </ul>
        <ul className="all-names-list hidden">
          { this.renderAllNames() }
        </ul>
      </div>
    );
  }
}

  export default ChordSelector;
