import { Card, CardContent, CardHeader, List, ListItem } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../interfaces/storeInterface';
import appStyles from '../../styles';
import Loading from '../Loading';
import { NewsFeedActions } from './newsFeedActions';
import { INewsFeed, INewsFeedProps, INewsFeedStore } from './newsFeedInterfaces';

export class NewsFeed extends React.Component<INewsFeedProps> {
    componentDidMount() {
        this.props.dispatch(NewsFeedActions.getNewsFeed(this.props.loggedInUser));
    }

    render() {
        return (
            <form style={appStyles.container}>
                <div style={{
                    width: '66%',
                    display: 'inline-table',
                }}>
                    {this.props.loading ? <Loading /> :
                        this.props.newsFeedList && this.props.newsFeedList.length > 0 ?
                            <List style={{ textAlign: 'center', display: 'inherit' }}>
                                {this.props.newsFeedList.map((newsItem: INewsFeed) => (
                                    <ListItem>
                                        <Card style={{ width: '100%' }}>
                                            <CardHeader
                                                title={newsItem.headline}
                                                subheader={newsItem.author}
                                            />
                                            <CardContent >
                                                {newsItem.story}
                                            </CardContent>
                                        </Card>
                                    </ListItem>
                                ))}
                            </List>
                            : <div />
                    }
                </div>
            </form>
        );
    }
}

const mapStateToProps = (store: IStore) => {
    const props: INewsFeedStore = {
        loggedInUser: store.usersReducer.loggedInUser,
        newsFeedList: store.newsFeedReducer.newsFeedList,
        loading: store.loadingReducer.loading,
    };
    return props;
};

export default connect(mapStateToProps)(NewsFeed);
