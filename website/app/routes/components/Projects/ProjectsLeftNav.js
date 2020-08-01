import React from 'react';
import faker from 'faker/locale/en_US';

import { 
    InputGroup,
    Button,
    Input,
    InputGroupAddon,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Media,
    Avatar
} from './../../../components';
import { randomAvatar } from './../../../utilities';

const ProjectsLeftNav = () => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3">
                People
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <Media>
                            <Media left middle className="mr-3 align-self-center">
                                <Avatar.Image
                                    size="md"
                                    src={ randomAvatar() }
                                />
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.state() }, { faker.address.stateAbbr() }
                                </span>
                            </Media>
                        </Media>
                        <i className="fa fa-fw fa-circle text-success ml-auto align-self-center ml-2"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <Media>
                            <Media left middle className="mr-3 align-self-center">
                                <Avatar.Image
                                    size="md"
                                    src={ randomAvatar() }
                                />
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.state() }, { faker.address.stateAbbr() }
                                </span>
                            </Media>
                        </Media>
                        <i className="fa fa-fw fa-circle text-warning ml-auto align-self-center ml-2"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <Media>
                            <Media left middle className="mr-3 align-self-center">
                                <Avatar.Image
                                    size="md"
                                    src={ randomAvatar() }
                                />
                            </Media>
                            <Media body>
                                <div className="mt-0">
                                    { faker.name.firstName() } { faker.name.lastName() }
                                </div>
                                <span className="small">
                                    { faker.address.state() }, { faker.address.stateAbbr() }
                                </span>
                            </Media>
                        </Media>
                        <i className="fa fa-fw fa-circle text-danger ml-auto align-self-center ml-2"></i>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-plus mr-2"></i>
                        Add New People
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)

export { ProjectsLeftNav };
