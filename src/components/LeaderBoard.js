import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'

class LeaderBoard extends Component {
    render() {
        return (
            <Fragment>
                <LogOut />
                <table className="table table-hover">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Answered questions</th>
                            <th scope="col">Created questions</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td>user.name</td>                       
                            <td>user.answers</td>
                            <td>user.questions</td>
                            <td>total</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default LeaderBoard