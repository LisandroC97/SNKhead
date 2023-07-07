window.onload=renderContadorCarrito();


/*-----------------------------------------------------Funcionalidad vaciar carrito---------------------------------------------------*/
let vaciarCarrito=document.getElementById("vaciarCarrito")
    vaciarCarrito.addEventListener("click",vaciarCarro)
function vaciarCarro(){
    carritoVacío=[];
    localStorage.setItem("carrito", JSON.stringify(carritoVacío))
renderCarrito()
renderContadorCarrito()}
/*-----------------------------------------------------Cálculo de precio total---------------------------------------------------*/
function precioTotal(){
    let blue=JSON.parse(localStorage.getItem("valorBlue"));
    let precioParcial=0;
    let cargarCarrito=JSON.parse(localStorage.getItem("carrito"));
    cargarCarrito.forEach((item)=>{precioParcial=precioParcial+item.precio*item.cantidad;})
    document.getElementById("calculoUSDT").innerHTML="$"+precioParcial;
    document.getElementById("calculoARS").innerHTML="$"+precioParcial*blue;
}
/*-------------------------------------------Funcionalidad borrar ítem-----------------------------------*/
function borrarItem(index)
{   carrito=JSON.parse(localStorage.getItem("carrito"));
    carrito.splice(index,1);
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderCarrito();
    renderContadorCarrito();
}
/*--------------------------------Funcionalidad para el boton de confirmar compra---------------------------------- */
let confirmar=document.getElementById("confirmarCompra")
    confirmar.addEventListener("click",confirmacionCompra)

function confirmacionCompra()
{
    localStorage.setItem("carrito",JSON.stringify([]))
renderCarrito()
renderContadorCarrito()
swal.fire({
    title: '<strong>Ya guardamos su pedido</strong>',
    icon: 'success',
    width:900,
    html:
    '<p>Por favor, realice la transferencia a la billetera virtual en USDT </p>' +
    '<p>Billetera: CD128P52120N2042HSP</p>'+
    '<p>Transferencia Bancaria - Banco Municipal</p>'+
    '<p>CBU: 12531820534FALSO</p>'+
    '<p>ALIAS: PROYECTO.FINAL.JAVASCRIPT</p>'+
    '<p>Ya realizó la transferencia? Envíenos el comprobante: <button type="button" class="btn btn-success"><a target=”_blank” href="https://api.whatsapp.com/" style="text-decoration:none;color:white;font-width:bolder;">Whatsapp</a></button>'
    +
    '<P>Luego de verificar le pediremos sus datos de envío y comenzará el circuito de distribución.</p>'+
    '<h2>Gracias por comprar en SNKhead!</h2>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Genial!',
    confirmButtonAriaLabel: 'Thumbs up, great!',


});
}
renderCarrito()