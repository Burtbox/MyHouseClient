import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { HouseholdsActions } from './householdsActions';
import { IHouseholdsAcceptInviteProps, IHouseholdsAcceptInviteState } from './householdsInterfaces';
import householdListStyles from './householdsListStyles';

export class HouseholdsInvite extends React.Component<IHouseholdsAcceptInviteProps, IHouseholdsAcceptInviteState> {
    constructor(props: IHouseholdsAcceptInviteProps) {
        super(props);
        this.state = {
            acceptInviteDetails: {
                occupantId: this.props.household.occupantId,
                userId: this.props.loggedInUser.userId,
            },
            accepting: false,
        };
    }

    inviteToHousehold = () => {
        this.props.dispatch(HouseholdsActions.acceptInviteToHousehold({
            acceptInviteDetails: this.state.acceptInviteDetails,
            token: this.props.loggedInUser.token,
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.column}>
                <Button size="small" variant="outlined" onClick={this.inviteToHousehold} disabled={this.state.accepting}>Accept</Button>
            </div>
        );
    }
}

export default withStyles(householdListStyles)(HouseholdsInvite);
