
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='my-4'>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <NavLink to='/' exact className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/leaderboard' className="nav-link">
                        Leader Board
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/add' className="nav-link">
                        New Question
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}