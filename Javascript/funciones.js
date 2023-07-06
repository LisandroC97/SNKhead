/* Funciones para manejo de almacenamiento*/

function precioMinimo() {
    let min = document.getElementById("min").value;
    sessionStorage.setItem("minimo", min)
    
}
function precioMaximo() {
    let max = document.getElementById("max").value;
    sessionStorage.setItem("maximo", max)
}
function guardarFiltradoSS() { sessionStorage.setItem("filtradoSS", JSON.stringify(product)) }
function cargarFiltradoSS() { return JSON.parse(sessionStorage.getItem("filtradoSS")) }
function guardarProductosSS() { sessionStorage.setItem("productosSS", JSON.stringify(product)) }
function cargarProductosSS() { return JSON.parse(sessionStorage.getItem("productosSS")) }
function cargarProductosLS() { return JSON.parse(localStorage.getItem("productosLS")); }

/*Funciones para la sección de filtros*/


function modelFilter(filtrado) {
    let filtromodelo = product.filter((item) => item.modelo.includes(filtrado));
    sessionStorage.setItem("filtradoSS", JSON.stringify(filtromodelo))
    return filtradoSS;
}
function priceFilter() {
    let minimo=sessionStorage.getItem("minimo");
    let maximo=sessionStorage.getItem("maximo");
    let productosSS=JSON.parse(sessionStorage.getItem("productosSS"));
    let filtroprecio = productosSS.filter((item) => item.precio >= minimo && item.precio <= maximo);
    sessionStorage.setItem("filtradoSS", JSON.stringify(filtroprecio))
    return filtradoSS;

}

function colorFilter(colores) {
    let filtrocolor = product.filter((item) => item.color.includes(colores));
    sessionStorage.setItem("filtradoSS", JSON.stringify(filtrocolor))
    return filtradoSS;

}

function cargarPreviewLS(id)
{   let arrayPreview=cargarProductosLS();
    localStorage.setItem("ID", JSON.stringify(id));
    let productoPV= arrayPreview.find(item => item.ID==id);
    localStorage.setItem("productoPreviewLS", JSON.stringify(productoPV));
    setTimeout(()=>{
        location.href="../preview.html"
    },500);
}


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

