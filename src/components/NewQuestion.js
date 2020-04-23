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
                        <label className="lead" htmlFor="optionOne">Option One</label>
                        <input type="text" className="form-control" id="optionOne" placeholder="Please, type here your option one..." />
                    </div>
                    <div className="form-group">
                        <label className="lead" htmlFor="optionTwo">Option Two</label>
                        <input type="text" className="form-control" id="optionTwo" placeholder="Please, type here your option two..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default NewQuestion