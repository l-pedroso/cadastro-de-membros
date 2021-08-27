import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    tableContainer: {
        backgroundColor: 'white',
        borderRadius: '6px',
        overflow: 'auto',
        width: '300px',
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    table: {
        width: '90%',
    },

    tableCell: {
        width: '50%',
    }   

});


export default useStyle;