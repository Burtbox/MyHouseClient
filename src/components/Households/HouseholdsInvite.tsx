import { ExpansionPanelDetails, TextField, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as classNames from 'classnames';
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
                occupantId: 0,
            },
            inviting: false,
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(prevState => ({
            inviteDetails: { ...this.state.inviteDetails, [name]: value },
        }));
    }

    inviteToHousehold = () => {
        HouseholdsActions.inviteToHousehold(this.state.inviteDetails, this.props.loggedInUser.token);
    }

    render() {
        const { classes } = this.props;
        return (
            <ExpansionPanelDetails className={classes.details}>
                <div className={classNames(classes.column, classes.helper)}>
                    <TextField
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="example@email.com"
                        required
                        onChange={this.handleInputChange}
                        disabled={this.state.inviting}
                    />
                </div>
                <div className={classes.column}/>
                <div className={classes.column}>
                    <Button size="small" variant="outlined" onClick={this.inviteToHousehold}>Invite</Button>
                </div>
            </ExpansionPanelDetails>
        );
    }
}

export default withStyles(householdListStyles)(HouseholdsInvite);
