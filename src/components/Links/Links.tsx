import * as React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LocalAtm from 'material-ui/svg-icons/maps/local-atm';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import styles from './linksStyles';
import { IStore } from '../../interfaces/storeInterface';
import { ILinksProps, ILinksState, ILinksStore, INewsFeed } from './linksInterfaces';
import { getHouseholdsOfUser } from '../Households/householdsActions';
import { connect } from 'react-redux';
import { CircularProgress, List, ListItem, Card, CardHeader, CardText, CardActions, FlatButton } from 'material-ui';
import { IHousehold } from '../Households/householdsInterfaces';
import { getNewsFeed } from './linksActions';

export class Links extends React.Component<ILinksProps, ILinksState> {
    constructor(props: ILinksProps) {
        super(props);
        this.state = {
            householdsLoading: false,
            newsFeedLoading: false,
        };
    }

    componentWillMount() {
        this.setState({ householdsLoading: true, newsFeedLoading: true });
        this.props.dispatch(
            getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser),
        ).then(() => {
            this.setState({ householdsLoading: false });
        });
        this.props.dispatch(
            getNewsFeed(this.props.loggedInUser.token, this.props.loggedInUser),
        ).then(() => {
            this.setState({ newsFeedLoading: false });
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

    newsFeed() {
        return (
            <div>
                {this.props.newsFeed.map((newsItem: INewsFeed) => (
                    <Card>
                        <CardHeader
                            title={newsItem.headline}
                            subtitle={newsItem.author}
                        // avatar="images/jsa-128.jpg"
                        />
                        {/* <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                            <img src="images/nature-600-337.jpg" alt="" />
                        </CardMedia> */}
                        {/* <CardTitle title="Card title" subtitle="Card subtitle" /> */}
                        <CardText>
                            {newsItem.story}
                        </CardText>
                        <CardActions>
                            <FlatButton label="View" />
                        </CardActions>
                    </Card>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div >
                {
                    this.state.householdsLoading ? <CircularProgress /> :
                        this.props.households.length === 1 ? this.createSingleHouseholdMenu()
                            : this.createMultiHouseholdMenu()
                }
                {
                    this.state.newsFeedLoading ? <CircularProgress /> :
                        this.props.newsFeed && this.props.newsFeed.length === 0 ? this.newsFeed()
                            : <div />
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
