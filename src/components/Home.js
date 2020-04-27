import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LogOut from './LogOut'
import Question from './Question'

class Home extends Component {
    state = {
        activeList: true
    }
    
    render(){
        const { unansweredQuestions, answeredQuestions } = this.props
        return (
            <Fragment>
                <LogOut />
                <div id="home" className="card text-center w-50 m-auto">  
                    <div id="home-toggle-nav" className="card-header">
                        <ul className="nav nav-tabs">
                            <li className="nav-item mr-2">
                                <button 
                                    className="nav-link"
                                    onClick={() => { this.setState({ activeList: true })}}>
                                    Unanswered
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    onClick={() => { this.setState({ activeList: false })}}>
                                    Answered
                                </button>
                            </li>
                        </ul>
                    </div>          
                    <div className="home-dashboard">
                        <ul id="unanswered-list" className='list-unstyled'>
                            {this.state.activeList && 
                                unansweredQuestions.map((qId) => (
                                    <li key={qId}>
                                        <Question id={qId}/>
                                    </li>
                            ))}
                        </ul>
                        <ul id="answered-list" className='list-unstyled'>
                            {!this.state.activeList && 
                                answeredQuestions.map((qId) => (
                                    <li key={qId}>
                                        <Question id={qId}/>
                                    </li>
                            ))}
                        </ul>                       
                    </div>
                </div>
            </Fragment>               
        )
        
    }   
}
    
function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser];
    const answeredQuestions = Object.keys(user.answers)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
      unansweredQuestions : Object.keys(questions)
        .filter(qid => !answeredQuestions.includes(qid))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      answeredQuestions
    }
}

export default connect(mapStateToProps)(Home)