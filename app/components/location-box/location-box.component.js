import React from 'react';

import './location-box.styles.scss';

const LocationBox = ({ location }) => {
    return (
        <div>
            <h6 className="text-secondary">{location.split(',')[0]}, {location.split(',')[1]}</h6>
        </div>
    );
};

export default LocationBox;