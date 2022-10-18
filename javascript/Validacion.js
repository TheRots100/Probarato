document.getElementById('formulario').addEventListener('submit',(e)=>{
    e.preventDefault();
    let nombre = /^[a-zA-ZÀ-ÿ\s]{3,32}$/;
    let direccion = /^[a-zA-Z0-9\_\-]{10,64}$/;
    let telefono = /^\d{7,9}$/;
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
    if(numero == null || numero.length == 0 || telefono.test(numero)== false){
      document.getElementById('NumeroNego').style.boxShadow = "0 0 5px red";
      return false;
    }else{document.getElementById('NumeroNego').style.boxShadow = "0 0 0";}
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