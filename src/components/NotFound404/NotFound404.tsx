import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { myHouseRoutes } from '../../enums/routesEnum';
import { INotFound404Props } from './notFound404Interfaces';

const NotFound404: React.StatelessComponent<INotFound404Props> = (props) => {
    return (
        <Paper style={{ textAlign: 'center', paddingBottom: '2em', paddingTop: '84px', paddingLeft: '50px' }}>
            <Typography variant="headline" gutterBottom={true}>It's dangerous to go alone! Take this.</Typography>
            <Button variant="outlined"
                onClick={() => props.history.push(myHouseRoutes.Base)}
            >
                Link
            </Button>
        </Paper>
    );
};

export default NotFound404;
