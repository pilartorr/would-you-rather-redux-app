import React from 'react'
import { NavLink } from 'react-router-dom'

export default function QuestionsNav () {
    return (
        <div className="home-navigator card-header">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink to='/' exact className="nav-link">
                        Unanswered
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/answered' className="nav-link">
                        Answered
                    </NavLink>
                </li>
            </ul>
        </div>           
    )   
}
