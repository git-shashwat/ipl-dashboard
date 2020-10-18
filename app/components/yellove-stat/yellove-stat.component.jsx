/* eslint-disable react/prop-types */
import React from 'react';
import Typewriter from 'typewriter-effect';
import { BiStats } from 'react-icons/bi';

import './yellove-stat.styles.scss';
import factsGenerator from '../../utils/factsGenerator';

const YelloveStat = ({ matches }) => {
    return (
        <div className="d-flex">
            <div className="d-flex flex-column justify-content-center">
                <div className="stat-logo">
                    <h1><span className="stat-logo__icon"><BiStats /></span></h1>
                </div>            
                <h1 className="stat-text">
                    <Typewriter
                        options={{
                            strings: factsGenerator(matches),
                            autoStart: true,
                            loop: true,
                            delay: 60
                        }}
                    />
                </h1>               
            </div>     
        </div>
    );
};

export default YelloveStat;