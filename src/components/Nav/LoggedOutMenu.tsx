import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PersonOutline from '@material-ui/icons/PersonOutline';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';

const LoggedOutMenu: React.StatelessComponent = () => {
    return (
        <List>
            <Tooltip id="tooltip-icon" title="Sign In" placement="top">
                <Link to={myHouseRoutes.Login}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <PersonOutline color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Sign Up" placement="top">
                <Link to={myHouseRoutes.Register}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <PersonAdd color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItem>
                </Link>
            </Tooltip>
        </List>
    );
};

export default LoggedOutMenu;
