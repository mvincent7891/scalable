import React from 'react';
import { hashHistory } from 'react-router';
import  css  from '../../../assets/css/tuning.css';
import { note2Num, num2Note,
         alternateTunings } from '../../util/references';

class TuningSelector extends React.Component {
  constructor(props) {
    super(props);
    this.range = 8;
    let first = 0;
    let last = first + this.range;
    this.state = { noteToChange: null, revealed: false,
                   alt: false, first, last };
    this.renderCurrentTuning = this.renderCurrentTuning.bind(this);
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.toggleAltTunings = this.toggleAltTunings.bind(this);
    this.changeNote = this.changeNote.bind(this);
    this.alternateTuning = this.alternateTuning.bind(this);
    this.renderAltTunings = this.renderAltTunings.bind(this);
    this.renderTuningArrows = this.renderTuningArrows.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  resetTuning() {
    this.props.resetTuning();
  }

  alternateTuning(key) {
    this.toggleAltTunings();
    this.props.updateTuning(alternateTunings[key].notes);
  }

  renderAltTunings() {
    let first = this.state.first;
    let last = this.state.last;

    const list = Object.keys(alternateTunings).slice(first, last).map(tuningKey => {
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
    $('.alt-tuning-container').toggleClass('hidden');
    $('.tuning-cycle-container').toggleClass('hidden');
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

  renderTuningArrows() {
    return (<div className="cycle-tunings">
      { this.state.first === 0 ?
        <div className="simple-link left disabled">
          Prev
        </div>
         :
        <div className="simple-link left"
          onClick={ this.prevTunings.bind(this) }>
          Prev
        </div>
      }
      { this.state.last >= Object.keys(alternateTunings).length ?
        <div className="simple-link right disabled">
          Next
        </div>
        :
        <div className="simple-link right"
          onClick={ this.nextTunings.bind(this) }>
          Next
        </div>
      }
    </div>);
  }

  prevTunings() {
    let first = this.state.first - this.range;
    let last = this.state.last - this.range;
    this.setState({ first, last });
  }

  nextTunings() {
    let first = this.state.first + this.range;
    let last = this.state.last + this.range;
    this.setState({ first, last });
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

        <div className="alt-tuning-container hidden">
          <ul className="alt-tuning-list hidden">
            { this.renderAltTunings() }
          </ul>

          <ul className="tuning-cycle-container hidden">
            { this.renderTuningArrows() }
          </ul>
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
