import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from 'react';
import { IHousehold, IHouseholdsListProps } from './householdsInterfaces';
import { HouseholdsInvite } from './HouseholdsInvite';
import householdListStyles from './householdsListStyles';

const HouseholdsList: React.StatelessComponent<IHouseholdsListProps> = (props) => {
    const { classes } = props;
    // TODO: Add in whether an invite is pending and accept/reject functionality!
    // All households got should not be included anywhere else until accepted!
    return (
        <div className={classes.root}>
            {props.householdsArray.map((household: IHousehold) =>
                <ExpansionPanel key={household.occupantId}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>{household.name}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    {household.inviteAccepted
                        ? <HouseholdsInvite
                            household={household}
                            classes={classes}
                            loggedInUser={props.loggedInUser}
                            loading={props.loading}
                            dispatch={props.dispatch}
                            history={props.history}
                        />
                        : <HouseholdsAcceptInvite
                            household={household}
                            classes={classes}
                            loggedInUser={props.loggedInUser}
                            loading={props.loading}
                            dispatch={props.dispatch}
                            history={props.history}
                        />}
                </ExpansionPanel>,
            )}
        </div>
    );
};

export default withStyles(householdListStyles)(HouseholdsList);
