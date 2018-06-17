
import IconButton from '@material-ui/core/IconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Add from '@material-ui/icons/Add';
import Pageview from '@material-ui/icons/Pageview';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';

const LoggedOutNavButtons: React.StatelessComponent = () => {
    return (
        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
            <Tooltip id="tooltip-icon" title="Sign In">
                <Link to={myHouseRoutes.Login}>
                    <IconButton color="secondary">
                        <Add color="secondary" />
                    </IconButton>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Sign Up">
                <Link to={myHouseRoutes.Register}>
                    <IconButton color="secondary">
                        <Pageview color="secondary" />
                    </IconButton>
                </Link>
            </Tooltip>
        </div>
    );
};

export default LoggedOutNavButtons;
