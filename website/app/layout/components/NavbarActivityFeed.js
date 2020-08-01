import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import PropTypes from 'prop-types';

import {
    UncontrolledDropdown,
    DropdownToggle,
    IconWithBadge,
    Badge,
    ExtendedDropdown,
    ListGroup,
    ListGroupItem,
    Media,
    Collapse
} from './../../components';

/*eslint-disable */
const activityFeedIcons = [
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-success"></i>
        <i className="fa fa-check fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-danger"></i>
        <i className="fa fa-close fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-warning"></i>
        <i className="fa fa-exclamation fa-stack-1x fa-fw text-white"></i>
    </span>,
    <span className="fa-stack fa-lg fa-fw d-flex mr-3">
        <i className="fa fa-circle fa-fw fa-stack-2x text-primary"></i>
        <i className="fa fa-info fa-stack-1x fa-fw text-white"></i>
    </span>
];
/*eslint-enable */

const NavbarActivityFeed = (props) => {
    const [collapseState, setCollapseState] = useState(false);

    const handleClick = () => {
        setCollapseState(!collapseState);
    };

    return (
        <UncontrolledDropdown nav inNavbar { ...props }>
            <DropdownToggle nav onClick={handleClick}>
                <IconWithBadge
                    badge={ <Badge pill color="danger">4</Badge> }
                >
                    <h3 className="text-white"><i className="fa fa-bell-o fa-fw" /></h3>
                </IconWithBadge>
            </DropdownToggle>
            <ExtendedDropdown right>
                <ExtendedDropdown.Section className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Activity Feed</h6>
                    <Badge pill>4</Badge>
                </ExtendedDropdown.Section>
    
                <Collapse isOpen={collapseState} list>
                    <ListGroup>
                        <ListGroupItem action>
                            <Media>
                                <Media left>
                                    { activityFeedIcons[0] }
                                </Media>
                                <Media body>
                                    <p>Godown 1 sensors are functioning nominally. That's great!</p>
                                    <div className="small mt-2">
                                        { faker.date.past().toString() }
                                    </div>
                                </Media>
                            </Media>
                        </ListGroupItem>
                        <ListGroupItem action>
                            <Media>
                                <Media left>
                                    { activityFeedIcons[1] }
                                </Media>
                                <Media body>
                                    <p>Godown 2 Temperature sensor is not giving readings. Please examine.</p>
                                    <div className="small mt-2">
                                        { faker.date.past().toString() }
                                    </div>
                                </Media>
                            </Media>
                        </ListGroupItem>
                        <ListGroupItem action>
                            <Media>
                                <Media left>
                                    { activityFeedIcons[2] }
                                </Media>
                                <Media body>
                                    <p>Humidity in Godown 3 seems to be higher than nominal. Give a check.</p>
                                    <div className="small mt-2">
                                        { faker.date.past().toString() }
                                    </div>
                                </Media>
                            </Media>
                        </ListGroupItem>
                    </ListGroup>
                </Collapse>
    
                <ExtendedDropdown.Section className="text-center" tag={ Link} to="#">
                    See All Notifications
                    <i className="fa fa-angle-right fa-fw ml-2" />
                </ExtendedDropdown.Section>
            </ExtendedDropdown>
        </UncontrolledDropdown>
    );
}
NavbarActivityFeed.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export { NavbarActivityFeed };