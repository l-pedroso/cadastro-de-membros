import axios from "axios";

const dados = `{ "congregacao": "Jd Aminezia",
"dataAdmissao": "2016-02-06",
"dataBatismo": "2016-02-06",
"dataNascimento": "2016-02-06",
"dataSaida": "2016-02-06",
"flagAtivacao": "ATIVO",
"id": 0,
"igrejaBatismo": "string",
"nomeConjuge": "string",
"numeroMatricula": 0,
"observacao": "string",

"pessoa": {
  "celular": "string",
  "cpf": "21914952065",
  "dataNascimento": "2016-02-06",
  "email": "string",
  "endereco": {
    "bairro": "string",
    "cep": "string",
    "cidade": "string",
    "complemento": "string",
    "estado": "string",
    "id": 0,
    "logradouro": "string",
    "numero": 0
  },

  "escolaridade": "string",
  "estado": "string",
  "estadoCivil": "string",
  "id": 0,
  "nacionalidade": "string",
  "naturalDe": "string",
  "nome": "string",
  "nomeMae": "string",
  "nomePai": "string",
  "numeroDocumento": "string",
  "profissao": "string",
  "rg": "string",
  "tipoDocumento": "string",
  "tituloEleitor": "string"
},
"procedencia": "CONVENCAO",
"statusMenbroAnterior": "SIM"
}`;

export const createMember = (member) =>{
/*
    axios({
        method:'get',
        url: 'http://localhost:5000/'
        
    }).then((res)=>{
        console.log(res);
    })
    .catch((e)=>{
        console.log(e);
    });

/ */
    axios({
        method: 'get',
        url: 'https://api-cmo-assembd.herokuapp.com/api/v1/CMO/menbro',
        headers:{
            'Content-Type':'application/json'
        },
        data: dados,
          
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((e)=>{
        console.log(e);
    })
    

};