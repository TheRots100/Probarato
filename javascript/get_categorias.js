async function getDestacados(){
  const response = await fetch('http://localhost:8000/api/categorias', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  const data = response.json;
  for(var i = 0; i < data.length; i++){
    var item = data[i];
    var nombre = item.categoria;
    document.getElementById("select_categorias").add(nombre);
  }
}

getDestacados();

// document.addEventListener("DOMContentLoaded", getDestacados);