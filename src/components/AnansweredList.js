import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../avatar.png'

class AnansweredList extends Component {
    render() {
        return (
            <Fragment> 
                <div className="card-body border mx-2 my-2 pb-4">
                    <p className="card-text lead text-left border-bottom pb-2">User Name asks:</p>
                    <div className="avatar-div float-left w-50 border-right">
                        <img src={avatar} className="avatar-home img-circle mr-2" alt="avatar" />
                    </div>
                    <div className="float-right w-50">
                        <h5 className="card-title text-left mt-4 ml-4">Would you rather...</h5>
                        <p className="card-text text-right mr-4">option one here or...</p>
                        <Link to='/question' className="btn-question btn btn-primary mt-4">Go to Question</Link>
                    </div>
                </div>   
            </Fragment>
        )
    }
}

export default AnansweredList