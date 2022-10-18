
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
  // location.href = "index.html";
}
// document.getElementById('BtnReg').addEventListener('click', postProducto);