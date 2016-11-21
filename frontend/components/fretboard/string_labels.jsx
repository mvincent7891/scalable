import React from 'react';
import  css  from '../../../assets/css/string_lable.css';
import { num2Note } from '../../util/references';
import Modal from 'react-modal';
import TuningSelectorContainer from '../selectors/tuning_selector_container';

class StringLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: null, left: null,
                   modalIsOpen: false, selection: null };
    this.stringSpacing = this.stringSpacing.bind(this);
    this.jiggle = this.jiggle.bind(this);
  }

  componentWillMount () {
      Modal.setAppElement('body');
   }

   openModal (i) {
     this.setState({ selection: i }, () => {
       this.setState({ modalIsOpen: true });
     });
   }

   afterOpenModal () {
     this.refs.subtitle.style.color = '#616161';
   }

   closeModal () {
     this.props.fetchNotes();
     this.setState({ modalIsOpen: false });
   }

  componentWillReceiveProps(newProps) {
    let pos = $(newProps.canvas).position();
    let top = pos.top;
    let left = pos.left;
    this.setState({ top, left });
  }

  stringSpacing() {
    return ((this.props.height - (2 * this.props.margin)) /
        (this.props.numStrings - 1));
  }

  jiggle(event, offset = -1) {
    let element = event.target ? $(event.target) : event;
    let pos = element.position();
    let top = pos.top += offset;
    let left = pos.left += offset;
    element.css({ top, left });
    if (offset < 0) {
      setTimeout(() => this.jiggle(element, -offset), 100);
    }
  }

  getTop(i) {
    let space = this.stringSpacing();
    return (this.state.top + (i * space) +
      (this.props.margin / 2));
  }

  getLeft() {
    return this.state.left + (this.props.margin / 2);
  }

  getStyle(i) {
    let space = Math.floor(this.stringSpacing());
    let top = Math.floor(this.getTop.bind(this)(i) +
      (space * .3 / 2));
    let left = Math.floor(this.getLeft.bind(this)());
    let val = Math.floor(space * .7);
    let width = val;
    let height = val;
    let lineHeight = `${val}px`;
    let fontSize = `${Math.floor(val * .55)}px`;
    return { top, left, width, height, lineHeight, fontSize };
  }

  renderLabels() {
    if (this.props.canvas) {
      let tuning = this.props.tuning;
      let len = this.props.numStrings;
      let labels = [];
      for (let i = 0; i < len; i++) {
        let style = this.getStyle.bind(this)(i);
        let actual = len - i - 1;
        let char = num2Note[tuning[actual]];
        labels.push(
          <li className="string-label"
              style={ style }
              title={ `Change ${char} string` }
              onMouseOver={ this.jiggle.bind(this) }
              onClick={ this.openModal.bind(this, actual) }
              key={ `label-${i}` }>
            { char }
          </li>
        );
      }
      return labels;
    } else {
      return "";
    }
  }

  render () {
    return(
      <div>
        { this.renderLabels.bind(this)() }
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal.bind(this) }
          onRequestClose={ this.closeModal.bind(this) }
          className="modal" overlayClassName="overlay" >
          <h2 ref="subtitle">Tuning</h2>
          <div ref="component">
            <TuningSelectorContainer selection={ this.state.selection }/>
          </div>
          <button onClick={ this.closeModal.bind(this) }>Done</button>
        </Modal>
      </div>
    );
  }
}

  export default StringLabels;
