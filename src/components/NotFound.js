import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <p className="text-center">Oops, page not found!</p>
                <p className="text-center">404 Error</p>
            </Fragment>
        )
    }
}

export default NotFound