const membro = {
  congregacao: "",
  dataAdmissao: "",
  dataBatismo: "",
  dataNascimento: "",
  dataSaida: "",
  flagAtivacao: "ATIVO",
  igrejaBatismo: "",
  nomeConjuge: "",
  numeroMatricula: 0,
  observacao: "",
  pessoa: {
    celular: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    endereco: {
      bairro: "",
      cep: "",
      cidade: "",
      complemento: "",
      estado: "",
      logradouro: "",
      numero: 0
    },
    escolaridade: "",
    estado: "",
    estadoCivil: "",
    nacionalidade: "",
    naturalDe: "",
    nome: "",
    nomeMae: "",
    nomePai: "",
    numeroDocumento: "",
    profissao: "",
    rg: "",
    tipoDocumento: "",
    tituloEleitor: ""
  },
  procedencia: "CONVENCAO",
  statusMenbroAnterior: "SIM"
}



export class Member {
  constructor() {
    this.congregacao = "";
    this.dataAdmissao = "";
    this.dataBatismo = "";
    this.dataNascimento = "";
    this.dataSaida = "";
    this.flagAtivacao = "ATIVO";
    this.igrejaBatismo = "";
    this.nomeConjuge = "";
    this.numeroMatricula = 0;
    this.observacao = "";
    this.pessoa = {
      celular: "",
      cpf: "",
      dataNascimento: "",
      email: "",
      endereco: {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        estado: "",
        logradouro: "",
        numero: 0
      },
      escolaridade: "",
      estado: "",
      estadoCivil: "",
      nacionalidade: "",
      naturalDe: "",
      nome: "",
      nomeMae: "",
      nomePai: "",
      numeroDocumento: "",
      profissao: "",
      rg: "",
      tipoDocumento: "",
      tituloEleitor: ""
    };
    this.procedencia = "CONVENCAO";
    this.statusMenbroAnterior = "SIM";
  }
}