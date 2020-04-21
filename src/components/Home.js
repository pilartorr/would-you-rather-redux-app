import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogOut from './LogOut'
import QuestionsNav from './QuestionsNav'
import AnsweredList from './AnsweredList'
import UnansweredList from './UnansweredList'


export default function Home () {
    return (
        <Router>
            <Fragment>
                <LogOut />
                <div className="card text-center w-50 m-auto">  
                    <QuestionsNav />        
                    <div className="home-dashboard">
                        <Route path="/" exact component={UnansweredList} />
                        <Route path="/answered" component={AnsweredList} />
                    </div>
                </div>
            </Fragment>     
        </Router>               
    )
    
}
