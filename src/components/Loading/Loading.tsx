import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import * as React from 'react';

const Loading: React.StatelessComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <CircularProgress />
        </div>
    );
};

export default Loading;
