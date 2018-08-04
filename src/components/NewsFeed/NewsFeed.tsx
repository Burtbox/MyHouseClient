import { Card, CardContent, CardHeader, List, ListItem, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import * as classNames from 'classnames';
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
        const { classes } = this.props;
        return (
            <form className={classNames(classes.formContainer, { [classes.formContainerShift]: this.props.navOpen })} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    paddingLeft: 'inherit',
                }}>
                    {this.props.loading ? <Loading /> :
                        this.props.newsFeedList && this.props.newsFeedList.length > 0 ?
                            <List style={{ textAlign: 'center' }}>
                                {this.props.newsFeedList.map((newsItem: INewsFeed) => (
                                    <ListItem key={'NewsFeedItem_' + newsItem.newsFeedId}>
                                        <Card style={{ width: '100%' }}>
                                            <CardHeader
                                                title={newsItem.headline}
                                                subheader={'Author: ' + newsItem.author}
                                            />
                                            <CardContent >
                                                <Typography gutterBottom variant="subheading" component="h2">
                                                    {newsItem.subHeadline}
                                                </Typography>
                                                <Typography component="p">
                                                    {newsItem.story}
                                                </Typography>
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
        navOpen: store.navReducer.navOpen,
    };
    return props;
};

export default compose(withStyles(formStyles), connect(mapStateToProps))(NewsFeed);
