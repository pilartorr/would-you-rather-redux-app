import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogOut from './LogOut'
import QuestionNav from './QuestionNav'
import UnansweredList from './UnansweredList'
import AnansweredList from './AnansweredList'


class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <LogOut />
                    <div className="card text-center w-50 m-auto">  
                        <QuestionNav />             
                        <div>
                            <Route path="/" exact component={UnansweredList} />
                            <Route path="/ananswered" component={AnansweredList} />
                        </div>
                    </div>
                </Fragment>     
            </Router>               
        )
    }
}

export default Home