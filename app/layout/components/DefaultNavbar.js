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
import cwcLogo from '../../images/logos/logo.png';

export const DefaultNavbar = () => (
            <React.Fragment>
                { /*    First Navbar    */}
                <Navbar
                    style={{ background: '#3BAB8B' }}
                    expand
                    fluid
                    className="pb-0 pb-lg-1"
                >
                    <Nav navbar>
                        <NavItem style={{ cursor: 'pointer' }}>
                            <SidebarTrigger/>
                        </NavItem>
                    </Nav>

                    <Link
                        to="/"
                    >
                        <img 
                            src={cwcLogo}
                            alt="cwc logo"
                            height={60}
                        />
                    </Link>

                    <Nav navbar className="ml-auto">
                        <NavbarActivityFeed />
                        <NavbarUser className="ml-2" />
                    </Nav>
                </Navbar>
            </React.Fragment>
);
