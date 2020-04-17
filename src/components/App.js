import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/index.css'; 
import Nav from './Nav'
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Nav />
            <div>
              <Route path='/' exact component={Home} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/newquestion' component={NewQuestion} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
