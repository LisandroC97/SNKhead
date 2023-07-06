/*Renderizo la cantidad de items en carrito*/
function renderContadorCarrito() {
    let contenidoCarrito=JSON.parse(localStorage.getItem("carrito"))
    let i=0;
    let contador=0;
    for(i=0;i<contenidoCarrito.length;i++){
    contador=contenidoCarrito[i].cantidad+contador;}
    document.getElementById("count").innerHTML=contador;
}
