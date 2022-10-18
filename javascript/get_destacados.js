async function getDestacados(){
  fetch('http://localhost:8000/api/destacados', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => function(data){
    var obj1 = data[0];
    var producto_id = obj1.product_id;
    var nombre = obj1.nombre;
    var precio = obj1.precio;
    var imagen_url = obj1.imagen_url;
  });
  location.href = "index.html";
}
// document.getElementById('').addEventListener('click', getDestacados);