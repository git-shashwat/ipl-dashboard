/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'reactstrap';

import './dash-card.styles.scss';

const DashCard = ({ Icon, children }) => {
    return (
        <Card className="neumorphic-card">
            <div className="d-flex">
                <div className="d-flex flex-column justify-content-center">
                    <div className="stat-logo">
                        <h1><span className="stat-logo__icon"><Icon /></span></h1>
                    </div>            
                    {children}             
                </div>     
            </div>                                
        </Card>
    );
};

export default DashCard;