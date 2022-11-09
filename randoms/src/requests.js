// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.

const EX_HOST_PORT = process.env.EX_HOST +":"+ process.env.EX_PORT;
const PH_HOST_PORT = process.env.PH_HOST +":"+ process.env.PH_PORT;
const PY_HOST_PORT = process.env.PY_HOST +":"+ process.env.PY_PORT;

console.log("SE VIENE UN HOST CON PUERTO");
console.log(EX_HOST_PORT);

const requests = [
    {"url":EX_HOST_PORT,"color":"pink"},
    {"url":PH_HOST_PORT,"color":"cyan"},
    {"url":PY_HOST_PORT,"color":"yellow"},
]


/* const requests = [
  {"url":"http://localhost:3004","color":"pink"},
  {"url":"http://localhost:80","color":"cyan"},
  {"url":"http://localhost:5000","color":"yellow"},
] */

export default requests;
