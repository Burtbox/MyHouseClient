import * as React from 'react';

class Footer extends React.Component {
    createFooter() {
        const style: any = {
            footer: {
                textAlign: 'center',
                padding: '20px',
                position: 'fixed',
                left: '0',
                bottom: '0',
                height: '60px',
                width: '100%',
            },
        };

        return (
            <footer style={style.footer}>
                <div>
                    By hApps, Version 1.0
                            </div>
                <div> Icons made by <a href="https://www.flaticon.com/authors/dave-gandy"
                    title="Dave Gandy"> Dave Gandy </a> from <a href="https://www.flaticon.com/"
                        title="Flaticon"> www.flaticon.com </a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"
                            title="Creative Commons BY 3.0"
                            target="_blank"> CC 3.0 BY </a>
                </div>
            </footer>
        );
    }

    render() {
        return (
            this.createFooter()
        );
    }
}

export default Footer;
