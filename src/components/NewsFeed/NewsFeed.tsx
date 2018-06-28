import { Card, CardContent, CardHeader, List, ListItem } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IStore } from '../../interfaces/storeInterface';
import formStyles from '../../styles/styles';
import Loading from '../Loading';
import { NewsFeedActions } from './newsFeedActions';
import { INewsFeed, INewsFeedProps, INewsFeedStore } from './newsFeedInterfaces';

export class NewsFeed extends React.Component<INewsFeedProps> {
    componentDidMount() {
        this.props.dispatch(NewsFeedActions.getNewsFeed(this.props.loggedInUser));
    }

    render() {
        return (
            <form className={this.props.classes.container}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}>
                    {this.props.loading ? <Loading /> :
                        this.props.newsFeedList && this.props.newsFeedList.length > 0 ?
                            <List style={{ textAlign: 'center' }}>
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

export default compose(withStyles(formStyles), connect(mapStateToProps))(NewsFeed);
