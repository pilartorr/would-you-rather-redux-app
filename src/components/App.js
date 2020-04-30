import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import '../styles/index.css'; 
import Nav from './Nav'
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionDetail from './QuestionDetail'
import Login from './Login'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch((handleInitialData()))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div id="router-app" className='container'>
            <Nav />
            <Switch>
              { this.props.authedUser === null
                ? <Route exact path='/' component={Login} />
                : <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/newquestion' component={NewQuestion} />
                    <Route path='/question/:id' component={QuestionDetail} />
                  </div>
              }
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser 
});

export default connect(mapStateToProps)(App);
