import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LocalAtm from '@material-ui/icons/LocalAtm';
import { head } from 'lodash';
import * as React from 'react';
import { getHouseMoneyLinkUrl } from './navCommon';
import { INavProps } from './navInterfaces';

const SingleHouseholdMenu: React.StatelessComponent<INavProps> = (props) => {
    return (
        <List>
            <ListItem
                button
                component="a"
                href={getHouseMoneyLinkUrl(props.loggedInUser, head(props.householdsArray).occupantId)}
            >
                <ListItemIcon>
                    <LocalAtm />
                </ListItemIcon>
                <ListItemText primary="Money" />
            </ListItem>
            {/* Commenting out for V1 myHouse release (only house money working atm)
            <ListItem
                button
                component="a"
                href={getHouseFoodLinkUrl(props.loggedInUser, head(props.householdsArray).occupantId)}
            >
                <ListItemIcon>
                    <Restaurant />
                </ListItemIcon>
                <ListItemText primary="Food" />
            </ListItem>
            */}
        </List>
    );
};

export default SingleHouseholdMenu;
