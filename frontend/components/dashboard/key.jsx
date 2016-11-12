import React from 'react';
import { colors, num2Note } from '../../util/references';

class Key extends React.Component {
  constructor(props) {
    super(props);

    this.renderColors = this.renderColors.bind(this);
  }

  renderColors() {
    return colors[this.props.set].slice(0, this.props.map.length)
                                 .map((color, idx) => {
      let style = { color: '#fff', backgroundColor: color };
      return <li key={ idx }
                 className="color-list-item"
                 style={ style }>
               { num2Note[(this.props.map[idx] + this.props.root - 1) % 12] }
             </li>;
    });
  }

  render () {
    return(
      <div>
        <ul className="color-list">
          { this.renderColors() }
        </ul>
      </div>
    );
  }
}

export default Key;
