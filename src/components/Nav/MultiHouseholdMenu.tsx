import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Restaurant from '@material-ui/icons/Restaurant';
import * as React from 'react';
import { IHousehold, IHouseholdsProps } from '../Households/householdsInterfaces';
import { gethouseFoodLinkUrl, gethouseMoneyLinkUrl } from '../Nav/navCommon';

// TODO: add state to handle collapse!
// TODO: Can refactor into single component with SingleHouseHoldMenu?
const MultiHouseholdMenu: React.StatelessComponent<IHouseholdsProps> = (props) => {
    return (
        <List>
            <ListItem key="HouseMoneyLink">
                <ListItemIcon>
                    <LocalAtm />
                </ListItemIcon>
                <ListItemText primary="Money" />
                <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseMoneyLink' + household.occupantId}
                                href={gethouseMoneyLinkUrl(props.loggedInUser, household.occupantId)}
                            >
                                <ListItemText primary={household.name} />
                            </ListItem>,
                        )}
                    </List>
                </Collapse>
            </ListItem>
            <ListItem
                key="HouseFoodLink"
            >
                <ListItemIcon>
                    <Restaurant />
                </ListItemIcon>
                <ListItemText primary="Food" />
                <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseFoodLink' + household.occupantId}
                                href={gethouseFoodLinkUrl(props.loggedInUser, household.occupantId)}
                            >
                                <ListItemText primary={household.name} />
                            </ListItem>,
                        )} />
                    </List>
                </Collapse>
            </ListItem>
        </List>
    );
};

export default MultiHouseholdMenu;
