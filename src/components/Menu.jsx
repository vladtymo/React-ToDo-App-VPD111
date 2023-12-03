import React, { useContext } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import './Menu.css'
import { CounterContext } from '../contexts/counter.context';

export default function Menu() {

    const { count } = useContext(CounterContext);

    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to="users">Users</Link>
        //         </li>
        //         <li>
        //             <Link to="products">Products</Link>
        //         </li>
        //         <li>
        //             <Link to="counter">Counter</Link>
        //         </li>
        //         <li>
        //             <Link to="test">Test</Link>
        //         </li>
        //     </ul>
        // </nav>
        <Navbar>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="users">
                        Users
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="products" aria-current="page">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="counter">
                        Counter ({count})
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="about">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}