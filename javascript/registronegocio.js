

document.getElementById('formulario').addEventListener('submit',(e)=>{
  e.preventDefault();
  let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let direccion = /^[a-zA-Z0-9\_\-]{4,16}$/;
  let telefono = /^\d{7,14}$/;
  nombreEmpresa = document.getElementById("NombreEmpresa").value;
  if(nombreEmpresa== null || nombreEmpresa.length == 0 || nombre.test(nombreEmpresa)== false){
    document.getElementById('NombreEmpresa').style.boxShadow = "0 0 5px red";
    return false;
  }else{document.getElementById('NombreEmpresa').style.boxShadow = "0 0 0";}

  nombreDueno = document.getElementById("NombreDueno").value;
  if(nombreDueno== null || nombreDueno.length == 0 || nombre.test(nombreDueno)== false){
    document.getElementById('NombreDueno').style.boxShadow = "0 0 5px red";
    return false;
  }else{document.getElementById('NombreDueno').style.boxShadow = "0 0 0";}

  dirNego = document.getElementById("DireccionNego").value;
  if(dirNego == null || dirNego == 0 || direccion.test(dirNego)== false){
    document.getElementById('DireccionNego').style.boxShadow = "0 0 5px red";
    return false;
  }else{document.getElementById('DireccionNego').style.boxShadow = "0 0 0";}

  desNego = document.getElementById("DescripcionNego").value;
  if(desNego == null || desNego.length == 0 ){
    document.getElementById('DescripcionNego').style.boxShadow = "0 0 5px red";
    return false;
  }else{document.getElementById('DescripcionNego').style.boxShadow = "0 0 0";}

  numero = document.getElementById("NumeroNego").value;
  if(numero == null || numero.length == 0 || telefono.test(numero)==false){
    document.getElementById('NumeroNego').style.boxShadow = "0 0 5px red";
    return false;
  }else{document.getElementById('NumeroNego').style.boxShadow = "0 0 0";
  Redir();
}

})


//async function doPostRequest(){
//  fetch('http://localhost:8000/api/registro/negocio', {
//    method: 'POST',
//    body: JSON.stringify({
//      id_usuario : 1,
//      nombre : document.getElementById("NombreEmpresa").value,
//      descrip : document.getElementById("DescripcionNego").value, 
//      ubicacion : document.getElementById("DireccionNego").value,
//      telefono : document.getElementById("NumeroNego").value,
//      horario_inicio : document.getElementById("HoraIni").value,
//      horario_cierre : document.getElementById("HoraFin").value
//    }),
//    headers: {
//      "Content-type": "application/json"
//    }
//  })
//  .then(response => response.json())
//  .then(json => console.log(json))
//  
//}

function Redir(){
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
  location.href = "index.html";
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

