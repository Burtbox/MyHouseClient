import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';

export interface IRegisterProps extends IRegisterReducer, IComponentProps, IFormStyles { }

export interface IRegisterState {
    registerUser: {
        email: string,
        password: string,
        confirmPassword: string,
        displayName: string,
    };
}

export interface IRegisterUserObject extends IUserAuthenticationObject {
    displayName: string;
    confirmPassword: string;
}

export interface IRegisterReducer {
    registering: boolean;
}
