import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';

export interface IRegisterProps extends IRegisterReducer, IComponentProps { }

export interface IRegisterState {
    registerUser: {
        email: string,
        password: string,
        confirmPassword: string,
        displayName: string,
    };
}

export interface IUserRegistrationObject extends IUserAuthenticationObject {
    updateProfile: Function;
}

export interface IRegisterUserObject extends IUserAuthenticationObject {
    displayName: string;
    confirmPassword: string;
}

export interface IRegisterReducer {
    registering: boolean;
}
