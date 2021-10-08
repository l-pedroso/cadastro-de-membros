import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container, Title, InputText, Form, Header, InlineForm, HeaderTextField, StandardButton, ButtonContainer } from './styles';


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
              <HeaderTextField required id="matricula" label="Matrícula" variant="outlined" />
              <HeaderTextField required id="congregacao" label="Congregação" variant="outlined" />
            </InlineForm>
          </Header>

          <Form>
            <InputText required id="name" label="Nome" variant="outlined" />
            <InputText id="filiation" label="Filiação" variant="outlined" />
            <InlineForm>
              <InputText id="nacimento" label="Nacido em:" variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
              <InputText id="nacionalidade" label="Nacionalidade" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="natural" label="Naturalidade" variant="outlined" />
              <InputText id="estado" label="Estado" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="civil" label="Estado Civil" variant="outlined" />
              <InputText id="profissao" label="Profissão" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="escolaridade" label="Escolaridade" variant="outlined" />
              <InputText id="titulo" label="Título de Eleitor" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="certidao" label="Certidão de:" variant="outlined" />
              <InputText id="numero" label="Número" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="batizado" label="Batizou-se em" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              <InputText id="igreja" label="Igreja/Local" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="admissão" label="Data Admição" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
              <InputText id="rg" label="RG" variant="outlined" />
              <InputText id="cpf" label="CPF" variant="outlined" />
            </InlineForm>
            <InlineForm>
              <InputText id="conjugue" label="Cônjugue" variant="outlined" />
              <InputText id="matícula" label="N° Matrícula" variant="outlined" />
            </InlineForm>
            <InputText id="cargo" label="Cargo" variant="outlined" />
            <InlineForm>
              <InputText id="jaMembro" label="Já foi membro:" variant="outlined" />
              <InputText id="saida" label="Data Saída" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            </InlineForm>
            <InputText id="procedencia" label="Procedência:" variant="outlined" />
            <InputText id="endereco" label="Endereço" variant="outlined" />
          </Form>

          <ButtonContainer>
            <StandardButton variant="contained">Salvar</StandardButton>
            <StandardButton variant="contained">Cancelar</StandardButton>
          </ButtonContainer>
        </Container>

      </Modal>
    </div>
  );
}