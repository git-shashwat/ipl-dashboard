import React from 'react';
import { Link  } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger,
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarUser } from './NavbarUser';

export const DefaultNavbar = () => (
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
            </React.Fragment>
);
