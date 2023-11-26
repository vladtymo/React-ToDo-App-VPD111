import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

export default function Layout() {
    return (
        <div className='Layout'>
            <Menu />
            <Header />
            <hr />

            {/* body content */}
            <Outlet />

            {/* Footer */}
        </div>
    )
}