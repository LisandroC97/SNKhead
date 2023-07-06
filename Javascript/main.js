/*Simulación de base de datos de productos con modelo, tipo, color, precio y stock además de un número de ID correspondiente*/ 

async function cargarDB(){
    try{
    const respuesta = await fetch("./JSON/BaseDeDatos.json");
    const BaseDeDatos= await respuesta.json();
    localStorage.setItem("productosLS",JSON.stringify(BaseDeDatos))
    }
    catch(error){
    alert("Error al leer el archivo")
    }
}
cargarDB()
let product= cargarProductosLS();
let catalogo=product.map(({ID,modelo,tipo,color,precio})=> ({ID,modelo,tipo,color,precio}));
let filtradoSS=[];
let min=0;
sessionStorage.setItem("minimo",JSON.stringify(min));
let max=1000;
sessionStorage.setItem("maximo",JSON.stringify(max));
guardarProductosSS();

guardarFiltradoSS();
render();
window.onload=renderContadorCarrito();

