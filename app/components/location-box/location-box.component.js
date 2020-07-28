import React from 'react';

import './location-box.styles.scss';

const LocationBox = ({ location }) => {
    return (
        <div>
            <h5 className="text-secondary">{location}</h5>
            <hr></hr>
        </div>
    );
};

export default LocationBox;