import React, { Component, Fragment } from 'react'
import Question from './Question'
import { connect } from 'react-redux'

class UnansweredList extends Component {
    render() {
        return (
            <Fragment> 
                <ul className='unanswered-questions list-unstyled'>
                    {this.props.unansweredQuestions.map((qId) => (
                        <li key={qId}>
                            <Question id={qId}/>
                        </li>
                    ))}
                </ul>
            </Fragment> 
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser];
    const answeredQuestions = Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
      unansweredQuestions : Object.keys(questions).filter(qId => !answeredQuestions.includes(qId))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}


export default connect(mapStateToProps)(UnansweredList)