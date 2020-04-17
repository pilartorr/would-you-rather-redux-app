import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class LeaderBoard extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <p className="text-center">Leader Board</p>
            </Fragment>
        )
    }
}

export default LeaderBoard