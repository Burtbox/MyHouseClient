import { RouteComponentProps } from 'react-router';
import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IOccupant } from '../Occupants/occupantsInterfaces';

export interface ILogoutProps extends IComponentProps, RouteComponentProps<string>, IOccupant, ILogoutReducer { }

export interface ILogoutState { }

export interface ILogoutDetails {
    logoutReason: LogoutReason;
}

export enum LogoutReason {
    UserTriggered = 'UserTriggered',
    Timeout = 'Timeout',
    InvalidPassthrough = 'InvalidPassthrough',
}

export interface ILogoutReducer {
    loggingOut: boolean;
}
