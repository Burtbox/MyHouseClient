import * as React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import styles from './linksStyles';

class Links extends React.Component {
    createMenu() {
        return (
            <Paper style={styles.paper}>
                <Menu>
                    <MenuItem primaryText="Money" leftIcon={<LocalAtm />} href="http://housemoney.surge.sh/" />
                    <MenuItem primaryText="Food" leftIcon={<Restaurant />} href="http://housefood.surge.sh/" />
                </Menu>
            </Paper>
        );
    }

    render() {
        return (
            <div style={{ width: '25%' }}>
                {this.createMenu()}
            </div >
        );
    }
}

export default Links;
