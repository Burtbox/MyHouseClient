import { IErrorMessageReducer } from '../components/ErrorMessage/errorMessageInterfaces';
import { IHouseholdsReducer } from '../components/Households/householdsInterfaces';
import { ILinksReducer } from '../components/Links/linksInterfaces';
import { ILoadingReducer } from '../components/Loading/loadingInterfaces';
import { ILoginReducer } from '../components/Login/loginInterfaces';
import { ILogoutReducer } from '../components/Logout/logoutInterfaces';
import { IMyAccountReducer } from '../components/MyAccount/myAccountInterfaces';
import { IRegisterReducer } from '../components/Register/registerInterfaces';
import { IUsersReducer } from '../components/Users/usersInterfaces';

export interface IStore {
    usersReducer: IUsersReducer;
    errorMessageReducer: IErrorMessageReducer;
    loginReducer: ILoginReducer;
    registerReducer: IRegisterReducer;
    myAccountReducer: IMyAccountReducer;
    householdsReducer: IHouseholdsReducer;
    linksReducer: ILinksReducer;
    loadingReducer: ILoadingReducer;
    logoutReducer: ILogoutReducer;
}
