import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {
    toQuestion = (e, id) => {
        e.preventDefault()
        // Redirect to parent Question.
        this.props.history.push(`/answered-question/${id}`)
    }
    render() {
        const { question, user } = this.props
        return (
            <Fragment>     
                <div id="question" className="card-body border mx-2 my-2 pb-4">
                    <p className="card-text lead text-left border-bottom pb-2"> {user.name}</p>
                    <div className="avatar-div float-left w-50 border-right">
                        <img src={user.avatarURL} className="avatar-home img-circle mr-2" alt="" />
                    </div>
                    <div className="float-right w-50">
                        <h5 className="card-title mt-4 ml-4">Would you rather...</h5>
                        <p className="optionOne card-text mr-4">{question.optionOne.text}</p>  
                        <button className='btn-question btn btn-primary mt-4' onClick={(e) => this.toQuestion(e, question.id)}>
                            Go to Question
                        </button>                       
                    </div>
                </div> 
            </Fragment> 
        )
    }
}

function mapStateToProps ( { questions, users }, { id }) {
    const question = questions[id]
    const user = users[question.author]
    return {
        question : question,
        user: user
    }
}

export default withRouter(connect(mapStateToProps)(AnsweredQuestion))