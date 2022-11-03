const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos() {
  for (const producto of productos) {
    //=+ acumulativo
    contenedor.innerHTML += `
    <div class="card col-sm-2">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.id}</h5>
            <p class="card-text">${producto.nombre}</p>
            <p class="card-text"> $ ${producto.precio}</p>
            <button id="btn${producto.id}" class="btn btn-primary"> comprar </button>
        </div>
    </div>
    `;
  }

  //Eventos --> lo defino para todos los elementos.  Usamos un for each 
  productos.forEach((producto)=>{
    //document.getElementById(`btn $ {producto.id}`).addEventListener("click",agregarAlCarrito(producto)) --> addEventListener necesita que mande la fn sin parentesis.
    //entonces hago una funcion anonima que llame a agregar carrito sin paramentros. Esa funcion anonima si pasa al producto.
    document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
    });    
});
}

renderizarProductos();

//debo generar Id dinamicos , porque tendria el mismo id por cada producto generado. y necesito que el id cambie acorde al producto que tengo
//button id = 'btn${producto.id} --> genero que el id sea btn + el id.

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoAComprar.id}</td>
        <td>${productoAComprar.nombre}</td>
        <td>${productoAComprar.precio}</td>
    </tr>
    `

    let totalCarrito= carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText="Total a pagar $:" + totalCarrito;  //aca no pongo += porque lo esta pisando

}