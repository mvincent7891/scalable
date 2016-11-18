import React from 'react';
import FretboardContainer from './fretboard/fretboard_container';
import MenuContainer from './menu/menu_container';
import DashboardContainer from './dashboard/dashboard_container';
import HiddenMessage from './misc/hidden_message';
import SaveContainer from './misc/save_container';
import ShareContainer from './misc/share_container';
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
            <a title="Share Session"><li><ShareContainer/></li></a>
            <a title="Save Session"><li><SaveContainer/></li></a>
            <li className="links-text">Contact the Developer</li>
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
                <p>
                  Welcome to Scalable, an app meant to encourage and aid visualization of the fretboard. Change the tuning of the guitar, update the chord and/or scale being viewed, and notice how chord and scale interact.
                </p>
                <p>
                  Features coming soon include a fingering finder to help find novel chords in strange tunings and a progression visualizer to show how certain progressions move through a given scale.
                  Don't hesitate to <a className="email" href="mailto:michaelvparlato@gmail.com">reach out</a> if you have any suggestions!
                </p>
                <p className="sign-off">
                  <i>- Michael</i>
                </p>
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
