import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

const formStyles = (theme: Theme) => createStyles({
    container: {
        textAlign: 'center',
        paddingTop: '84px', // TODO: Remove these two paddings - should be moved by appbar and sidebar
        paddingLeft: '240px',
    },
});

export default formStyles;
export interface IFormStyles extends WithStyles<typeof formStyles> { }
