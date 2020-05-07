import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'


class NotFound extends Component {
    render() {     
        return (
            <Fragment>
                <Redirect to='not-found' />
                <div className="not-found container m-auto w-50">
                    <div className="mt-4">
                        <div className="alert alert-danger" role="alert" style={{ marginTop: '50%'}}>
                            <h4 className="alert-heading">Page not found!</h4>
                            <p>404 Error: There's not much left here for you.</p>
                            <hr></hr>
                            <p className="mb-0 text-right">
                                <Link to="/"  style={{ color: '#721c24'}}>
                                    <ion-icon name="chevron-back-outline" style={{ position: 'relative', top: '3px' }}></ion-icon>
                                    Back to our site
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )       
    }
}

export default NotFound
