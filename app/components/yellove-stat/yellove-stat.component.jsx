import React from 'react';
import Typewriter from 'typewriter-effect';
import { BiStats } from 'react-icons/bi';

import './yellove-stat.styles.scss';

const YelloveStat = () => {
    return (
        <div className="d-flex">
            <div className="d-flex flex-column justify-content-center">
                <div className="stat-logo">
                    <h1><span className="stat-logo__icon"><BiStats /></span></h1>
                </div>            
                <h1 className="stat-text">
                    <Typewriter
                        options={{
                            strings: ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae qui ut official!', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae qui ut official!'],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </h1>               
            </div>     
        </div>
    );
};

export default YelloveStat;