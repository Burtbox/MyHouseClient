import { IComponentProps, IConnectedComponentProps } from '../../interfaces/componentInterfaces';
import { IFormStyles } from '../../styles/styles';
import { IHousehold } from '../Households/householdsInterfaces';
import { ILoadingReducer } from '../Loading/loadingInterfaces';
import { ILoggedInUser } from '../Users/usersInterfaces';

export interface IAddHouseholdProps extends IComponentProps, IConnectedComponentProps, IAddHouseholdStore, IFormStyles { }

export interface IAddHouseholdStore extends IAddHouseholdReducer, ILoadingReducer, ILoggedInUser { }

export interface IAddHouseholdReducer {
    household: IHousehold;
}

export interface IAddHouseholdState {
    household: IAddHouseholdDetails;
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
