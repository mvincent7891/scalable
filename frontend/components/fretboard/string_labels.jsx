import React from 'react';
import  css  from '../../../assets/css/string_lable.css';
import { num2Note } from '../../util/references';

class StringLabels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { top: null, left: null };
    this.stringSpacing = this.stringSpacing.bind(this);
  }

  componentWillReceiveProps(newProps) {
    let pos = $(newProps.canvas).position();
    let top = pos.top;
    let left = pos.left;
    this.setState({ top, left }, () => console.log(this.state));
  }

  stringSpacing() {
    return Math.floor(
      (this.props.height - (2 * this.props.margin)) /
        (this.props.numStrings - 1)
    );
  }

  renderLabels() {
    if (this.props.canvas) {
      let tuning = this.props.tuning;
      let len = Object.keys(tuning).length;
      let space = this.stringSpacing();
      let labels = [];
      for (let i = 0; i < this.props.numStrings; i++) {
        let top = this.state.top + (i * space) +
          Math.floor(this.props.margin / 2) + 4;
        let left = this.state.left + Math.floor(this.props.margin / 2);
        let style = { top, left };
        labels.push(<li className="string-label"
        style={ style }
        key={ `label-${i}` }>
        { num2Note[tuning[len - i -1]] }
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
      </div>
    );
  }
}

  export default StringLabels;
