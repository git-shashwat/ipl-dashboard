import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    SidebarTrigger,
    ThemeConsumer
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarUser } from './NavbarUser';
import { LogoThemed } from './../../routes/components/LogoThemed/LogoThemed';

export const SidebarWithNavbarNavbar = () => (
    <ThemeConsumer>
    {
        ({ color }) => (
            <React.Fragment>
                { /*    First Navbar    */}
                <Navbar
                    light
                    expand
                    fluid
                    className="bg-white pb-0 pb-lg-2"
                >
                    <Nav navbar>
                        <NavItem>
                            <SidebarTrigger/>
                        </NavItem>
                        <NavItem className="navbar-brand d-lg-none">
                            <Link to="/">
                                <LogoThemed />
                            </Link>
                        </NavItem>
                    </Nav>

                    <h1
                        className="h5 mb-0 mr-auto ml-2 d-none d-lg-block"
                    >
                        Warehouse Management Solution
                    </h1>

                    <Nav navbar className="ml-auto">
                        <NavbarActivityFeed />
                        <NavbarUser className="ml-2" />
                    </Nav>
                </Navbar>
                { /*    Second Navbar    */}
                <Navbar
                    shadow
                    expand="lg"
                    light
                    color={ color }
                    fluid
                    className="pt-0 pt-lg-2"
                >
                    <Nav navbar pills className="ml-auto">
                        <NavItem>
                            <NavLink tag={ NavbarToggler } id="navbar-navigation-toggler" className="b-0">
                                <i className="fa fa-ellipsis-h fa-fw"></i>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
    </ThemeConsumer>
);
