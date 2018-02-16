import { Action } from 'redux';
import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IUserAuthenticationObject } from '../Users/usersInterfaces';
    
export interface IRegisterProps extends IComponentProps {
    registering: boolean;
}

export interface IRegisterState {
    registerUser: {
        email: string,
        password: string,
        confirmPassword: string,
        displayName: string,
    };
    loading: boolean;
    error: Error;
}

export interface IUserRegistrationObject extends IUserAuthenticationObject {
    updateProfile: Function;
}

export interface IRegisterUserObject extends IUserAuthenticationObject {
    displayName: string;
    confirmPassword: string;
}

export interface IRegisterAction extends Action {
    loading: boolean;
}
