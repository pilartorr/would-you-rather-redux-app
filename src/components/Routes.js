import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import Login from './Login'
import Logout from './LogOut'
import QuestionDetail from './QuestionDetail'
import NotFound from './NotFound'


function Routes(props) {
  return <div className="container">
    <Switch>
        { props.notLoggedIn 
            ?   <Route path='/' exact component={Login} />
            :   <Fragment>
                    <Route path='/' exact component={Home} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='/newquestion' component={NewQuestion} />
                    <Route path='/question/:id' component={QuestionDetail} />
                    <Route exact path='/logout' component={Logout} />
                </Fragment>
        }
        <Route component={NotFound} />
    </Switch>
  </div>;
}

export default Routes;