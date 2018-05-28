import { Action } from 'redux';
import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IOccupant } from '../Occupants/occupantsInterfaces';
import { RouteComponentProps } from 'react-router';

export interface ILogoutProps extends IComponentProps, RouteComponentProps<string>, IOccupant {
    loggingOut: boolean;
}

export interface ILogoutState {
    loading: boolean;
}

export interface ILogoutAction extends Action, ILogoutState { }

export interface ILogoutDetails {
    logoutReason: LogoutReason;
}

export enum LogoutReason {
    UserTriggered = 'UserTriggered',
    Timeout = 'Timeout',
    InvalidPassthrough = 'InvalidPassthrough',
}
