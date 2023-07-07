const obtenerValorBlue= async ()=>{
    const respuesta = await fetch("https://api.bluelytics.com.ar/v2/latest");
    const dolarBlueVenta= await respuesta.json();
    localStorage.setItem("valorBlue",JSON.stringify(dolarBlueVenta.blue.value_sell))
    
return dolarBlueVenta
}