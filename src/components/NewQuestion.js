import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class NewQuestion extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <form id="new-question-form" className="w-50 border rounded p-4 m-auto">
                    <h3 className="my-4 text-center">Would you rather...</h3>
                    <div className="form-group">
                        <label for="optionOne">question.optionOne.text.</label>
                        <input type="text" className="form-control" id="optionOne" />
                    </div>
                    <div className="form-group">
                        <label for="optionTwo">question.optionTwo.text</label>
                        <input type="text" className="form-control" id="optionTwo" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default NewQuestion