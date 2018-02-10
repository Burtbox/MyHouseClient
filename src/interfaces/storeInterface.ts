import { INavProps } from '../components/Nav/interfaces';
import { IErrorMessageProps } from '../components/ErrorMessage/interfaces';
import { ILoginProps } from '../components/Login/interfaces';
import { IRegisterProps } from '../components/Register/interfaces';
import { IMyAccountProps } from '../components/MyAccount/interfaces';
import { IHouseholdProps } from '../components/Households/householdsInterfaces';

export interface IStore {
    navReducer: INavProps;
    errorMessageReducer: IErrorMessageProps;
    loginReducer: ILoginProps;
    registerReducer: IRegisterProps;
    myAccountReducer: IMyAccountProps;
    householdsReducer: IHouseholdProps;
}
