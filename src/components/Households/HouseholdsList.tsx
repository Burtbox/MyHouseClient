import { List, ListItem, ListItemText, Paper } from '@material-ui/core';
import * as React from 'react';
import { IHousehold, IHouseholdsReducer } from './householdsInterfaces';

const HouseholdsList: React.StatelessComponent<IHouseholdsReducer> = (props) => {
    return (
        <Paper>
            <List>
                {props.householdsArray.map((household: IHousehold) =>
                    <ListItem key={household.occupantId}>
                        <ListItemText primary={household.name} />
                    </ListItem>,
                )}
            </List>
        </Paper>
    );
};

export default HouseholdsList;
