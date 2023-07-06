/*Simulación de base de datos de productos con modelo, tipo, color, precio y stock además de un número de ID correspondiente*/ 

let product=[
    {ID:1, modelo:"Air Jordan", tipo:"High Dark Mocha",color:"blanco marron negro", precio:150,img:"./Images/Catalogo/11-dfcb78b21d859e743f16107208352137-640-0.jpg",stock37:0,stock38:10,stock39:10,stock40:10,stock41:0,stock42:10,stock43:10,stock44:10},
    {ID:2, modelo:"Air Jordan", tipo:"High Lucky Green",color:"verde blanco", precio:160, img:"./Images/Catalogo/AIR JORDAN 1 RETRO HIGH LUCKY GREEN (1).png",stock37:0,stock38:0,stock39:10,stock40:0,stock41:10,stock42:10,stock43:10,stock44:10},
    {ID:3, modelo:"Air Jordan", tipo:"Mid Homage",color:"blanco negro", precio:140, img:"./Images/Catalogo/Mid homage.jpg",stock37:0,stock38:10,stock39:10,stock40:0,stock41:10,stock42:0,stock43:10,stock44:10},
    {ID:4, modelo:"Air Force 1", tipo:"Low Triple White",color:"blanco", precio:80, img:"./Images/Catalogo/low triple white.jpg",stock37:0,stock38:10,stock39:10,stock40:10,stock41:10,stock42:10,stock43:10,stock44:0},
    {ID:5, modelo:"Air Force 1", tipo:"Low Cut Out",color:"gris", precio:110, img:"./Images/Catalogo/low cut out.jpg",stock37:0,stock38:10,stock39:0,stock40:10,stock41:10,stock42:0,stock43:10,stock44:10},
    {ID:6, modelo:"Air Force 1", tipo:"Low x Supreme Black",color:"negro", precio:180, img:"./Images/Catalogo/af1_low_supreme-black-2_800x.jpg",stock37:0,stock38:10,stock39:10,stock40:0,stock41:0,stock42:10,stock43:10,stock44:10},
    {ID:7, modelo:"SB Dunk", tipo:"Low Fruity Pack Green Apple",color:"verde blanco", precio:150, img:"./Images/Catalogo/green apple.png",stock37:0,stock38:0,stock39:0,stock40:10,stock41:10,stock42:0,stock43:10,stock44:10},
    {ID:8, modelo:"SB Dunk", tipo:"Low Los Angeles Dodgers", color:"azul blanco", precio:150, img:"./Images/Catalogo/dodgers.png",stock37:0,stock38:10,stock39:10,stock40:0,stock41:10,stock42:10,stock43:0,stock44:10},
    {ID:9, modelo:"SB Dunk", tipo:"Low Gnarhunters", color:"negro", precio:150, img:"./Images/Catalogo/gnarhunters.jpeg",stock37:0,stock38:10,stock39:10,stock40:0,stock41:10,stock42:0,stock43:10,stock44:10}
]
/*
const cargarDB= async ()=>{
    const respuesta = await fetch("./JSON/BaseDeDatos.json");
    const BaseDeDatos= await respuesta.json();
    localStorage.setItem("productosLS",JSON.stringify(BaseDeDatos))
    }
}
cargarDB().then((response)=>{let variableGlobal=response;})
/*let product= cargarProductosLS();*/
let filtradoSS=[];
let min=0;
sessionStorage.setItem("minimo",JSON.stringify(min));
let max=1000;
sessionStorage.setItem("maximo",JSON.stringify(max));
guardarProductosSS();
guardarProductosLS();
guardarFiltradoSS();
render();
window.onload=renderContadorCarrito();

