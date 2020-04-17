import React, { Component, Fragment } from 'react'
import avatar from '../avatar.png'

class UnansweredQuestion extends Component {
    render() {
        return (
            <Fragment>
                <div className="card text-center w-50 m-auto">  
                    <div className="card-body border mx-2 my-2 pb-4">
                        <p className="card-text lead text-left border-bottom pb-2">User Name asks:</p>
                        <div className="avatar-div float-left w-50 border-right">
                            <img src={avatar} className="avatar-question img-circle mr-2" alt="avatar" />
                        </div>
                        <div className="float-right w-50">
                            <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="optionOne" value="optionOne" checked />
                                <label className="form-check-label" for="optionOne">optionOne</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="optionTwo" value="optionTwo" checked />
                                <label className="form-check-label" for="optionTwo">optionTwo</label>
                            </div>
                            <button className="btn-question btn btn-primary mt-4">Submit</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UnansweredQuestion