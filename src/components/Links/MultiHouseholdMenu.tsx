import * as React from 'react';
import { IHousehold, IHouseholdsProps } from '../Households/householdsInterfaces';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import styles from './linksStyles';
import { ListItem, List, Paper } from 'material-ui';
import { gethouseMoneyLinkUrl, gethouseFoodLinkUrl } from './linksActions';

const MultiHouseholdMenu: React.StatelessComponent<IHouseholdsProps> = (props) => {
    return (
        <Paper style={styles.paper}>
            <List>
                <ListItem
                    key="HouseMoneyLink"
                    primaryText="Money"
                    leftIcon={<LocalAtm />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={
                        props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseMoneyLink' + household.occupantId}
                                primaryText={household.name}
                                href={gethouseMoneyLinkUrl(props.loggedInUser, household.occupantId)}
                            />,
                        )} />
                <ListItem
                    key="HouseFoodLink"
                    primaryText="Food"
                    leftIcon={<Restaurant />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={
                        props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseFoodLink' + household.occupantId}
                                primaryText={household.name}
                                href={gethouseFoodLinkUrl(props.loggedInUser, household.occupantId)}
                            />,
                        )} />
            </List>
        </Paper>
    );
};

export default MultiHouseholdMenu;
