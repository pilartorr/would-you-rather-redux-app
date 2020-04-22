import React, { Component, Fragment } from 'react'
import AnsweredQuestion from './AnsweredQuestion'
import { connect } from 'react-redux'

class AnsweredList extends Component {
    render() {
        return (
            <Fragment> 
                <ul id="answered-list" className='list-unstyled'>
                    {this.props.answeredQuestions.map((qId) => (
                        <li key={qId}>
                            <AnsweredQuestion id={qId}/>
                        </li>
                    ))}
                </ul>
            </Fragment> 
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const user = users[authedUser];
    return {
      answeredQuestions: Object.keys(user.answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }

export default connect(mapStateToProps)(AnsweredList)