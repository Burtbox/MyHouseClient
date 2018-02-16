import { IUsersProps } from '../components/Users/usersInterfaces';
import { IErrorMessageProps } from '../components/ErrorMessage/errorMessageInterfaces';
import { ILoginProps } from '../components/Login/loginInterfaces';
import { IRegisterProps } from '../components/Register/registerInterfaces';
import { IMyAccountProps } from '../components/MyAccount/interfaces';
import { IHouseholdProps } from '../components/Households/householdsInterfaces';

export interface IStore {
    usersReducer: IUsersProps;
    errorMessageReducer: IErrorMessageProps;
    loginReducer: ILoginProps;
    registerReducer: IRegisterProps;
    myAccountReducer: IMyAccountProps;
    householdsReducer: IHouseholdProps;
}
