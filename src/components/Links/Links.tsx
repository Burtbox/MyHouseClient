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
import { houseMoneyUrl, houseFoodUrl } from '../../appConfig';
import { IOccupant } from '../Occupants/occupantsInterfaces';

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
            getHouseholdsOfUser(this.props.loggedInUser.token, this.props.loggedInUser), // TODO: Also return occupant id here! 
        ).then(() => {
            this.setState({ householdsLoading: false });
        });
        this.props.dispatch(
            getNewsFeed(this.props.loggedInUser.token, this.props.loggedInUser),
        ).then(() => {
            this.setState({ newsFeedLoading: false });
        });
    }

    getHouseMoneyUrl(householdId: number, occupantId: number) {
        const urlParams: IOccupant = {
            householdId,
            occupantId,
            userId: this.props.loggedInUser.userId,
            displayName: this.props.loggedInUser.displayName,
            email: this.props.loggedInUser.email,
            token: this.props.loggedInUser.token,
        };
        return houseMoneyUrl + JSON.stringify(urlParams);
    }

    getHouseFoodUrl(householdId: number, occupantId: number) {
        const urlParams: IOccupant = {
            householdId,
            occupantId,
            userId: this.props.loggedInUser.userId,
            displayName: this.props.loggedInUser.displayName,
            email: this.props.loggedInUser.email,
            token: this.props.loggedInUser.token,
        };
        return houseFoodUrl + JSON.stringify(urlParams);
    }

    createSingleHouseholdMenu() {
        return (
            <Paper style={styles.paper}>
                <Menu>
                    <MenuItem primaryText="Money" leftIcon={<LocalAtm />} href={this.getHouseMoneyUrl(1, 1)} />
                    <MenuItem primaryText="Food" leftIcon={<Restaurant />} href={this.getHouseFoodUrl(1, 1)} />
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
                                    href={this.getHouseMoneyUrl(household.householdId, 1)}
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
                                    href={this.getHouseFoodUrl(household.householdId, 1)}
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
                    <Card style={{
                        marginTop: '10px',
                    }}>
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
                        <CardText >
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
                <span style={{ display: 'inline-flex', width: '20rem' }}>
                    {
                        this.state.householdsLoading ? <CircularProgress /> :
                            this.props.households.length === 1 ? this.createSingleHouseholdMenu()
                                : this.createMultiHouseholdMenu()
                    }
                </span>
                <span style={{ display: 'inline-flex', width: '50rem' }}>
                    {
                        this.state.newsFeedLoading ? <CircularProgress /> :
                            this.props.newsFeed.length > 0 ? this.newsFeed()
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
        newsFeed: store.linksReducer.newsFeed,
    };
    return props;
};

export default connect(mapStateToProps)(Links);
