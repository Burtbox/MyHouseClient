import * as React from 'react';
import { IHouseholdsProps, IHouseholdsStore } from './householdsInterfaces';
import { getHouseholdsOfUser } from './householdsActions';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import HouseholdsList from './HouseholdsList';
import { Loading } from '../Loading';

export class Households extends React.Component<IHouseholdsProps> {
    componentWillMount() {
        this.props.dispatch(getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser.userId));
    }

    render() {
        return (
            <div style={{ display: 'block' }}>
                {!this.props.loading && this.props.households && this.props.households.length
                    ? <HouseholdsList {...this.props} />
                    : <Loading />}
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: IHouseholdsStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        households: store.householdsReducer.households,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Households);
