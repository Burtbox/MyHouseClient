import { IComponentProps } from '../../interfaces/componentInterfaces';
import { ILoggedInUser } from '../Users/usersInterfaces';

export interface IChangePasswordProps extends IComponentProps, ILoggedInUser { }

export interface IChangePasswordState {
    passwordUpdate: {
        userId: string,
        CURRENTPASSWORD: string,
        NEWPASSWORD: string,
        NEWPASSWORDCONFIRM: string, // ED! need to sort this out as part of the user interfaces tidy up
    };
    passwordUpdating: boolean;
    passwordUpdated: boolean;
}
