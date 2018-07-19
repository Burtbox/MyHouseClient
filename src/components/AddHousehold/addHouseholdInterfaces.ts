import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { ILoggedInUser, IUserDetails } from '../Users/usersInterfaces';

export interface IAddHouseholdProps extends IComponentProps, IConnectedComponentProps, IAddHouseholdStore, IFormStyles {
    householdAdded: boolean;
}

export interface IAddHouseholdStore extends ILoadingReducer, ILoggedInUser { }

export interface IAddHouseholdState {
    household: IAddHouseholdDetails;
    addingHousehold: boolean;
    householdAdded: boolean;
}

export interface IAddHouseholdDetails {
    enteredBy: string;
    name: string;
    creatorDisplayName: string;
}

export interface IAddHouseholdRequest {
    token: string;
    household: IAddHouseholdDetails;
}

export interface IGetHouseholdsRequest  extends IUserDetails {
    includeUnaccpeted?: boolean;
}
