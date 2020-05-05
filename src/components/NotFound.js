import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {
    render() {
        if (!this.props.error) {
            return (
                <Fragment>
                    <Redirect to='/not-found' />
                    <p className="text-center">Oops, page not found!</p>
                    <p className="text-center">404 Error</p>
                </Fragment>
            )
        }

    }
}

export default NotFound