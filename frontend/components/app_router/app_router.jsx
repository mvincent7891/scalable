import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from '../app.jsx';

import isEmpty from 'lodash/isEmpty';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.routes = (
      <Router history={ hashHistory } >
        <Route path="/" component={ App } >

        </Route>
      </Router>
    );
  }

  componentWillReceiveProps(newProps) {
  }

  render () {
    return(
      <div className = "router">
        { this.routes }
      </div>
    );
  }
}

  export default AppRouter;
