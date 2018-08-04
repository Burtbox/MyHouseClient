import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const formStyles = (theme: Theme) => createStyles({
    formContainer: {
        textAlign: 'center',
        paddingTop: '84px', // TODO: Remove these two paddings - should be moved by appbar and sidebar
        paddingLeft: '0px',
    },
    formContainerShift: {
        textAlign: 'center',
        paddingTop: '84px', // TODO: Remove these two paddings - should be moved by appbar and sidebar
        paddingLeft: `${drawerWidth}px`,
    },
});

export default formStyles;
export interface IFormStyles extends WithStyles<typeof formStyles> { }
