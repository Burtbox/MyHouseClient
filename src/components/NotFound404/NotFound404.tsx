import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { INotFound404Props } from './notFound404Interfaces';
import { myHouseRoutes } from '../../enums/routesEnum';

class NotFound404 extends React.Component<INotFound404Props> {
    render() {
        return (
          <div style={{ textAlign: 'center' }}>
            <br />
            <h2>It's dangerous to go alone! Take this.</h2>
            <FlatButton
              label="Link"
              onClick={() => this.props.history.push(myHouseRoutes.Base)}
            />
          </div>
        );
    }
}

export default NotFound404;
