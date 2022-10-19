

document.getElementById('formProm').addEventListener('submit',(e)=>{
  e.preventDefault();
  let nombre = /^[a-zA-ZÀ-ÿ\s]{2,64}$/;
  let direccion = /^[a-zA-Z0-9 \_\-]{5,64}$/;
  let descripcion = /^[a-zA-Z0-9 \_\-]{10,256}$/;
  let precio = /^\d{1,5}$/;
  var a = new Boolean(false);
  var b = new Boolean(false);
  var c = new Boolean(false);
  var d = new Boolean(false);
  var e = new Boolean(false);

  nombreProducto = document.getElementById("NomProductoPromo").value;
  if(nombreProducto== null || nombreProducto.length == 0 || nombre.test(nombreProducto)== false){
    document.getElementById('NomProductoPromo').style.boxShadow = "0 0 5px red";
    a=false;
    return false;
  }else{document.getElementById('NomProductoPromo').style.boxShadow = "0 0 0"; 
    a=true;
  }
  
  precioOri = document.getElementById("PreOriginal").value;
  if(precioOri == null || precioOri.length == 0 || precio.test(precioOri)== false){
    document.getElementById('PreOriginal').style.boxShadow = "0 0 5px red";
    b=false;
    return false;
  }else{document.getElementById('PreOriginal').style.boxShadow = "0 0 0";
    b=true;
  }

  precioDes = document.getElementById("PreDescuento").value;
  if(precioDes == null || precioDes.length == 0 || precio.test(precioDes)== false){
    document.getElementById('PreDescuento').style.boxShadow = "0 0 5px red";
    c=false;
    return false;
  }else{document.getElementById('PreDescuento').style.boxShadow = "0 0 0";
    c=true;
  }

  dirProm = document.getElementById("DirPromo").value;
  if(dirProm == null || dirProm.length == 0 || direccion.test(dirProm)== false){
    document.getElementById('DirPromo').style.boxShadow = "0 0 5px red";
    d=false;
    return false;
  }else{document.getElementById('DirPromo').style.boxShadow = "0 0 0";
    d=true;
  }

  desProm = document.getElementById("DesPromo").value;
  if(desProm == null || desProm.length == 0 || descripcion.test(desProm)== false){
    document.getElementById('DesPromo').style.boxShadow = "0 0 5px red";
    e=false;
    return false;
  }else{document.getElementById('DesPromo').style.boxShadow = "0 0 0";
    e=true;
    //postProducto();
  }

  if(a==true && b==true && c==true && d==true && e==true){
    postProducto();
  }
})


async function postProducto(){
  fetch('http://localhost:8000/api/registro/producto', {
    method: 'POST',
    body: JSON.stringify({
      producto_nombre : document.getElementById("NomProductoPromo").value,
      producto_descripcion : document.getElementById("DesPromo").value,
      producto_precio : document.getElementById("PreOriginal").value,
      producto_categoria : document.getElementById("select_categorias").value,  
      promocion_descuento : document.getElementById("PreDescuento").value, 
      promocion_fecha_inicio : document.getElementById("FechaIniPromo").value,
      promocion_fecha_fin : document.getElementById("FechaFinPromo").value,
      promocion_hora_inicio : document.getElementById("HoraIniPromo").value,
      promocion_hora_fin : document.getElementById("HoraFinPromo").value,
      negocio_id : 1,
      promocion_ubicacion: document.getElementById("DirPromo").value,
      photo : document.getElementById("imgPromo").files[0]
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  location.href = "registropromo.html";
}