import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const background = "#f5f6fa";
const header = "#353b48";
const buttonHover = "#718093";


export const Container = styled.div`
display: flex;
flex-direction: column;
height: 500px;
width: 800px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-35%, -45%);
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
`;

export const HeaderTextField = styled(InputText)`
width: 45%;
margin: 0;
`;

export const Title = styled.h3`

`;

export const StandardButton = styled(Button)`
height: 35px;
color: ${background};
width: 40%;
background-color: ${header};
margin-top: 15px;
&:hover{
    background-color: ${buttonHover};
}

`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin-bottom: 20px;
`;

export const AlertContainer = styled.div`
position: absolute;
top:  calc(50% - 75px);
left: calc(50% - 80px);
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
`;