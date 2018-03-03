import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import UserChip from '../UserChip';
import styles from './navStyles';
import { INavProps, INavStore } from './navInterfaces';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import { checkUserLoginToken, handleLogOut } from '../../helpers/loginHelper';

export class Nav extends React.Component<INavProps> {
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
                <UserChip user={this.props.loggedInUser} />
              </MenuItem>
            </Link>

            <Link style={styles.menuItems} to={myHouseRoutes.Households}>
              <MenuItem> Households </MenuItem>
            </Link>

            <a style={styles.menuItems} onClick={() => handleLogOut()}>
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
const mapStateToProps = (store: IStore) => {
    const token: string = store.usersReducer.isLoggedIn && store.usersReducer.loggedInUser ? store.usersReducer.loggedInUser.token : null;
    const props: INavStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        isLoggedIn: checkUserLoginToken(token),
    };
    return props;
};

export default connect(mapStateToProps)(Nav);
