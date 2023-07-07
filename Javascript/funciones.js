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
function guardarProductosLS() { localStorage.setItem("productosLS", JSON.stringify(product)) }
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



