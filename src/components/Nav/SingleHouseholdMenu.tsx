import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Restaurant from '@material-ui/icons/Restaurant';
import { head } from 'lodash';
import * as React from 'react';
import { getHouseFoodLinkUrl, getHouseMoneyLinkUrl } from '../Nav/navCommon';
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
        </List>
    );
};

export default SingleHouseholdMenu;
