import { WithStyles } from '@material-ui/core/styles/withStyles';
import { Action, Dispatch } from 'redux';
import { IHouseholdsReducer } from '../Households/householdsInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { IUser } from '../Users/usersInterfaces';
import navStyles from './navStyles';

export interface INavProps extends INavStore, WithStyles<typeof navStyles> {
    dispatch: Dispatch<Action>;
}

export interface INavStore extends ILoadingReducer, IHouseholdsReducer {
    loggedInUser: IUser;
    isLoggedIn: boolean;
}

export interface INavState {
    openSidebar: boolean;
}

export interface IHouseholdMenuState {
    houseMoneyMenuOpen: boolean;
    houseFoodMenuOpen: boolean;
}
