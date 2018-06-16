import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { myHouseRoutes } from '../../enums/routesEnum';
import { IStore } from '../../interfaces/storeInterface';
import UserChip from '../UserChip';
import { INavProps, INavStore } from './navInterfaces';
import styles from './navStyles';
const LoggedOutMenuOptions: React.StatelessComponent = () => {
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
};

const LoggedInMenuOptions: React.StatelessComponent<INavProps> = (props) => {
    return (
      <div>
        <Link style={styles.menuItems} to={myHouseRoutes.MyAccount}>
          <MenuItem>
            <UserChip user={props.loggedInUser} />
          </MenuItem>
        </Link>

        <Link style={styles.menuItems} to={myHouseRoutes.Households}>
          <MenuItem> Households </MenuItem>
        </Link>

        <Link style={styles.menuItems} to={myHouseRoutes.Logout}>
          <MenuItem>Logout</MenuItem>
        </Link>
      </div>
    );
};

const LoggedInNavItems: React.StatelessComponent = () => {
    return (
      <ToolbarGroup>
      </ToolbarGroup>
    );
};

const LoggedOutNavItems: React.StatelessComponent = () => {
    return null;
};

export const Nav: React.StatelessComponent<INavProps> = (props) => {
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
          {props.isLoggedIn
            ? <LoggedInNavItems />
            : <LoggedOutNavItems />}

          <IconMenu
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            iconButtonElement={
              <IconButton tooltip="Menu">
                <Menu />
              </IconButton>
            }
          >
            {props.isLoggedIn
              ? <LoggedInMenuOptions {...props} /> 
              : <LoggedOutMenuOptions />}
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
};

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: INavStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        isLoggedIn: store.usersReducer.isLoggedIn,
    };
    return props;
};

export default connect(mapStateToProps)(Nav);
