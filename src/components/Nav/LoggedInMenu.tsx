import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBox from '@material-ui/icons/AccountBox';
import Add from '@material-ui/icons/Add';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Pageview from '@material-ui/icons/Pageview';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';

/* TODO: Put this stuff in! Change all nav options!
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
            <Tooltip id="tooltip-icon" title="Add a transaction" placement="top">
                <Link to={myHouseRoutes.Households}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Add color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Add" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="View previous transactions" placement="top">
                <Link to={myHouseRoutes.Households}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Pageview color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="View" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Tooltip id="tooltip-icon" title="Your balance, also the home page" placement="top">
                <Link to={myHouseRoutes.Households}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <AccountBox color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Balance" />
                    </ListItem>
                </Link>
            </Tooltip>
            <Divider />
            <Tooltip id="tooltip-icon" title="An overview of all debts in the household" placement="top">
                <Link to={myHouseRoutes.Households}
                    style={{ textDecoration: 'none' }}
                >
                    <ListItem button>
                        <ListItemIcon >
                            <AccountBalance color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Summary" />
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
