import * as React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { IUserChipProps } from './userChipInterfaces';
import styles from '../../styles';

class UserChip extends React.Component<IUserChipProps> {
    render() {
        const user = this.props.user;
        return (
          <Chip key={'Chip_' + user.userId} style={styles.chip}>
            <Avatar key={'Avatar_' + user.userId}>
              {user.displayName ? user.displayName.charAt(0).toUpperCase() : ''}
            </Avatar>
            {user.displayName}
          </Chip>
        );
    }
}

export default UserChip;
