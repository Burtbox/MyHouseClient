import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LocalAtm from '@material-ui/icons/LocalAtm';
import Restaurant from '@material-ui/icons/Restaurant';
import * as React from 'react';
import { IHouseholdsProps } from '../Households/householdsInterfaces';
import { gethouseFoodLinkUrl, gethouseMoneyLinkUrl } from '../Nav/navCommon';

const SingleHouseholdMenu: React.StatelessComponent<IHouseholdsProps> = (props) => {
    return (
        <List>
            <ListItem
                href={gethouseMoneyLinkUrl(props.loggedInUser, props.householdsArray[0].occupantId)}
            >
                <ListItemIcon>
                    <LocalAtm />
                </ListItemIcon>
                <ListItemText>
                    Money
                </ListItemText>
            </ListItem>
            <ListItem
                href={gethouseFoodLinkUrl(props.loggedInUser, props.householdsArray[0].occupantId)}
            >
                <ListItemIcon>
                    <Restaurant />
                </ListItemIcon>
                <ListItemText>
                    Food
                </ListItemText>
            </ListItem>
        </List>
    );
};

export default SingleHouseholdMenu;
