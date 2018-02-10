import { IComponentProps } from '../../interfaces/componentInterfaces';
import { IUserObject } from '../Users/usersInterfaces';
    
export interface IUserChipProps extends IComponentProps {
    user: IUserObject;
    styles: any;
}

export interface IUserChipState {}
