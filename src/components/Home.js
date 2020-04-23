import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LogOut from './LogOut'
import Question from './Question'

class Home extends Component {
    state = {
        activeList: '1'
    }
    toggleList(list) {
        if (this.state.activeList !== list) {
            this.setState({
                activeList: list
            })
        }
    }
    render(){
        const { unansweredQuestions, answeredQuestions } = this.props
        return (
            <Fragment>
                <LogOut />
                <div id="home" className="card text-center w-50 m-auto">  
                    <div id="home-toggle-nav" className="card-header">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a 
                                    href="/"
                                    className="nav-link"
                                    onClick={() => { this.toggleList('1')}}>
                                    Unanswered
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/"
                                    className="nav-link"
                                    onClick={() => { this.toggleList('2')}}>
                                    Answered
                                </a>
                            </li>
                        </ul>
                    </div>          
                    <div className="home-dashboard" activelist={this.state.activeList}>
                        <ul list="1" id="unanswered-list" className='list-unstyled'>
                            {unansweredQuestions.map((qId) => (
                                <li key={qId}>
                                    <Question id={qId}/>
                                </li>
                            ))}
                        </ul>
                        <ul list="2" id="answered-list" className='list-unstyled'>
                            {answeredQuestions.map((qId) => (
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