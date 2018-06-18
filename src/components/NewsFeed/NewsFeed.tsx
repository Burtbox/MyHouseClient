import { Button, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import { HouseholdsActions } from '../Households/householdsActions';
import Loading from '../Loading';
import { NewsFeedActions } from './newsFeedActions';
import { INewsFeed, INewsFeedProps, INewsFeedStore } from './newsFeedInterfaces';

export class NewsFeed extends React.Component<INewsFeedProps> {
    componentDidMount() {
        this.props.dispatch(HouseholdsActions.getHouseholdsOfUser(this.props.loggedInUser));
        this.props.dispatch(NewsFeedActions.getNewsFeed(this.props.loggedInUser));
    }

    render() {
        return (
            <div style={{ display: 'inline-flex', width: '50rem' }}>
                {
                    this.props.loading ? <Loading /> :
                        this.props.newsFeedList && this.props.newsFeedList.length > 0 ?
                            this.props.newsFeedList.map((newsItem: INewsFeed) => (
                                <Card style={{
                                    marginTop: '10px',
                                }} >
                                    <CardHeader
                                        title={newsItem.headline}
                                        subheader={newsItem.author}
                                    // avatar="images/jsa-128.jpg"
                                    />
                                    {/* <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img src="images/nature-600-337.jpg" alt="" />
                                </CardMedia> */}
                                    {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                                    <CardContent >
                                        {newsItem.story}
                                    </CardContent>
                                    <CardActions>
                                        <Button>View</Button>
                                    </CardActions>
                                </Card>
                            ))
                            : <div />
                }
            </div>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    const props: INewsFeedStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        householdsArray: store.householdsReducer.householdsArray,
        newsFeedList: store.newsFeedReducer.newsFeedList,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(NewsFeed);
