import React from 'react';
import { Badge, Card, CardBody } from 'reactstrap';
import Lottie from 'react-lottie';

import './profile.styles.scss';
import vipulAnimation from '../../lottie/3018-man-and-chat.json';

const Profile = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: vipulAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Card className="neumorphic-card">
            <CardBody className="profile-card">
                <Lottie width="150" height="150" options={defaultOptions} />
                <div className="personality-strip">
                    <Badge className="personality-strip__badge">Geek</Badge>
                    <Badge className="personality-strip__badge">Sarcastic</Badge>
                    <Badge className="personality-strip__badge">Memes</Badge>
                </div>
                <ul>
                    <li>Favorite Player: MS Dhoni ❤️</li>
                    <li>Favorite Team: <span className="text-yellow">Chennai Super Kings</span></li>
                    <li>Favorite Umpire: <i>Kumar Dharamsena</i></li>
                    <li>Love: Batting 🏏</li>
                    <li>Hate: D/L Method</li>
                </ul>            
            </CardBody>
        </Card>
    );
};

export default Profile;