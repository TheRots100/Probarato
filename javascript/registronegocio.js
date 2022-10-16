
async function doPostRequest(){
  fetch('http://localhost:8000/api/registro/negocio', {
    method: 'POST',
    body: JSON.stringify({
      id_usuario : 1,
      nombre : document.getElementById("NombreEmpresa").value,
      descrip : document.getElementById("DescripcionNego").value, 
      ubicacion : document.getElementById("DireccionNego").value,
      telefono : document.getElementById("NumeroNego").value,
      horario_inicio : document.getElementById("HoraIni").value,
      horario_cierre : document.getElementById("HoraFin").value
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  
}

document.getElementById('BotonReg').addEventListener('click', doPostRequest);
// axios({
//   url: 'http://tudireccion.com',
//   method: 'post',
//   headers: {'Content-type': 'application/json'},
//   body: {
//     id_Usuario : 1,
//     nombre : getElementById("NombreEmpresa"),
//     descrip : getElementById("Descripcion del Negocio"), 
//     ubicacion : getElementById("DireccionNego"),
//     telefono : getElementById("NumeroNego"),
//     horarioInicio : getElementById("HoraIni"),
//     horarioCierre : getElementById("HoraFin")
//   },
//   data: text
// }).then(OkCallback, ErrorCallback)

// var fs = require('fs');
// const axios = require('axios');

// async function doPostRequest() {

//   let payload = 
//   {  
//     id_Usuario : 1,
//     nombre : getElementById("NombreEmpresa"),
//     descrip : getElementById("Descripcion del Negocio"), 
//     ubicacion : getElementById("DireccionNego"),
//     telefono : getElementById("NumeroNego"),
//     horarioInicio : getElementById("HoraIni"),
//     horarioCierre : getElementById("HoraFin")
//   };

//   let res = await axios.post('http://localhost:8000/api/registro/negocio', payload);

//   let data = res.data;
//   console.log(data);
// }

