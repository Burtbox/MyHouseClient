import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import { getHouseholdsOfUser } from '../Households/householdsActions';
import { Loading } from '../Loading';
import NewsFeed from '../NewsFeed';
import { getNewsFeed } from './linksActions';
import { ILinksReducer, ILinksStore } from './linksInterfaces';
import MultiHouseholdMenu from './MultiHouseholdMenu';
import SingleHouseholdMenu from './SingleHouseholdMenu';

export class Links extends React.Component<ILinksReducer> {
    componentDidMount() {
        this.props.dispatch(getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser.userId));
        this.props.dispatch(getNewsFeed(this.props.loggedInUser.token, this.props.loggedInUser));
    }

    render() {
        return (
            <div >
                <span style={{ display: 'inline-flex', width: '20rem' }}>
                    {
                        this.props.loading && !this.props.householdsArray ? <Loading /> :
                            this.props.householdsArray && this.props.householdsArray.length === 1 ?
                                <SingleHouseholdMenu {... this.props} /> :
                                this.props.householdsArray && this.props.householdsArray.length > 1 ?
                                    <MultiHouseholdMenu {...this.props} />
                                    : <Loading />
                    }
                </span>
                <span style={{ display: 'inline-flex', width: '50rem' }}>
                    {
                        this.props.loading ? <Loading /> :
                            this.props.newsFeedList && this.props.newsFeedList.length > 0 ? <NewsFeed {...this.props} />
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
        householdsArray: store.householdsReducer.householdsArray,
        newsFeedList: store.linksReducer.newsFeedList,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(Links);
