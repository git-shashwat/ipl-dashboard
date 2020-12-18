import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem } from "./../../components";

const MainHeader = () => {
  return (
    <React.Fragment>
      {/*    First Navbar    */}
      <Navbar style={{ background: "#001F3D" }} expand fluid>
        <Nav navbar>
          <NavItem>
            <Link to="/">
              <div className="d-flex mt-2">
                <h3 className="text-white">
                  <b>IPL Dashboard</b>
                </h3>
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export const DefaultNavbar = MainHeader;
