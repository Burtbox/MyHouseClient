import { WithStyles } from '@material-ui/core';
import { IUser } from '../Users/usersInterfaces';
import userChipStyles from './userChipStyles';

export interface IUserChipProps extends WithStyles<typeof userChipStyles> {
    user: IUser;
}
