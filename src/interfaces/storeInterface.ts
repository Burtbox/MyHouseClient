import { IErrorMessageReducer } from '../components/ErrorMessage/errorMessageInterfaces';
import { IHouseholdsReducer } from '../components/Households/householdsInterfaces';
import { ILoadingReducer } from '../components/Loading/loadingInterfaces';
import { ILoginReducer } from '../components/Login/loginInterfaces';
import { ILogoutReducer } from '../components/Logout/logoutInterfaces';
import { IMyAccountReducer } from '../components/MyAccount/myAccountInterfaces';
import { INewsFeedReducer } from '../components/NewsFeed/newsFeedInterfaces';
import { IRegisterReducer } from '../components/Register/registerInterfaces';
import { IUsersReducer } from '../components/Users/usersInterfaces';

export interface IStore {
    usersReducer: IUsersReducer;
    errorMessageReducer: IErrorMessageReducer;
    loginReducer: ILoginReducer;
    registerReducer: IRegisterReducer;
    myAccountReducer: IMyAccountReducer;
    householdsReducer: IHouseholdsReducer;
    newsFeedReducer: INewsFeedReducer;
    loadingReducer: ILoadingReducer;
    logoutReducer: ILogoutReducer;
}
