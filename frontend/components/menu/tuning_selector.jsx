import React from 'react';
import { hashHistory } from 'react-router';
import { note2NUm, num2Note } from '../../util/references';

class TuningSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noteToChange: null, revealed: false };
    this.renderCurrentTuning = this.renderCurrentTuning.bind(this);
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.changeNote = this.changeNote.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {

  }

  resetTuning() {
    this.props.resetTuning();
  }

  renderCurrentTuning() {
    const tuning = this.props.tuning;
    return (Object.keys(tuning).map((num, idx) => {
      return <li key={`${idx}`} className={`tuning-note ${idx}`}
                 onClick={ this.toggleNotes.bind(this, idx) }>
               { num2Note[tuning[num]] }
             </li>;
    }));
  }

  renderAllNotes() {
    const tuning = this.props.tuning;
    return (num2Note.map((note, idx) => {
      return <li key={`${idx}`} className="tuning-note"
                 onClick={ this.changeNote.bind(this, note) }>
               { note }
             </li>;
    }));
  }

  changeNote(note) {
    let idx = this.state.noteToChange;
    let newNote = note2Num[note];
    this.props.updateNote(newNote, idx);
    this.toggleNotes(null);
  }

  toggleNotes(idx) {
    let revealed = !this.state.revealed;
    this.setState({ noteToChange: idx, revealed });
    $('.all-notes-list').toggleClass('hidden');
    if (revealed) {
      $(`.tuning-note.${idx}`).toggleClass('selected');
    } else {
      $('.tuning-note').removeClass('selected');
    }
  }

  render () {
    return(
      <div className="tuning-selector-container">
        <div className="simple-link"
             onClick={ this.resetTuning.bind(this) }>
          Restore default
        </div>

        <ul className="current-tuning-list">
          { this.renderCurrentTuning() }
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

  export default TuningSelector;
