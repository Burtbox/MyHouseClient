
import IconButton from '@material-ui/core/IconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import Storage from '@material-ui/icons/Storage';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';

const LoggedInNavButtons: React.StatelessComponent = () => {
    return (
        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
            <Tooltip id="tooltip-icon" title="News Feed">
                <Link to={myHouseRoutes.NewsFeed}>
                    <IconButton color="secondary">
                        <SpeakerNotes color="secondary" />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Households">
                <Link to={myHouseRoutes.Households}>
                    <IconButton color="secondary">
                        <Storage color="secondary" />
                    </IconButton>
                </Link>
            </Tooltip>
        </div>
    );
};

export default LoggedInNavButtons;
