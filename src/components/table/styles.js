import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import styled from '@emotion/styled'
import TableRow from '@mui/material/TableRow';

const rowBackground = '#dcdde1';
const borderCorlor = '#353b48';
const background = '#f5f6fa';


export const Container = styled(TableContainer)`
width: 60%;
max-height: 80%;
display: ${props => props.display ? `initial` : `none`};
overflow: auto;
background-color: ${rowBackground};
`

export const Row = styled(TableRow)`
background-color: ${props => props.head ? borderCorlor : 'initial'};
color: ${props => props.head ? background : 'initial'};
&:hover{
    background-color: ${props => props.head ? borderCorlor : 'white'} 
}
`

export const Cell = styled(TableCell)`
width: 20px;
border: 1px ${borderCorlor} solid;
padding: 10px;
font-weight: bold;
color: inherit;
`;


