import { Menu, MenuItem, Paper } from 'material-ui';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import * as React from 'react';
import { IHouseholdsReducer } from '../Households/householdsInterfaces';
import { gethouseFoodLinkUrl, gethouseMoneyLinkUrl } from '../NewsFeed/newsFeedActions';
import styles from './linksStyles';

const SingleHouseholdMenu: React.StatelessComponent<IHouseholdsReducer> = (props) => {
    return (
        <Paper style={styles.paper}>
            <Menu>
                <MenuItem
                    primaryText="Money"
                    leftIcon={<LocalAtm />}
                    href={gethouseMoneyLinkUrl(props.loggedInUser, props.householdsArray[0].occupantId)} 
                />
                <MenuItem
                    primaryText="Food"
                    leftIcon={<Restaurant />}
                    href={gethouseFoodLinkUrl(props.loggedInUser, props.householdsArray[0].occupantId)}
                />
            </Menu>
        </Paper>
    );
};

export default SingleHouseholdMenu;
