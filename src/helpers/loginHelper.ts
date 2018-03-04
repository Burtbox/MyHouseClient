
import { logout } from '../components/Users/usersActions';
import { myHouseRoutes } from '../enums/routesEnum';
import history from '../main/history';
import store from '../main/store';

export function handleLogOut() {
    store.dispatch(logout())
        .then(() => history.push(myHouseRoutes.Login))
        .catch((error: Error) => { });
}
