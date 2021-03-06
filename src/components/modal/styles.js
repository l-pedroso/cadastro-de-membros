import { makeStyles } from '@material-ui/core/styles';

const background = "#f5f6fa"

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: background,
        padding: '30px',
    },
});


export default useStyles;