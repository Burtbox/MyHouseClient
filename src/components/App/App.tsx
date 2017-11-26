import * as React from 'react';

import Nav from '../Nav';
import Routes from '../Routes';
import ErrorMessage from '../ErrorMessage';
import Footer from '../Footer';

function App()  {
    return (
        <div>
            <Nav />
            <Routes />
            <ErrorMessage />
            <Footer />
        </div>
    );
}

export default App;
