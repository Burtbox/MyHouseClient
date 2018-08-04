import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { INavReducer } from '../Nav/navInterfaces';
import { IOccupantUpdate } from '../Occupants/occupantsInterfaces';
import { ILoggedInUser } from '../Users/usersInterfaces';
import { IHouseholdListSyles } from './householdsListStyles';

export interface IHousehold extends IHouseholdAccept {
    name: string;
}

export interface IHouseholdAccept {
    inviteAccepted: boolean;
    occupantId: number;
}

export interface IHouseholdsProps extends IComponentProps, IConnectedComponentProps, IHouseholdsStore, IFormStyles { }

export interface IHouseholdsState {
    acceptingInvite: boolean;
}

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingReducer, ILoggedInUser, INavReducer { }

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
    householdAdded?: boolean;
    acceptingInvite?: boolean;
}

export interface IHouseholdsListProps extends IHouseholdsReducer, IHouseholdListSyles, IConnectedComponentProps, IComponentProps { }

export interface IHouseholdsInviteProps extends IHouseholdListSyles, IHouseholdsInviteStore, IComponentProps {
    household: IHousehold;
}

export interface IHouseholdsInviteState {
    inviteDetails: IInviteToHousehold;
    inviting: boolean;
}

export interface IInviteToHousehold {
    email: string;
    invitedByUserId: string;
    invitedByOccupantId: number;
}

export interface IInviteToHouseholdRequest {
    token: string;
    inviteDetails: IInviteToHousehold;
}

export interface IHouseholdsInviteStore extends IConnectedComponentProps { }

export interface IAcceptInviteToHouseholdRequest {
    token: string;
    acceptInviteDetails: IAcceptInviteToHousehold;
}

export interface IAcceptInviteToHousehold {
    occupantId: number;
    userId: string;
}

export interface IHouseholdsAcceptInviteProps extends IHouseholdListSyles, IHouseholdsInviteStore, IComponentProps {
    household: IHousehold;
}

export interface IHouseholdsAcceptInviteState {
    occupant: IOccupantUpdate;
    accepting: boolean;
}
