import { IStore } from '../src/interfaces/storeInterface';
import { IUsersProps } from '../src/components/Users/usersInterfaces';
import { IErrorMessageProps } from '../src/components/ErrorMessage/errorMessageInterfaces';
import { ILoginProps } from '../src/components/Login/loginInterfaces';
import { IRegisterProps } from '../src/components/Register/interfaces';
import { IMyAccountProps } from '../src/components/MyAccount/interfaces';
import { IHouseholdProps } from '../src/components/Households/householdsInterfaces';
import { Dispatch } from 'react-redux';

export default class Store<T> implements IStore {
    usersReducer: IUsersProps;
    errorMessageReducer: IErrorMessageProps;
    loginReducer: ILoginProps;
    registerReducer: IRegisterProps;
    myAccountReducer: IMyAccountProps;
    householdsReducer: IHouseholdProps;
    dispatch: Dispatch<T>;
}
