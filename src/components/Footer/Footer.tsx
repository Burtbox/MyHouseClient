import { Typography } from '@material-ui/core';
import * as React from 'react';
import styles from './footerStyles';

const Footer: React.StatelessComponent = () => {
    return (
        <footer style={styles.footer}>
            <Typography> By hApps, Version 1.0 </Typography>
            <div>
                <Typography> Icons made by
                    <a href="https://www.flaticon.com/authors/dave-gandy"
                        title="Dave Gandy"> Dave Gandy 
                    </a> from 
                    <a href="https://www.flaticon.com/"
                        title="Flaticon"> www.flaticon.com
                    </a> is licensed by 
                    <a href="http://creativecommons.org/licenses/by/3.0/"
                        title="Creative Commons BY 3.0"
                        target="_blank"> CC 3.0 BY 
                    </a>
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;
