/*-----------------------------------------------------Render carrito---------------------------------------------------*/
function renderCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let renderCarrito = '';
    let index=0;
    carrito.forEach((compra) => {
        
        renderCarrito +=
        `<div class="row">
            <div class="col"><img src="${compra.img}" class="" style="width:50%;" alt="..."></div>
            <div class="col"><p>${compra.modelo}</p></div>
            <div class="col-3"><p class="card-text">${compra.tipo}</p></div>
            <div class="col"><p class="card-text">${compra.talle}</p></div>
            <div class="col"><p class="card-text">${"$"+compra.precio}</p></div>
            <div class="col"><p class="card-text">${compra.cantidad}</p></div>
            <div class="col"><button id="botonBorrar" type="button" class="btn btn-outline-danger btn-sm" onclick="borrarItem(${index})">X</button></div>
        </div>`
        index+=1;
    }
    )
    document.getElementById("renderCarrito").innerHTML = renderCarrito;
    precioTotal()
}