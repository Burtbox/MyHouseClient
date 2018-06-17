import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import * as React from 'react';
import styles from '../../styles';
import { IUserChipProps } from './userChipInterfaces';

const UserChip: React.StatelessComponent<IUserChipProps> = (props) => {
    return (
      <Chip key={'Chip_' + props.user.userId} style={styles.chip}>
        <Avatar key={'Avatar_' + props.user.userId}>
          {props.user.displayName ? props.user.displayName.charAt(0).toUpperCase() : ''}
        </Avatar>
        {props.user.displayName}
      </Chip>
    );
};

export default UserChip;
