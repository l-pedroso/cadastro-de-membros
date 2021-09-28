import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 400px;
width: 800px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-35%, -50%);
background-color: white;
align-items: center;
overflow: scroll;
`;

export const InputText = styled(TextField)`
width: 100%;
margin-top: 10px;
`;

export const Form = styled.form`
width: 90%;
`;

export const Header = styled.header`
width: 90%;
display: flex;
justify-content: space-between;
margin-top: 10px;
`;

export const InlineForm = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
& > * {
     width: 48%;
 }
`;

export const HeaderTextField = styled(InputText)`
width: 45%;
margin: 0;
`;

export const Title = styled.h3`

`;

