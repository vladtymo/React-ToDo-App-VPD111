import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='Layout'>
            <Header />
            <hr />

            {/* body content */}
            <Outlet />

            {/* Footer */}
        </div>
    )
}