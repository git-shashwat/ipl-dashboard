import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Lottie from 'react-lottie'; 

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger,
} from './../../components';

import { selectSensorAlert } from '../../redux/sensors/sensors.selectors';
import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarUser } from './NavbarUser';
import cwcLogo from '../../images/logos/logo.png';
import alertAnime from '../../lottie/8750-alert.json';
import { connect } from 'react-redux';
import { pushAlertNotificationStart } from '../../redux/users/users.actions';
import { selectUsersFCMTokens } from '../../redux/users/users.selectors';

const MainHeader = ({ alert, pushAlertNotificationStart, fcmTokens }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: alertAnime,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        if (alert !== null) {
            pushAlertNotificationStart({
                data: {
                    "EME_LOC": 'Godown-1, Compartment-1',
                    "EME_CAT": alert.title === 'fire alert' ? 'FIRE' : '',
                    "category": 'FIRE_HAZ'
                },
                tokens: fcmTokens
            });
        }
    })

    return (
        <React.Fragment>
            {alert !== null && (
                <div className="bg-black d-flex align-items-center">
                    <div>
                        <Lottie options={defaultOptions} width={200} height={180} />
                    </div>
                    <div>
                        <h1 className="text-white text-uppercase">{alert.title}</h1>
                        <p className="text-white">{alert.description} {!!alert.link && <span><a className="text-warning" href="https://dgfscdhg.gov.in/national-building-code-india-fire-and-life-safety" target="_blank">mitigation strategy.</a></span>}</p>
                    </div>
                </div>
            )}
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
                    <div className="d-flex align-items-center">
                        <img 
                            src="https://i.ibb.co/0QpsZmX/Group-2.png"
                            alt="cwc logo"
                            height={60}
                        />
                        <h3 className="ml-3 text-black"><b>Brainiacs101</b></h3>
                    </div>
                </Link>

                <Nav navbar className="ml-auto">
                    <NavbarActivityFeed />
                    <NavbarUser className="ml-2" />
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}

const mapStateToProps = createStructuredSelector({
    alert: selectSensorAlert,
    fcmTokens: selectUsersFCMTokens
})

const mapDispatchToProps = dispatch => ({
    pushAlertNotificationStart: (notification) => dispatch(pushAlertNotificationStart(notification))
});

export const DefaultNavbar = connect(mapStateToProps, mapDispatchToProps)(MainHeader);