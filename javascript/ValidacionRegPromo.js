document.getElementById('formularioPromo').addEventListener('submit',(e)=>{
    e.preventDefault();
    let nombre = /^[a-zA-ZÀ-ÿ\s]{3,32}$/;
    let direccion = /^[a-zA-Z0-9\_\-]{10,64}$/;
    let telefono = /^\d{7,9}$/;
    nombreProducto = document.getElementById("NomProductoPromo").value;
    if(nombreProducto== null || nombreProducto.length == 0 || nombre.test(nombreProducto)== false){
      document.getElementById('NomProductoPromo').style.boxShadow = "0 0 5px red";
      return false;
    }else{document.getElementById('NomProductoPromo').style.boxShadow = "0 0 0";}
  
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
    postProducto();
  })


  function ValidarExt(){
  
    var archivoInput = document.getElementById('imgPromo');
    var archivoRuta = archivoInput.value;
    var extPermitida = /(.png|.jpeg|.jpg)$/i; 
  
    if(!extPermitida.exec(archivoRuta)){
        document.getElementById('imgPromo').style.boxShadow = "0 0 5px red";
        return false;
    }
    else{document.getElementById('imgPromo').style.boxShadow = "0 0 0";}
  }