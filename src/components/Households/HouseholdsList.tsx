import * as React from 'react';
import { IHousehold } from './householdsInterfaces';
import { Paper, List, ListItem } from 'material-ui';

const HouseholdsList: React.StatelessComponent<IHousehold[]> = (households: IHousehold[]) => {
    return (
        <Paper>
            <List>
                {households.map((household: IHousehold) =>
                    <ListItem primaryText={household.name} />,
                )}
            </List>
        </Paper>
    );
};

export default HouseholdsList;
