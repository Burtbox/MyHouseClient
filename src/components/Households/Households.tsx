import * as React from 'react';
import Paper from 'material-ui/Paper';
import { IHouseholdProps, IHouseholdStore, IHousehold } from './householdsInterfaces';
import { getHouseholdsOfOccupant } from './householdsActions';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { IStore } from '../../interfaces/storeInterface';

class Households extends React.Component<IHouseholdProps> {
    componentWillMount() {
        this.props.dispatch(getHouseholdsOfOccupant(this.props.loggedInUser.token, this.props.loggedInUser));
    }

    createHouseholdsList() {
        return (
            <Paper>
                <List>
                    {this.props.households.map((household: IHousehold) => {
                        <ListItem primaryText={household.householdId} />;
                    })}
                </List>
            </Paper>
        );
    }
    // {this.props.loading ? <Loading />}

    render() {
        return (
            <div style={{ display: 'block' }}>

                {this.props.households && this.props.households.length ? this.createHouseholdsList() : ''}
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: IHouseholdStore = {
        loggedInUser: store.navReducer.loggedInUser,
        households: store.householdsReducer.households,
        loading: store.householdsReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Households);
