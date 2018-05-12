import { Action } from 'redux';
import { IComponentProps } from '../../interfaces/componentInterfaces';
    
export interface ILogoutProps extends IComponentProps {
    loggingOut: boolean;
}

export interface ILogoutState {
    loading: boolean;
}

export interface ILogoutAction extends Action, ILogoutState { }
