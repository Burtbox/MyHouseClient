import * as React from 'react';
import { IStore } from '../../interfaces/storeInterface';
import { ILinksProps, ILinksStore } from './linksInterfaces';
import { getHouseholdsOfUser } from '../Households/householdsActions';
import { connect } from 'react-redux';
import { getNewsFeed } from './linksActions';
import SingleHouseholdMenu from './SingleHouseholdMenu';
import { Loading } from '../Loading';
import MultiHouseholdMenu from './MultiHouseholdMenu';
import NewsFeed from '../NewsFeed';

export class Links extends React.Component<ILinksProps> {
    componentWillMount() {
        this.props.dispatch(getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser.userId));
        this.props.dispatch(getNewsFeed(this.props.loggedInUser.token, this.props.loggedInUser));
    }

    render() {
        return (
            <div >
                <span style={{ display: 'inline-flex', width: '20rem' }}>
                    {
                        this.props.loading ? <Loading /> :
                            this.props.households.length === 1 ?
                                <SingleHouseholdMenu {... this.props} />
                                : <MultiHouseholdMenu {...this.props} />
                    }
                </span>
                <span style={{ display: 'inline-flex', width: '50rem' }}>
                    {
                        this.props.loading ? <Loading /> :
                            this.props.newsFeedList.length > 0 ? <NewsFeed { ...this.props } />
                                : <div />
                    }
                </span>
            </div >
        );
    }
}

// Retrieve data from store as props
const mapStateToProps = (store: IStore) => {
    const props: ILinksStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        households: store.householdsReducer.households,
        newsFeedList: store.linksReducer.newsFeedList,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Links);
