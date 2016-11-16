import React from 'react';
import { hashHistory } from 'react-router';
import { note2Num, num2Note,
         scaleNames } from '../../util/references';

class ScaleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.renderAllNotes = this.renderAllNotes.bind(this);
    this.renderAllNames = this.renderAllNames.bind(this);
    this.renderCurrentScale = this.renderCurrentScale.bind(this);
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
    let name = this.props.scale.name;
    this.props.updateScale({ root, name });
  }

  changeName(name) {
    this.toggleNames();
    let root = this.props.scale.root;
    this.props.updateScale({ root, name });
  }

  renderAllNotes() {
    return (num2Note.map((note, idx) => {
      return <li key={`${idx}`} className="scale-note any-note"
                 onClick={ this.changeNote.bind(this, note) }>
               { note }
             </li>;
    }));
  }

  renderAllNames() {
    return (Object.keys(scaleNames).map((scale, idx) => {
      let name = scaleNames[scale];
      return <li key={`${idx}`} className="scale-name"
                 onClick={ this.changeName.bind(this, scale) }>
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

  renderCurrentScale() {
    return <div className="flex-row">
             <li className={`scale-note any-note selected`}
                 onClick={ this.toggleNotes.bind(this) }>
               { num2Note[this.props.scale.root] }
             </li>
             <div onClick={ this.toggleNames.bind(this) }
                  className="scale">
               { scaleNames[this.props.scale.name] }
             </div>
           </div>;
  }

  render () {
    return(
      <div className="tuning-selector-container">

        <ul className="current-tuning-list">
          { this.renderCurrentScale() }
        </ul>
        <ul className="all-notes-list hidden">
          Select a note
        </ul>
        <ul className="all-notes-list hidden">
          { this.renderAllNotes() }
        </ul>
        <ul className="all-names-list hidden">
          Select scale
        </ul>
        <ul className="all-names-list hidden">
          { this.renderAllNames() }
        </ul>
      </div>
    );
  }
}

  export default ScaleSelector;
