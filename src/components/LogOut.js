import React, { Component, Fragment } from 'react'
import avatar from '../avatar.png'

class LogOut extends Component {
    render() {
        return (
            <Fragment>
                <div className="log-out-container float-right">
                    <img src={avatar} className="avatar img-circle mr-2" alt="avatar" />
                    <p className="user-name mr-4">pilartorres</p>
                    <button className="btn btn-light">Log Out</button>
                </div>
            </Fragment>
        )
    }
}

export default LogOut