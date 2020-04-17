import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <p className="text-center">Home</p>
            </Fragment>
        )
    }
}

export default Home