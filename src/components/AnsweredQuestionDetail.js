import React, { Component, Fragment } from 'react'
import avatar from '../avatar.png'

class AnsweredQuestionDetail extends Component {
    render() {
        return (
            <Fragment>
                <div id="answered-question" className="card text-center w-50 m-auto">  
                    <div className="card-body card-body-ananswered border mx-2 my-2 pb-4">
                        <p className="card-text lead text-left border-bottom pb-2">User Name asks:</p>
                        <div className="avatar-div-ananswered float-left w-50 border-right">
                            <img src={avatar} className="avatar-ananswered img-circle mr-2" alt="avatar" />
                        </div>
                        <div className="float-right w-50">
                            <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                            <div className="mb-4 ml-4 border-bottom">
                                <p>write JavaScript</p>
                                <div class="progress">
                                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="mt-1">2 out of 3 votes</p> 
                            </div>
                            <div className="ml-4">
                                <p>write Swift</p>
                                <div class="progress">
                                    <div class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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

export default AnsweredQuestionDetail