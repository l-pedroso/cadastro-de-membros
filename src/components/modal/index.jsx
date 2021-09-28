import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container, Title, InputText, Form, Header, InlineForm, HeaderTextField } from './styles';

export default function BasicModal({ open, handleClose }) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Header>
            <Title>Ficha de Cadastro - A.D.P.F</Title>
            <InlineForm>
              <HeaderTextField required id="matricula" label="Matrícula" variant="outlined"/>
              <HeaderTextField required id="congregacao" label="Congregação" variant="outlined"/>
            </InlineForm>
          </Header>

          <Form>
            <InputText required id="name" label="Nome" variant="outlined"/>
            <InputText id="filiation" label="Filiação" variant="outlined"/>
            <InlineForm>
              <InputText id="nacimento" label="Nacido em:" variant="outlined" type="date" InputLabelProps={{ shrink: true }}/>
              <InputText id="nacionalidade" label="Nacionalidade" variant="outlined"/>
            </InlineForm>
            <InlineForm>
              <InputText id="natural" label="Naturalidade" variant="outlined"/>
              <InputText id="estado" label="Estado" variant="outlined"/>
            </InlineForm>
            <InlineForm>
              <InputText id="civil" label="Estado Civil" variant="outlined"/>
              <InputText id="profissao" label="Profissão" variant="outlined"/>
            </InlineForm>
            <InlineForm>
              <InputText id="escolaridade" label="Escolaridade" variant="outlined"/>
              <InputText id="titulo" label="Título de Eleitor" variant="outlined"/>
            </InlineForm>
          </Form>
        </Container>
      </Modal>
    </div>
  );
}