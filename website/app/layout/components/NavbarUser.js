import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    NavItem,
    NavLink
} from './../../components';

const NavbarUser = (props) => (
    <NavItem { ...props }>
        <NavLink tag={ Link } to="/pages/login">
            <h3 className="text-white"><i className="fa fa-power-off"></i></h3>
        </NavLink>
    </NavItem>
);
NavbarUser.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarUser };
