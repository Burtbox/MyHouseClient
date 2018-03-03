import * as React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import styles from './linksStyles';
import { IStore } from '../../interfaces/storeInterface';
import { ILinksProps, ILinksState, ILinksStore } from './linksInterfaces';
import { getHouseholdsOfUser } from '../Households/householdsActions';
import { connect } from 'react-redux';
import { CircularProgress, List, ListItem } from 'material-ui';
import { IHousehold } from '../Households/householdsInterfaces';

export class Links extends React.Component<ILinksProps, ILinksState> {
    constructor(props: ILinksProps) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentWillMount() {
        this.setState({ loading: true });
        this.props.dispatch(
            getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser),
        ).then(() => {
            this.setState({ loading: false });
        });
    }

    createSingleHouseholdMenu() {
        return (
            <Paper style={styles.paper}>
                <Menu>
                    <MenuItem primaryText="Money" leftIcon={<LocalAtm />} href="http://housemoney.surge.sh/" />
                    <MenuItem primaryText="Food" leftIcon={<Restaurant />} href="http://housefood.surge.sh/" />
                </Menu>
            </Paper>
        );
    }

    createMultiHouseholdMenu() {
        return (
            <Paper style={styles.paper}>
                <List>
                    <ListItem
                        primaryText="Money"
                        leftIcon={<LocalAtm />}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={
                            this.props.households.map((household: IHousehold) =>
                                <ListItem
                                    key={household.householdId}
                                    primaryText={household.name}
                                    href="http://housemoney.surge.sh/"
                                />,
                            )} />
                    <ListItem
                        primaryText="Food"
                        leftIcon={<Restaurant />}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={
                            this.props.households.map((household: IHousehold) =>
                                <ListItem
                                    key={household.householdId}
                                    primaryText={household.name}
                                    href="http://housefood.surge.sh/"
                                />,
                            )} />
                </List>
            </Paper>
        );
    }

    render() {
        return (
            <div >
                {
                    this.state.loading ? <CircularProgress /> :
                        this.props.households.length === 1 ? this.createSingleHouseholdMenu()
                            : this.createMultiHouseholdMenu()
                }
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: ILinksStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        households: store.householdsReducer.households,
    };
    return props;
};

export default connect(mapStateToProps)(Links);
