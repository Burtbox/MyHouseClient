import {
  grey100,
  grey400,
  grey900,
  blue800,
  blueGrey900,
  red800,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme: __MaterialUI.Styles.MuiTheme = getMuiTheme({
    palette: {
        primary1Color: blue800,
        primary2Color: blue800,
        textColor: grey100,
        borderColor: grey400,
        disabledColor: grey400,
        pickerHeaderColor: blue800,
        canvasColor: grey900,
        accent1Color: grey400,
        accent2Color: blue800,
        alternateTextColor: grey100,
        shadowColor: blueGrey900,
    },
    toolbar: {
        color: grey900,
        backgroundColor: blue800,
        iconColor: grey100,
    },
    avatar: {
        backgroundColor: blue800,
        color: grey100,
    },
    snackbar: {
        backgroundColor: red800,
    },
    tableRow: {
        hoverColor: blueGrey900,
        selectedColor: blueGrey900,
        stripeColor: blueGrey900,
    },
    ripple: {
        color: blueGrey900,
    },
});

export default theme;
