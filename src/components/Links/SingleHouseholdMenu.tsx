import * as React from 'react';
import { IHouseholdsProps } from '../Households/householdsInterfaces';
import { MenuItem, Menu, Paper } from 'material-ui';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import styles from './linksStyles';
import { gethouseMoneyLinkUrl, gethouseFoodLinkUrl } from './linksActions';

const SingleHouseholdMenu: React.StatelessComponent<IHouseholdsProps> = (props) => {
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
