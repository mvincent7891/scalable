import React from 'react';
import { colors } from '../../util/references';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.renderColors = this.renderColors.bind(this);
  }

  renderColors() {
    let uniqColors = {};
    colors[this.props.set].forEach(color => {
      uniqColors[color] = true;
    });
    return Object.keys(uniqColors).map((color, idx) => {
      let style = { color, backgroundColor: color };
      return <li key={ idx }
                 className="color-list-item"
                 style={ style }>
               { "" }
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
