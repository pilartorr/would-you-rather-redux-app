import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUserId : ''
        };
        
        this.handleChangeAuthUserId = this.handleChangeAuthUserId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAuthUserId(event) {
        this.setState({
            authUserId: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();

        const { authUserId } = this.state
        const { authenticate } = this.props

        if(authUserId) {
            authenticate(authUserId)
        }
    }
    render() {
        const { authUserId } = this.state
        const { users } = this.props

        return (
            <Fragment>
                <div className="login-container w-50 mx-auto" style={{ marginTop: '30%'}}>
                    <h3 className="my-4">Log into 'Would you rather...?'</h3>
                    <form id="login" className="input-group" onSubmit={this.handleSubmit}>
                        <select type="select" name="select" className="custom-select" id="selectUser" value={authUserId} onChange={this.handleChangeAuthUserId}>
                            <option value="">Please, select a user...</option>
                            {
                                Object.keys(users).map(user =>
                                    <option key={user} value={user}>
                                        {users[user].name}
                                    </option>)
                            }
                        </select>
                        <div className="input-group-append">
                            <input className="btn btn-primary" disabled={authUserId === ''} type="submit" value="Submit" />
                        </div>
                    </form>   
                </div>                
            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authenticate: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)