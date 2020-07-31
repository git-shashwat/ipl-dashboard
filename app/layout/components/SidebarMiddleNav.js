//FIXME yeh sidebar ka main content hai
import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
            to="/dashboard"
        />
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-microchip"></i>}
            title="Sensors Monitor"
            to="/crop-monitor"
        />
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-stethoscope"></i>}
            title="Crop Health Monitor"
            to="/dashboards/analytics"
        />
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-money"></i>}
            title="Crop Price Monitor"
            to="/dashboards/financial"
        />
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-tasks"></i>}
            title="Activity Manager"
            to="/dashboards/projects"
        />
        <SidebarMenu.Item 
            icon={<i className="fa fa-fw fa-leaf"></i>}
            title="Crop Profile"
            to="/crop-profile"
        />
    </SidebarMenu >
);
