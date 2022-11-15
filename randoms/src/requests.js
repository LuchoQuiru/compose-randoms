// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.

const EX1_URL = process.env.REACT_APP_EX_HOST +":"+ process.env.REACT_APP_EX1_PORT;
const EX2_URL = process.env.REACT_APP_EX_HOST +":"+ process.env.REACT_APP_EX2_PORT;
const PH1_URL = process.env.REACT_APP_PH_HOST +":"+ process.env.REACT_APP_PH1_PORT;
const PH2_URL = process.env.REACT_APP_PH_HOST +":"+ process.env.REACT_APP_PH2_PORT;
const PY_URL = process.env.REACT_APP_PY_HOST +":"+ process.env.REACT_APP_PY_PORT;

const requests = [
    {"url":EX1_URL,"color":"pink"},
    {"url":EX2_URL,"color":"red"},
    {"url":PH1_URL,"color":"cyan"},
    {"url":PH2_URL,"color":"blue"},
    {"url":PY_URL,"color":"yellow"},
]


/* const requests = [
  {"url":"http://localhost:3004","color":"pink"},
  {"url":"http://localhost:80","color":"cyan"},
  {"url":"http://localhost:5000","color":"yellow"},
] */

export default requests;
