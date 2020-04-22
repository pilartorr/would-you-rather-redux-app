import React, { Component, Fragment } from 'react'

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div id="login" className="">                    
                    <input type="text" placeholder="enter your username"></input>
                    <button className="btn btn-light">Login</button>
                </div>
            </Fragment>
        )
    }
}

export default Login