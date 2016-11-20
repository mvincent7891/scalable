import React from 'react';
import { hashHistory } from 'react-router';
import  css  from '../../../assets/css/tuning.css';
import { note2Num, num2Note,
         alternateTunings } from '../../util/references';
import moreAlternateTunings from '../../util/tunings';

class TuningSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noteToChange: null, revealed: false, alt: false };
    this.renderCurrentTuning = this.renderCurrentTuning.bind(this);
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.toggleAltTunings = this.toggleAltTunings.bind(this);
    this.changeNote = this.changeNote.bind(this);
    this.alternateTuning = this.alternateTuning.bind(this);
    this.renderAltTunings = this.renderAltTunings.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    console.log(moreAlternateTunings);
  }

  resetTuning() {
    this.props.resetTuning();
  }

  alternateTuning(key) {
    this.toggleAltTunings();
    this.props.updateTuning(alternateTunings[key].notes);
  }

  renderAltTunings() {
    const list = Object.keys(alternateTunings).map(tuningKey => {
      const notes = alternateTunings[tuningKey].notes;
      const name = alternateTunings[tuningKey].name;
      return (<li key={ name }
                  className="alt-tuning-list-item"
                  onClick={ this.alternateTuning.bind(this, tuningKey) }>
        { name }
      </li>);
    });
    return list;
  }
  // 
  // renderEvenMoreTunings() {
  //   const list = Object.keys(moreAlternateTunings).map(tuningKey => {
  //     const notes = alternateTunings[tuningKey].notes;
  //     const name = alternateTunings[tuningKey].name;
  //     return (<li key={ name }
  //                 className="alt-tuning-list-item"
  //                 onClick={ this.alternateTuning.bind(this, tuningKey) }>
  //       { name }
  //     </li>);
  //   });
  //   return list;
  // }

  renderCurrentTuning() {
    const tuning = this.props.tuning;
    return (Object.keys(tuning).map((num, idx) => {
      return <li key={`${idx}`} className={`any-note tuning-note ${idx}`}
                 onClick={ this.toggleNotes.bind(this, idx) }>
               { num2Note[tuning[num]] }
             </li>;
    }));
  }

  renderAllNotes() {
    const tuning = this.props.tuning;
    return (num2Note.map((note, idx) => {
      return <li key={`${idx}`} className="tuning-note any-note"
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

  toggleAltTunings() {
    let alt = !this.state.alt;
    this.setState({ alt });
    $('.alt-tuning-list').toggleClass('hidden');
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
        <br/>
        <div className="simple-link"
             onClick={ this.toggleAltTunings.bind(this) }>
          { this.state.alt ? 'Hide' : 'Select from' } predefined
        </div>

        <ul className="alt-tuning-list hidden">
          { this.renderAltTunings() }
        </ul>

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
