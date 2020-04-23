import React, { Component, Fragment } from 'react'
//import { withRouter } from 'react-router-dom'
//import { connect } from 'react-redux'

class QuestionDetail extends Component {
    render() {
        //const { question, user } = this.props
        return (
            <Fragment>

                <div id="unanswered-question-detail" className="card text-center w-50 m-auto">  
                    <div className="card-body border mx-2 my-2 pb-4">
                        <p className="card-text lead text-left border-bottom pb-2">user.name asks:</p>
                        <div className="avatar-div float-left w-50 border-right">
                            <img src="user.avatarURL" className="avatar-question img-circle mr-2" alt="" />
                        </div>
                        <div id="unanswered-question-form" className="float-right w-50">
                            <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="optionOne" value="optionOne" checked />
                                <label className="form-check-label" htmlFor="optionOne">question.optionOne.text</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="optionTwo" value="optionTwo" checked />
                                <label className="form-check-label" htmlFor="optionTwo">question.optionTwo.text</label>
                            </div>
                            <button className="btn-question btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                </div>

                <div id="answered-question" className="card text-center w-50 m-auto">  
                    <div className="card-body card-body-ananswered border mx-2 my-2 pb-4">
                        <p className="card-text lead text-left border-bottom pb-2">user.name asked</p>
                        <div className="avatar-div-ananswered float-left w-50 border-right">
                            <img src="user.avatarURL" className="avatar-ananswered img-circle mr-2" alt="avatar" />
                        </div>
                        <div className="float-right w-50">
                            <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                            <div className="mb-4 ml-4 border-bottom">
                                <p>question.optionOne.text</p>
                                <div className="progress">
                                    <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-1">2 out of 3 votes</p> 
                            </div>
                            <div className="ml-4">
                                <p>question.optionTwo.text</p>
                                <div className="progress">
                                    <div className="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-1">1 out of 3 votes</p>
                            </div>                         
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

{/* 
    function mapStateToProps ( {questions, users}, { id }) {
        const question = questions[id]
        const user = users[question.author]
        return {
            question, 
            user
        }
    }
*/}

//export default withRouter(connect(mapStateToProps)(QuestionDetail))

export default QuestionDetail