function render() {
    let productos = cargarFiltradoSS();
    let productRender = '';
    productos.forEach((producto) => {
        productRender += `<div class="card m-2" style="width: 17rem;box-shadow: 5px 5px 5px rgb(196, 196, 196) !important;">
                <img src="${producto.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title" style="font-weight:bolder">${producto.modelo}</h5>
                        <p class="card-text">${producto.tipo}</p>
                        <p class="card-text">${"$" + producto.precio}</p>
                        <a href="./preview.html" onclick="cargarPreviewLS(${producto.ID})" class="btn btn-success comprar">comprar</a>
                        </div>
            </div>`
    }
    )
    document.getElementById("render").innerHTML = productRender;
    document.getElementById("render").style.display = "flex";
    document.getElementById("render").style.flexWrap = "wrap";
    document.getElementById("render").style.flexDirection = "row";
}
