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
    return (this.props.height - (2 * this.props.margin)) /
        (this.props.numStrings - 1);
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

  renderLabels() {
    if (this.props.canvas) {
      let tuning = this.props.tuning;
      let len = Object.keys(tuning).length;
      let space = this.stringSpacing();
      let labels = [];
      for (let i = 0; i < this.props.numStrings; i++) {
        let top = Math.floor(this.state.top + (i * space) +
          (this.props.margin / 2) + 5);
        let left = this.state.left + Math.floor(this.props.margin / 2);
        let style = { top, left };
        let actual = len - i - 1;
        labels.push(<li className="string-label"
                        style={ style }
                        onMouseOver={ this.jiggle.bind(this) }
                        onClick={ this.openModal.bind(this, actual) }
                        key={ `label-${i}` }>
          { num2Note[tuning[actual]] }
        </li>);
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
