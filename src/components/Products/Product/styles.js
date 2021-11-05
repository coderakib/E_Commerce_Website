import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cartActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    // buttons: {
    //     display: 'flex',
    //     alignItems: 'center',
    // },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));