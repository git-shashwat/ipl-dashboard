import React from 'react';
import Typewriter from 'typewriter-effect';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

import './yellove-trivia.styles.scss';

const YelloveTrivia = () => {
    return (
        <div className="d-flex">
            <div className="stat-logo">
                <h1><span className="stat-logo__icon"><HiOutlineSpeakerphone /></span></h1>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="stat-text">
                    This is Trivia 1
                </h1>               
            </div>     
        </div>
    );
};

export default YelloveTrivia;