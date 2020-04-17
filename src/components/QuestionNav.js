import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class QuestionNav extends Component {
    render() {
        return (
            <Fragment>
                <div className="card-header">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink to='/' exact className="nav-link">
                                Unanswered
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/ananswered' className="nav-link">
                                Ananswered
                            </NavLink>
                        </li>
                    </ul>
                </div>            
            </Fragment>
        )
    }
}

export default QuestionNav