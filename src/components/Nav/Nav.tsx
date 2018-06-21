import AppBar from '@material-ui/core/AppBar/AppBar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../interfaces/storeInterface';
import LoggedInMenu from './LoggedInMenu';
import LoggedInNavButtons from './LoggedInNavButtons';
import LoggedOutMenu from './LoggedOutMenu';
import { INavProps, INavState, INavStore } from './navInterfaces';

// TODO: Add back in user chip, but with different function?
// TODO: Convert to fixed sidebar that always shows? or maybe just an inline one
export class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);

        this.state = {
            openSidebar: true,
        };
    }

    toggleDrawer = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ openSidebar: !this.state.openSidebar });
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="secondary" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon color="secondary" />
                        </IconButton>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Typography variant="headline" color="secondary">
                                My House
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
                                My House
                            </Typography>
                        </Link>
                    </div>
                    <Divider />
                    {this.props.isLoggedIn ?  <LoggedInMenu {...this.props} /> : <LoggedOutMenu />}
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

export default connect(mapStateToProps)(Nav);
