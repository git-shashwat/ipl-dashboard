/* eslint-disable react/prop-types */
import React from 'react';
import { compose } from 'redux';
import {
    Row,
    Col,
} from 'reactstrap';
import { setupPage } from '../../../components/Layout/setupPage';

import "./homepage.styles.scss";
import Profile from '../../../components/profile/profile.component';
import Yellove from '../../../components/yellove/yellove.component.jsx';
import GenDash from '../../../components/gendash/gendash.component.jsx';
import Footer from '../../../components/footer/footer.component.jsx';

const HomePage = () => {

    return (
        <div>
            <div className="main-container">
                <Row>
                    <Col lg={ 3 } md={ 4 } className="order-md-2">                
                        <div className="mb-3">
                            <div className="hr-text hr-text-left mt-2 mb-1">
                                <h4 className="text-white"><b>Your Interests 🚀</b></h4>
                            </div>
                            <Profile />                
                        </div>
                    </Col>            
                    <Col lg={ 9 } md={8} className="order-md-1">
                        <div className="hr-text hr-text-left mt-2 mb-1">
                            <h4 className="text-white"><b>We miss you, Vipul. Here&#39;s why you should come back...</b></h4>
                        </div>
                        <Yellove />
                    </Col>
                </Row>
                <GenDash />        
            </div>
            <Footer />
        </div>
    )
};

export default compose(
    setupPage({
        pageTitle: 'Dashboard'
    })
)(HomePage);