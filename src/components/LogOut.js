import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { unsetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class LogOut extends Component {
    ccomponentDidMount () {
        this.props.dispatch(unsetAuthedUser())
    }
    render() {
        const { user } = this.props
        return (
            <Fragment>
                <div className="log-out-container float-right">
                    <img src={user.avatarURL} className="avatar img-circle mr-2" alt="avatar" />
                    <p className="user-name mr-2">{user.name}</p>
                    <button className="btn btn-light">
                        <NavLink to='/logout' exact className="text-decoration-none">
                            Log Out
                        </NavLink>
                    </button>
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
export default connect(mapStateToProps)(LogOut)