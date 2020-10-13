import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Sidebar,
    Avatar,
    AvatarAddOn,
} from './../../../components';
import avatarImg from '../../../images/avatars/46.jpg';

const SidebarTopA = () => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-4">
                <Link to="/" className="d-block">
                    <Sidebar.HideSlim>
                        <Avatar.Image
                            size="lg"
                            src={ avatarImg }
                        />
                    </Sidebar.HideSlim>
                </Link>
                <h6>Vipul</h6>
                <div className="sidebar__link--muted">
                    Not an IPL fan!
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
                    src={ avatarImg }
                    addOns={[
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon 
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)

export { SidebarTopA };
