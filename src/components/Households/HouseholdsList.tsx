import * as React from 'react';
import { IHousehold, IHouseholdsProps } from './householdsInterfaces';
import { Paper, List, ListItem } from 'material-ui';

const HouseholdsList: React.StatelessComponent<IHouseholdsProps> = (props) => {
    return (
        <Paper>
            <List>
                {props.households.map((household: IHousehold) =>
                    <ListItem primaryText={household.name} key={household.occupantId} />,
                )}
            </List>
        </Paper>
    );
};

export default HouseholdsList;
