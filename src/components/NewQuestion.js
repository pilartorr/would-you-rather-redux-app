import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class NewQuestion extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <p className="text-center">New Question</p>
            </Fragment>
        )
    }
}

export default NewQuestion