import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';

export interface ILoginState {
    user: IUserAuthenticationObject;
    loading: boolean;
}

export interface ILoginProps extends IComponentProps, ILoginReducer { }

export interface ILoginStore extends IConnectedComponentProps, ILoginReducer { }

export interface ILoginReducer {
    loggingIn: boolean;
}
