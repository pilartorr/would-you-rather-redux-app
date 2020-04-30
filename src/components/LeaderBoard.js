import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
    render() {
        const { usersList } = this.props
        console.log(usersList)
        return (
            <Fragment>
                <LogOut />
                <table className="table table-hover">
                    <thead className="text-center">
                        <tr>
                        <th scope="col">Profile</th>
                            <th scope="col">User</th>
                            <th scope="col">Answered questions</th>
                            <th scope="col">Created questions</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((user, index) => (
                            <tr className="text-center" key={index}>
                                <td><img src={user.avatar} className="avatar-leaderboard img-circle" alt="avatar" /></td>   
                                <td className="align-middle">{user.user}</td>                       
                                <td className="align-middle">{user.questionsAnswered}</td>
                                <td className="align-middle">{user.questionsCreated}</td>
                                <td className="align-middle">{user.total}</td>
                            </tr>
                        ))}                       
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

function mapStateToProps ( { users } ) {
    const usersList = Object.keys(users).map((user) => {
        return {
          user,
          avatar: users[user].avatarURL,
          questionsCreated: Object.keys(users[user].questions).length,
          questionsAnswered: Object.keys(users[user].answers).length,
          total: Object.keys(users[user].questions).length + Object.keys(users[user].answers).length
        }  
    }).sort((a, b) => (b.questionsCreated + b.questionsAnswered) - (a.questionsCreated + a.questionsAnswered))
    return {
        usersList
    }
}

export default connect(mapStateToProps)(LeaderBoard)
