import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './navActions';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import UserChip from '../UserChip';
import styles from './styles';
import { INavProps, INavState } from './interfaces';
import history from '../../main/history';
import { myHouseRoutes } from '../../enums/routesEnum';

class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);
    }

    handleLogOut = () => {
        this.props
          .dispatch(logout())
          .then(() => history.push(myHouseRoutes.Login))
          .catch((error: Error) => {});
    }

    getLoggedOutMenuOptions = () => {
        return (
          <div>
            <Link style={styles.menuItems} to={myHouseRoutes.Login}>
              <MenuItem>Sign In </MenuItem>
            </Link>

            <Link style={styles.menuItems} to={myHouseRoutes.Register}>
              <MenuItem> Sign Up</MenuItem>
            </Link>
          </div>
        );
    }

    getLoggedInMenuOptions = () => {
        return (
          <div>
            <Link style={styles.menuItems} to={myHouseRoutes.MyAccount}>
              <MenuItem>
                <UserChip
                    user={this.props.loggedInUser}
                    styles={styles.userChipItem}
                    dispatch={this.props.dispatch}
                    history={history}
                />
              </MenuItem>
            </Link>

            <Link style={styles.menuItems} to={myHouseRoutes.Households}>
              <MenuItem> Households </MenuItem>
            </Link>

            <a style={styles.menuItems} onClick={() => this.handleLogOut()}>
              <MenuItem>Logout</MenuItem>
            </a>
          </div>
        );
    }

    getLoggedInNavItems = () => {
        return (
          <ToolbarGroup>
          </ToolbarGroup>
        );
    }

    getLoggedOutNavItems = (): void => {
        return undefined;
    }

    render() {
        return (
          <Toolbar>
            <ToolbarGroup>
              <Link to={myHouseRoutes.Base}>
                <IconButton tooltip="Home">
                  <ActionHome />
                </IconButton>
              </Link>
              <ToolbarTitle text="My House" />
            </ToolbarGroup>
            <ToolbarGroup>
              {this.props.isLoggedIn
                ? this.getLoggedInNavItems()
                : this.getLoggedOutNavItems()}

              <IconMenu
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                iconButtonElement={
                  <IconButton tooltip="Menu">
                    <Menu />
                  </IconButton>
                }
              >
                {this.props.isLoggedIn
                  ? this.getLoggedInMenuOptions()
                  : this.getLoggedOutMenuOptions()}
              </IconMenu>
            </ToolbarGroup>
          </Toolbar>
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: any) => {
    return {
        isLoggedIn: store.navReducer.isLoggedIn,
        loggedInUser: store.navReducer.loggedInUser,
    };
};

export default connect(mapStateToProps)(Nav);
