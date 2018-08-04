import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';

export interface ILoginState {
    user: IUserAuthenticationObject;
}

export interface ILoginProps extends IComponentProps, ILoginReducer, IFormStyles {
    navOpen: boolean;
}

export interface ILoginStore extends IConnectedComponentProps, ILoginReducer { }

export interface ILoginReducer {
    loggingIn: boolean;
}
