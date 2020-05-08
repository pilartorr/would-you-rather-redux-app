import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'
import LogOut from './LogOut'
//import NotFound from './NotFound'

class  QuestionDetail extends Component {

    state = { 
        selectedOption: ''
    }

    handleOption = (event) => {
        this.setState({
            selectedOption: event.target.value
        })
    }  

    submitOption = (event) => {
        event.preventDefault()
        this.props.saveQuestionAnswer(this.state.selectedOption)
    } 

    render() {

        const { question, user, answered, percOne, percTwo, optionOneVotes, optionTwoVotes, total } = this.props
        const { selectedOption } = this.state
        
        const selectedOptionStyles = {
            border: '2px solid #3CB371',
            backgroundColor: '#98FB98',
            borderRadius: '10px',
            padding: '20px',
            color: '#034303',
            weight: 'bold'
        }
        
        //if(typeof allQuestionsIds.indexOf(question.id) === -1){ return <NotFound /> }

        if (this.props.isWrongID) {
            return <Redirect to='/not-found' />
        }

        return (
            <Fragment>
                <LogOut />
                { answered 
                    ? 
                        <div id="answered-question" className="card w-75 m-auto"> 
                            <div className="card-body card-body-ananswered border mx-2 my-2 pb-4">
                                <p className="card-text lead text-left border-bottom pb-2">{user.name} asked</p>
                                <div className="avatar-div-ananswered float-left w-50 border-right">
                                    <img src={user.avatarURL} className="avatar-ananswered img-fluid img-circle mr-2" alt="avatar" />
                                </div>
                                <div className="float-right w-50">
                                    <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                                    { selectedOption === 'optionOne' ? 
                                        <div className="mb-4 ml-4 mt-4 border-bottom" style={selectedOptionStyles}>
                                            <p>{question.optionOne.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${percOne}%`, backgroundColor: '#dc3545'}} role="progressbar" aria-valuenow={percOne} aria-valuemin="0" aria-valuemax="100">{percOne}%</div>
                                            </div>
                                            <p className="mt-1 text-center" style={{ fontSize: '14px', marginBottom: '0' }}>{optionOneVotes} out of {total} votes</p> 
                                        </div>
                                        :
                                        <div className="mb-4 ml-4 mt-4 border-bottom">
                                            <p>{question.optionOne.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar" style={{ width: `${percOne}%`, backgroundColor: '#dc3545'}} role="progressbar" aria-valuenow={percOne} aria-valuemin="0" aria-valuemax="100">{percOne}%</div>
                                            </div>
                                            <p className="mt-1 text-center" style={{ fontSize: '14px' }}>{optionOneVotes} out of {total} votes</p> 
                                        </div>
                                    }
                                    { selectedOption === 'optionTwo' ? 
                                        <div className="ml-4" style={selectedOptionStyles}>
                                            <p>{question.optionTwo.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar"  style={{ width: `${percTwo}%`, backgroundColor: '#dc3545'}} role="progressbar" aria-valuenow={percTwo} aria-valuemin="0" aria-valuemax="100">{percTwo}%</div>
                                            </div>
                                            <p className="mt-1 text-center" style={{ fontSize: '14px', marginBottom: '0'}}>{optionTwoVotes} out of {total} votes</p>
                                        </div> 
                                        :
                                        <div className="ml-4">
                                            <p>{question.optionTwo.text}</p>
                                            <div className="progress">
                                                <div className="progress-bar"  style={{ width: `${percTwo}%`, backgroundColor: '#dc3545'}} role="progressbar" aria-valuenow={percTwo} aria-valuemin="0" aria-valuemax="100">{percTwo}%</div>
                                            </div>
                                            <p className="mt-1 text-center" style={{ fontSize: '14px'}}>{optionTwoVotes} out of {total} votes</p>
                                        </div> 
                                    }                                                         
                                </div>
                            </div>
                        </div>
                    : 
                        <div id="unanswered-question-detail" className="card w-75 m-auto">  
                            <div className="card-body border mx-2 my-2 pb-4">
                                <p className="card-text lead text-left border-bottom pb-2">{user.name} asks:</p>
                                <div className="avatar-div float-left w-50 border-right">
                                    <img src={user.avatarURL} className="avatar-question img-fluid img-circle mr-2" alt="" />
                                </div>
                                <form onSubmit={this.submitOption} id="unanswered-question-form" className="float-right w-50">
                                    <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                                    <div className="form-check ml-4">
                                        <input onChange={this.handleOption} checked={this.state.selectedOption === 'optionOne'} className="form-check-input" type="radio" name="optionOne" id="optionOne" value="optionOne" />
                                        <label className="form-check-label text-left" htmlFor="optionOne">{question.optionOne.text}</label>
                                    </div>
                                    <div className="form-check ml-4">
                                        <input onChange={this.handleOption} checked={this.state.selectedOption === 'optionTwo'} className="form-check-input" type="radio" name="optionTwo" id="optionTwo" value="optionTwo" />
                                        <label className="form-check-label text-left" htmlFor="optionTwo">{question.optionTwo.text}</label>
                                    </div>
                                    <button className="btn-question btn btn-primary mt-4 ml-4" style={{ width: '93%'}}>Submit</button>
                                </form>
                            </div>
                        </div>
                }
                
            </Fragment>
        )
    }
    
}

function financial(x) {
    return Number.parseFloat(x).toFixed(0);
}
    
function mapStateToProps ( { authedUser, questions, users }, props ) {
    
    const path = props.location.pathname.split('/')
    const questionID = path[2]
    const question = questions[questionID]  
    const user = users[question.author]

    const isOptionOneAnswered = question.optionOne.votes.includes(authedUser)
    const isOptionTwoAnswered = question.optionTwo.votes.includes(authedUser)
    const answered = isOptionOneAnswered || isOptionTwoAnswered

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const total = optionOneVotes + optionTwoVotes;

    const percOne = financial((question.optionOne.votes.length / total) * 100);
    const percTwo = financial((question.optionTwo.votes.length / total) * 100);
    
    //const allQuestionsIds = Object.keys(questions)

    if (question === undefined) {
        return {
            isWrongID: true
        }
    }

    return {
        //allQuestionsIds,
        question, 
        user,
        answered,
        optionOneVotes,
        optionTwoVotes,
        total,
        percOne,
        percTwo,
    }
}

function mapDispatchToProps (dispatch, props) {
    const path = props.location.pathname.split('/')
    const questionID = path[2]
    
    return {
        saveQuestionAnswer : (answer) => {
            dispatch(handleSaveQuestionAnswer(questionID, answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)




