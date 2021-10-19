import * as React from 'react';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import {
  Container, Title, InputText, Form, Header, InlineForm,
  HeaderTextField, StandardButton, ButtonContainer, AlertContainer
} from './styles';
import { Member } from '../../Models/member';
import { createMember } from '../../services/member_api';


const formData = {
  nome: "",
  filiacao: "",
  nacimento: "",
  nacionalidade: "",
  natural: "",
  estado: "",
  civil: "",
  profissao: "",
  escolaridade: "",
  titulo: "",
  certidao: "",
  numero: "",
  batizado: "",
  igreja: "",
  admissao: "",
  rg: "",
  cpf: "",
  conjugue: "",
  matricula: "",
  cargo: "",
  jaMembro: "",
  saida: "",
  procedencia: "",
  endereco: "",

}

export default function BasicModal({ open, handleClose }) {
  const member = new Member();

  const [alert, setAlert] = useState(false);
  const [data, setData] = useState({ ...member });

  const handleFormChange = (e) => {
    let form = data;
    switch (true) {
      case e.target.id in form:
        form[e.target.id] = e.target.value;
        break;

      case e.target.id in form.pessoa:
        form.pessoa[e.target.id] = e.target.value;
        break;

      case e.target.id in form.pessoa.endereco:
        form.pessoa.endereco[e.target.id] = e.target.value;
        break;

      default:
        console.error("no member prop");
        break;
    }
    setData({ ...form });
  };

  const openAlert = () => {
    setAlert(true);
  };

  const closeAlert = () => {
    setAlert(false);
  };

  const handleExit = () => {
    closeAlert();
    handleClose();
    //setData({ ...member });
  };

  const onSubmit = () => {
    console.log(data);
    handleExit();
    createMember();
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={openAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <Header>
            <Title>Ficha de Cadastro - A.D.P.F</Title>
            <InlineForm>
              <HeaderTextField required id="numeroMatricula" label="Matrícula" variant="outlined" />
              <HeaderTextField required id="congregacao" label="Congregação" variant="outlined" />
            </InlineForm>
          </Header>

          <Form>
            <InputText id="nome" label="Nome" variant="outlined" onChange={handleFormChange} value={data.pessoa.nome} />
            <InputText id="nomeMae" label="Filiação" variant="outlined" onChange={handleFormChange} value={data.pessoa.nomeMae} />
            <InlineForm>
              <InputText id="dataNascimento" label="Nacido em:" variant="outlined" type="date" InputLabelProps={{ shrink: true }} onChange={handleFormChange} value={data.dataNascimento} />
              <InputText id="nacionalidade" label="Nacionalidade" variant="outlined" onChange={handleFormChange} value={data.pessoa.nacionalidade} />
            </InlineForm>
            <InlineForm>
              <InputText id="naturalDe" label="Naturalidade" variant="outlined" onChange={handleFormChange} value={data.pessoa.naturalDe} />
              <InputText id="estado" label="Estado" variant="outlined" onChange={handleFormChange} value={data.pessoa.estado} />
            </InlineForm>
            <InlineForm>
              <InputText id="estadoCivil" label="Estado Civil" variant="outlined" onChange={handleFormChange} value={data.pessoa.estadoCivil} />
              <InputText id="profissao" label="Profissão" variant="outlined" onChange={handleFormChange} value={data.pessoa.profissao} />
            </InlineForm>
            <InlineForm>
              <InputText id="escolaridade" label="Escolaridade" variant="outlined" onChange={handleFormChange} value={data.pessoa.escolaridade} />
              <InputText id="tituloEleitor" label="Título de Eleitor" variant="outlined" onChange={handleFormChange} value={data.pessoa.tituloEleitor} />
            </InlineForm>
            <InlineForm>
              <InputText id="tipoDocumento" label="Certidão de:" variant="outlined" onChange={handleFormChange} value={data.pessoa.tipoDocumento} />
              <InputText id="numeroDocumento" label="Número" variant="outlined" onChange={handleFormChange} value={data.pessoa.numeroDocumento} />
            </InlineForm>
            <InlineForm>
              <InputText id="dataBatismo" label="Batizou-se em" type="date" InputLabelProps={{ shrink: true }} variant="outlined" onChange={handleFormChange} value={data.dataBatismo} />
              <InputText id="igrejaBatismo" label="Igreja/Local" variant="outlined" onChange={handleFormChange} value={data.igrejaBatismo} />
            </InlineForm>
            <InlineForm>
              <InputText id="dataAdmissao" label="Data Admição" type="date" InputLabelProps={{ shrink: true }} variant="outlined" onChange={handleFormChange} value={data.dataAdmissao} />
              <InputText id="rg" label="RG" variant="outlined" onChange={handleFormChange} value={data.pessoa.rg} />
              <InputText id="cpf" label="CPF" variant="outlined" onChange={handleFormChange} value={data.pessoa.cpf} />
            </InlineForm>
            <InlineForm>
              <InputText id="nomeConjuge" label="Cônjugue" variant="outlined" onChange={handleFormChange} value={data.nomeConjuge} />
              <InputText id="numeroMatricula" label="N° Matrícula" variant="outlined" onChange={handleFormChange} value={data.numeroMatricula} />
            </InlineForm>
            <InputText id="profissao" label="Cargo" variant="outlined" onChange={handleFormChange} value={data.pessoa.profissao} />
            <InlineForm>
              <InputText id="statusMenbroAnterior" label="Já foi membro:" variant="outlined" onChange={handleFormChange} value={data.statusMenbroAnterior} />
              <InputText id="dataSaida" label="Data Saída" type="date" InputLabelProps={{ shrink: true }} variant="outlined" onChange={handleFormChange} value={data.dataSaida} />
            </InlineForm>
            <InputText id="procedencia" label="Procedência:" variant="outlined" onChange={handleFormChange} value={data.procedencia} />
            <InputText id="bairro" label="Endereço" variant="outlined" onChange={handleFormChange} value={data.pessoa.endereco.bairro} />
          </Form>

          <ButtonContainer>
            <StandardButton onClick={onSubmit} variant="contained">Salvar</StandardButton>
            <StandardButton onClick={openAlert} variant="contained">Cancelar</StandardButton>
          </ButtonContainer>

          <Modal open={alert}>
            <AlertContainer>
              <h3>Deseja sair sem salvar?</h3>
              <ButtonContainer>
                <StandardButton onClick={handleExit} variant="contained">Sim</StandardButton>
                <StandardButton onClick={closeAlert} variant="contained">Não</StandardButton>
              </ButtonContainer>
            </AlertContainer>
          </Modal>

        </Container>
      </Modal>
    </div>
  );
}