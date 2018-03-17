import { IUsersProps } from '../components/Users/usersInterfaces';
import { IErrorMessageProps } from '../components/ErrorMessage/errorMessageInterfaces';
import { ILoginProps } from '../components/Login/loginInterfaces';
import { IRegisterProps } from '../components/Register/registerInterfaces';
import { IMyAccountProps } from '../components/MyAccount/myAccountInterfaces';
import { IHouseholdsProps } from '../components/Households/householdsInterfaces';
import { ILinksProps } from '../components/Links/linksInterfaces';
import { ILoadingProps } from '../components/Loading/loadingInterfaces';

export interface IStore {
    usersReducer: IUsersProps;
    errorMessageReducer: IErrorMessageProps;
    loginReducer: ILoginProps;
    registerReducer: IRegisterProps;
    myAccountReducer: IMyAccountProps;
    householdsReducer: IHouseholdsProps;
    linksReducer: ILinksProps;
    loadingReducer: ILoadingProps;
}
