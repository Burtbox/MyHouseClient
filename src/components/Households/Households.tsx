import * as React from 'react';
import Paper from 'material-ui/Paper';
import { IHouseholdProps } from './householdsInterfaces';
import { getHouseholdsOfOccupant } from './householdsActions';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';

class Households extends React.Component<IHouseholdProps> {
    constructor(props: IHouseholdProps) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getHouseholdsOfOccupant(this.props.loggedInUser.token, this.props.loggedInUser));
    }

    createHouseholdsList() {
        return (
            <Paper>
                <List> 
                    <ListItem primaryText={this.props.households[0].name}>  </ListItem>
                    <ListItem primaryText={this.props.households[1].name}>  </ListItem>
                </List>
            </Paper>
        );
    }

    render() {
        return (
            <div style={{ width: '20%' }}>
                {this.props.households && this.props.households.length ? this.createHouseholdsList() : ''}
            </div >
        );
    }
}


// Retrieve data from store as props
const mapStateToProps = (store: any) => {
    return { 
        loggedInUser: store.navReducer.loggedInUser, 
        households: store.householdsReducer.households,
    };
};

export default connect(mapStateToProps)(Households);
