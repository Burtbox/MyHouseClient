import AppBar from '@material-ui/core/AppBar/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { IStore } from '../../interfaces/storeInterface';
import { HouseholdsActions } from '../Households/householdsActions';
import { IUserDetails } from '../Users/usersInterfaces';
import LoggedInMenu from './LoggedInMenu';
import LoggedInNavButtons from './LoggedInNavButtons';
import LoggedOutMenu from './LoggedOutMenu';
import { INavProps, INavState, INavStore } from './navInterfaces';
import navStyles from './navStyles';

// TODO: Add back in user chip, but with different function?
export class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);

        this.state = {
            openSidebar: true,
        };
    }

    componentDidMount() {
        const userDetails: IUserDetails = this.props.loggedInUser;
        this.props.dispatch(HouseholdsActions.getHouseholdsOfUser(userDetails));
    }

    toggleDrawer = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ openSidebar: !this.state.openSidebar });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar} >
                    <Toolbar className={classes.toolbar}>
                        <IconButton color="secondary" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon color="secondary" />
                        </IconButton>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography variant="headline" color="secondary">
                                myHouse
                            </Typography>
                        </Link>
                        {this.props.isLoggedIn ? <LoggedInNavButtons /> : <div />}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    variant="persistent"
                    open={this.state.openSidebar}
                    onClose={this.toggleDrawer}
                    onOpen={this.toggleDrawer}
                    classes={{ paper: classes.drawerPaper }}
                    anchor="left"
                >
                    <div style={{
                        minHeight: '64px',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <IconButton
                            color="secondary"
                            style={{
                                display: 'inline-flex',
                                marginLeft: '24px',
                            }}
                            aria-label="Menu"
                            onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" style={{
                            display: 'inline-flex',
                            paddingRight: '24px',
                            textDecoration: 'none',
                        }}>
                            <Typography variant="headline">
                                myHouse
                            </Typography>
                        </Link>
                    </div>
                    <Divider />
                    {this.props.isLoggedIn ? <LoggedInMenu {...this.props} /> : <LoggedOutMenu />}
                </ SwipeableDrawer>
            </ div>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    const props: INavStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        isLoggedIn: store.usersReducer.isLoggedIn,
        householdsArray: store.householdsReducer.householdsArray,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default compose(withStyles(navStyles), connect(mapStateToProps))(Nav);
