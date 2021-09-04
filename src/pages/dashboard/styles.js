import { makeStyles } from '@material-ui/core/styles';

const background = '#f5f6fa';
const header = '#353b48';
const sideMenu = '#dcdde1';
const buttonHover = '#718093';

const useStyle = makeStyles({
    wrapper: {
        backgroundColor: background,
        width: '100vw',
        height: '100vh',
    },

    header: {
        height: '60px',
        width: '100%',
        backgroundColor: header,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },

    dropMenu: {
        alignSelf: 'center',
        position: 'absolute',
        left: '20px',
    },

    title: {
        alignSelf: 'center',
        color: background
    },

    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '60px',
        bottom: 0,
        width: '100%'
    },

    asideContainer:{
        flex: 1,
        height: '100%',
        backgroundColor: sideMenu,
        '& h3':{
            textAlign:'center',
            marginBottom: 0,
            marginTop: '10px'
        }
    },

    buttonContainer: {
        display: 'flex',
        flexDirection:'column',
        width: '100%',
        alignItems: 'center'
    },

    button: {
        height: '35px',
        color: background,
        width: '90%',
        backgroundColor: header,
        marginTop:'15px',
        '&:hover':{
            backgroundColor: buttonHover,
        }
    },


    tableContainer:{
        flex: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default useStyle;