import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalAtm from '@material-ui/icons/LocalAtm';
import * as React from 'react';
import { IHousehold } from '../Households/householdsInterfaces';
import { getHouseMoneyLinkUrl } from '../Nav/navCommon';
import { IHouseholdMenuState, INavProps } from './navInterfaces';

class MultiHouseholdMenu extends React.Component<INavProps, IHouseholdMenuState> {
    constructor(props: INavProps) {
        super(props);
        this.state = {
            houseMoneyMenuOpen: true,
            houseFoodMenuOpen: true,
        };
    }

    handleHouseMoneyMenuClick = () => {
        this.setState({ houseMoneyMenuOpen: !this.state.houseMoneyMenuOpen });
    }

    handleHouseFoodMenuClick = () => {
        this.setState({ houseFoodMenuOpen: !this.state.houseFoodMenuOpen });
    }

    render() {
        return (
            <List>
                <ListItem key="HouseMoneyLink" button onClick={this.handleHouseMoneyMenuClick}>
                    <ListItemIcon>
                        <LocalAtm />
                    </ListItemIcon>
                    <ListItemText primary="Money" />
                    {this.state.houseMoneyMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.houseMoneyMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseMoneyLink' + household.occupantId}
                                button
                                component="a"
                                href={getHouseMoneyLinkUrl(this.props.loggedInUser, household.occupantId)}
                            >
                                <ListItemText inset primary={household.name} />
                            </ListItem>,
                        )}
                    </List>
                </Collapse>
                {/* Commenting out for V1 myHouse release (only house money working atm)
                <ListItem key="HouseFoodLink" button onClick={this.handleHouseFoodMenuClick}>
                    <ListItemIcon>
                        <Restaurant />
                    </ListItemIcon>
                    <ListItemText primary="Food" />
                    {this.state.houseFoodMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.houseFoodMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {this.props.householdsArray.map((household: IHousehold) =>
                            <ListItem
                                key={'HouseFoodLink' + household.occupantId}
                                button
                                component="a"
                                href={getHouseFoodLinkUrl(this.props.loggedInUser, household.occupantId)}
                            >
                                <ListItemText inset primary={household.name} />
                            </ListItem>,
                        )}
                    </List>
                </Collapse>
                */}
            </List>
        );
    }
}

export default MultiHouseholdMenu;
