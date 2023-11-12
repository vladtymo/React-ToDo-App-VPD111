import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="users">Users</Link>
                </li>
                <li>
                    <Link to="counter">Counter</Link>
                </li>
                <li>
                    <Link to="test">Test</Link>
                </li>
            </ul>
        </nav>
    )
}