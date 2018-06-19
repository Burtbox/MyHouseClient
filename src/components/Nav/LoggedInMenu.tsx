import { Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import ExitToApp from '@material-ui/icons/ExitToApp';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import Storage from '@material-ui/icons/Storage';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';

/* TODO: Put this stuff in
{
                        this.props.loading && !this.props.householdsArray ? <Loading /> :
                            this.props.householdsArray && this.props.householdsArray.length === 1 ?
                                <SingleHouseholdMenu {... this.props} /> :
                                this.props.householdsArray && this.props.householdsArray.length > 1 ?
                                    <MultiHouseholdMenu {...this.props} />
                                    : <Loading />
                    }
*/

const LoggedInMenu: React.StatelessComponent = () => {
    return (
        <List>
            <Tooltip id="tooltip-icon" title="Updates from myHouse" placement="top">
                <Link to={myHouseRoutes.NewsFeed}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <SpeakerNotes color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="News Feed" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="View your households" placement="top">
                <Link to={myHouseRoutes.Households}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Storage color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Households" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Divider />
            <Tooltip id="tooltip-icon" title="See you again soon" placement="top">
                <Link to={myHouseRoutes.Logout}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <ExitToApp color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </Link>
            </Tooltip>
        </List>
    );
};

export default LoggedInMenu;
