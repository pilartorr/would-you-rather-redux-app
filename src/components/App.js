import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
import LogOut from './LogOut'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div id="router-app" className='container'>
            <Nav />
            { this.props.authedUser === null
              ? <Route exact path='/login' component={Login} />
              : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/newquestion' component={NewQuestion} />
                  <Route path='/question/:id' component={QuestionDetail} />
                  <Route path='/logout' component={LogOut} />
                  <Route path='/notfound' component={NotFound} />
                </div>
            }
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
