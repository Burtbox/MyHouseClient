import { Action } from 'redux';
import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IUserAuthenticationObject, IUserObject } from '../Users/usersInterfaces';
    
export interface ILoginReducer extends IComponentProps {
    user: IUserObject;
    loggingIn: boolean;
}

export interface ILoginState {
    user: IUserAuthenticationObject;
    error: Error;
    loading: boolean;
}

export interface ILoginAction extends Action {
    loading: boolean;
}
