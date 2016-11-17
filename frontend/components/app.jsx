import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';
import DashboardContainer from './dashboard/dashboard_container';
import HiddenMessage from './misc/hidden_message';
import SaveContainer from './misc/save_container';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  width: state.fretboard.width
});

const mapDispatchToProps = dispatch => ({

});

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header">
          <div>Scalable</div>
          <ul className="links">
            <a title="Save Session"><li><SaveContainer/></li></a>
            <a href="https://mvincent7891.github.io/portfolio/" title="Michael's Portfolio"><li className="portfolio"></li></a>
            <a href="https://github.com/mvincent7891" title="Michael's GitHub"><li className="github"></li></a>
            <a href="https://www.linkedin.com/in/mvparlato" title="Michael's LinkeIn"><li className="linkedin"></li></a>
          </ul>
        </div>
        <HiddenMessage/>
        <div className="footer">Created by Michael Parlato &#169; 2016</div>
        <div className="component-container">
          <MenuContainer/>
          <div className="main-flex-box" style={{"width" : this.props.width}}>
            <FretboardContainer/>
            <div className="dashboard-flex-box">
              <DashboardContainer/>
              <div className="dashboard-container last">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
