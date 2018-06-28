
import { createStyles, Theme } from '@material-ui/core/styles';

const navStyles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    menuItems: {
        textDecoration: 'none',
    },
    userChipItem: {
        display: 'inline-flex',
        width: '120px',
        overflow: 'hidden',
    },
});

export default navStyles;
