

document.getElementById('formulario').addEventListener('submit',(e)=>{
  e.preventDefault();
  let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let direccion = /^[a-zA-Z0-9 \_\-]{5,54}$/;
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
  if(dirNego == null || dirNego.length == 0 || direccion.test(dirNego)== false){
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
  Redir()
  }
  

})
function ValidarExt(){
  
    var archivoInput = document.getElementById('LogoEmpresa');
    var archivoRuta = archivoInput.value;
    var extPermitida = /(.png|.jpeg|.jpg)$/i; 
  
    if(!extPermitida.exec(archivoRuta)){
        document.getElementById('LogoEmpresa').style.boxShadow = "0 0 5px red";
        return false;
    }
    else{document.getElementById('LogoEmpresa').style.boxShadow = "0 0 0";}
}


async function Redir(){
  var a = document.getElementById("LogoEmpresa").files[0];
  console.log(a);
  fetch('http://localhost:8000/api/registro/negocio', {
    method: 'POST',
    body: JSON.stringify({
      id_usuario : 1,
      nombre : document.getElementById("NombreEmpresa").value,
      descrip : document.getElementById("DescripcionNego").value, 
      ubicacion : document.getElementById("DireccionNego").value,
      telefono : document.getElementById("NumeroNego").value,
      horario_inicio : document.getElementById("HoraIni").value,
      horario_cierre : document.getElementById("HoraFin").value,
      photo : document.getElementById("LogoEmpresa").files[0]
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  location.href = "index.html";
}
