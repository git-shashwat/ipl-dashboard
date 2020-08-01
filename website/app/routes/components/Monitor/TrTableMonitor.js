import React from 'react';
import { Badge } from 'reactstrap';

import "../../../styles/components/status-lights.scss"

const status = [
    <td className="text-right">
        <div class="mr-2 led-green"></div>
    </td>,
    <td className="text-right">
    <div class="mr-2 led-red"></div>
    </td>
];

const TrTableMonitor = () => (
    <React.Fragment>
        <tr className="text-nowrap">
            <td className="align-middle">
                <h6 className="text-inverse">[Temperature] <span><Badge color="primary" pill>Sensor 43t2</Badge></span></h6>
            </td>
            { status[0] }
        </tr>
        <tr className="text-nowrap">
            <td className="align-middle">
                <h6 className="text-inverse">[Humidity] <span><Badge color="primary" pill>Sensor 47h8</Badge></span></h6>
            </td>
            { status[1] }
        </tr>
        <tr className="text-nowrap">
            <td className="align-middle">
            <h6 className="text-inverse">[Light Intensity] <span><Badge color="primary" pill>Sensor 45l2</Badge></span></h6>
            </td>
            { status[0] }
        </tr>                
    </React.Fragment>
)

export { TrTableMonitor };
