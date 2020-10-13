import React from 'react';
import { Link  } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger,
} from './../../components';

const MainHeader = () => {

    return (
        <React.Fragment>
            { /*    First Navbar    */}
            <Navbar
                style={{ background: '#19388A' }}
                expand
                fluid
                className="pt-3 pb-lg-1"
            >
            <Nav navbar>
                <NavItem>
                    <Link
                        to="/"
                    >
                        <div className="d-flex align-items-center">
                            <h3 className="text-white"><b>atlan IPL</b></h3>
                        </div>
                    </Link>                
                </NavItem>
            </Nav>
            </Navbar>
        </React.Fragment>
    );
}

export const DefaultNavbar = MainHeader;