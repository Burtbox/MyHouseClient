import * as React from 'react';

import Nav from '../Nav';
import Routes from '../Routes';
import ErrorMessage from '../ErrorMessage';
import Footer from '../Footer';

const App: React.StatelessComponent = () => {
    return (
        <div style={{ height: '100%' }}>
            <Nav />
            <Routes />
            <ErrorMessage />
            <Footer />
        </div>
    );
};

export default App;
