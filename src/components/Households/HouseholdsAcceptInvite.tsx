import { ExpansionPanelDetails, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { OccupantsActions } from '../Occupants/occupantsActions';
import { IHouseholdsAcceptInviteProps, IHouseholdsAcceptInviteState } from './householdsInterfaces';
import householdListStyles from './householdsListStyles';

export class HouseholdsInvite extends React.Component<IHouseholdsAcceptInviteProps, IHouseholdsAcceptInviteState> {
    constructor(props: IHouseholdsAcceptInviteProps) {
        super(props);
        this.state = {
            occupant: {
                token: props.loggedInUser.token,
                occupantId: props.household.occupantId,
                userId: props.loggedInUser.userId,
                displayName: props.loggedInUser.displayName,
                email: props.loggedInUser.email,
                inviteAccepted: true,
            },
            accepting: false,
        };
    }

    inviteToHousehold = () => {
        this.props.dispatch(OccupantsActions.updateOccupant({
            occupant: this.state.occupant,
            token: this.props.loggedInUser.token,
        }));
    }

    render() {
        const { classes } = this.props;
        return (
            <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column} />
                <div className={classes.column}>
                    <Button size="small" variant="outlined" onClick={this.inviteToHousehold} disabled={this.state.accepting}>Accept</Button>
                </div>
            </ExpansionPanelDetails>
        );
    }
}

export default withStyles(householdListStyles)(HouseholdsInvite);
