import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class LogOut extends Component {
    handleLogout = () => {
        const { setAuthedUser, history } = this.props
        setAuthedUser(null)
        history.push('/')
    }
    render() {
        const { user } = this.props
        return (
            <Fragment>
                <div className="log-out-container float-right">
                    <img src={user.avatarURL} className="avatar img-circle mr-2" alt="avatar" />
                    <p className="user-name mr-2">{user.name}</p>
                    <button className="btn btn-light" onClick={this.handleLogout}>Log Out</button>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ( { users, authedUser } ) {
    const user = users[authedUser]
    return {
        user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogOut))