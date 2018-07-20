import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { HouseholdsActions } from './householdsActions';
import { IHouseholdsInviteProps, IHouseholdsInviteState } from './householdsInterfaces';
import householdListStyles from './householdsListStyles';

export class HouseholdsInvite extends React.Component<IHouseholdsInviteProps, IHouseholdsInviteState> {
    constructor(props: IHouseholdsInviteProps) {
        super(props);
        this.state = {
            inviteDetails: {
                email: '',
                invitedByOccupantId: this.props.household.occupantId,
                invitedByUserId: this.props.loggedInUser.userId,
            },
            inviting: false,
        };
    }

    inviteToHousehold = () => {
        this.props.dispatch(HouseholdsActions.acceptInviteToHousehold({
            inviteDetails: this.state.inviteDetails,
            token: this.props.loggedInUser.token,
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.column}>
                <Button size="small" variant="outlined" onClick={this.inviteToHousehold}>Accept</Button>
            </div>
        );
    }
}

export default withStyles(householdListStyles)(HouseholdsInvite);
