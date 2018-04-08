
import { logout } from '../components/Users/usersActions';
import store from '../main/store';

export function handleLogOut() {
    store.dispatch(logout());
}
