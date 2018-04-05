import * as React from 'react';
import { IHousehold, IHouseholdsReducer } from './householdsInterfaces';
import { Paper, List, ListItem } from 'material-ui';

const HouseholdsList: React.StatelessComponent<IHouseholdsReducer> = (props) => {
    return (
        <Paper>
            <List>
                {props.householdsArray.map((household: IHousehold) =>
                    <ListItem primaryText={household.name} key={household.occupantId} />,
                )}
            </List>
        </Paper>
    );
};

export default HouseholdsList;
