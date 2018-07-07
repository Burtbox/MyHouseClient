import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { ILoggedInUser } from '../Users/usersInterfaces';
import { IHouseholdListSyles } from './householdsListStyles';

export interface IHousehold {
    occupantId: number;
    name: string;
}

export interface IHouseholdsProps extends IComponentProps, IConnectedComponentProps, IHouseholdsStore, IFormStyles { }

export interface IHouseholdsStore extends IHouseholdsReducer, ILoadingReducer, ILoggedInUser { }

export interface IHouseholdsReducer {
    householdsArray: IHousehold[];
    householdAdded?: boolean;
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
    occupantId: number;
}

export interface IInviteToHouseholdRequest {
    token: string;
    inviteDetails: IInviteToHousehold;
}

export interface IHouseholdsInviteStore extends IConnectedComponentProps { }
