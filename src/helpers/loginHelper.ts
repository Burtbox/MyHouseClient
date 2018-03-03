
import { logout } from '../components/Users/usersActions';
import { myHouseRoutes } from '../enums/routesEnum';
import history from '../main/history';
import store from '../main/store';

export function checkUserLoginToken(token: string): boolean {
    let isLoggedIn = false;
    if (token) {
        isLoggedIn = true; // May need to replace this check with a proper login check?
    } 
    return isLoggedIn;
}

export function handleLogOut() {
    store.dispatch(logout())
        .then(() => history.push(myHouseRoutes.Login))
        .catch((error: Error) => { });
}
