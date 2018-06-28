import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { IUserChipProps } from './userChipInterfaces';
import userChipStyles from './userChipStyles';

const UserChip: React.StatelessComponent<IUserChipProps> = (props) => {
    return (
        <Chip key={'Chip_' + props.user.userId} className={props.classes.chip}>
            <Avatar key={'Avatar_' + props.user.userId}>
                {props.user.displayName ? props.user.displayName.charAt(0).toUpperCase() : ''}
            </Avatar>
            {props.user.displayName}
        </Chip>
    );
};

export default withStyles(userChipStyles)(UserChip);
