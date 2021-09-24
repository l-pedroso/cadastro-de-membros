import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import styled from '@emotion/styled'


export const Container = styled(TableContainer)`
width: 60%;
max-height: 80%;
display: ${props => props.display ? `initial` : `none`};
`

export const Cell = styled(TableCell)`
    width: 60%;
   
`;


