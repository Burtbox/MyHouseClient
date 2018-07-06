import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as classNames from 'classnames';
import * as React from 'react';
import { IHousehold, IHouseholdsListProps } from './householdsInterfaces';
import householdListStyles from './householdsListStyles';

const inviteToHousehold = () => {
    // TODO: code
};

const HouseholdsList: React.StatelessComponent<IHouseholdsListProps> = (props: IHouseholdsListProps) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            {props.householdsArray.map((household: IHousehold) =>
                <ExpansionPanel key={household.occupantId}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{household.name}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column}>
                            <Typography variant="subheading">
                                Invite
                            </Typography>
                        </div>
                        <div className={classNames(classes.column, classes.helper)}>
                            <TextField
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@email.com"
                                required
                            // onChange={this.handleInputChange} // TODO: make stateful and implement!
                            // disabled={this.props.sending}
                            />
                        </div>
                        <div className={classes.column}>
                            <Button size="small" variant="outlined" onClick={inviteToHousehold}>Send</Button>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>,
            )}
        </div>
    );
};

export default withStyles(householdListStyles)(HouseholdsList);
