import * as React from 'react';
import { IHouseholdsProps, IHouseholdsStore } from './householdsInterfaces';
import { getHouseholdsOfUser } from './householdsActions';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import HouseholdsList from './HouseholdsList';
import { Loading } from '../Loading';

export class Households extends React.Component<IHouseholdsProps> {
    componentDidMount() {
        this.props.dispatch(getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser.userId));
    }

    render() {
        return (
            <div style={{ display: 'block' }}>
                {!this.props.loading && this.props.householdsArray && this.props.householdsArray.length
                    ? <HouseholdsList householdsArray={this.props.householdsArray} />
                    : <Loading />}
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: IHouseholdsStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        householdsArray: store.householdsReducer.householdsArray,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Households);
