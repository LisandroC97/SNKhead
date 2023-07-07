/*------------------------------------------------Funciones para renderizar el producto y sus talles---------------*/
function irAPreview() {
    const productoPreview= JSON.parse(localStorage.getItem("productoPreviewLS"))
    let render=
    `<div class="container text-center">
        <div class="row">
            <div class="col">
                <img src="${productoPreview.img}" class="img-fluid" alt="...">
            </div>
                <div class="col">
                <div class="card-body">
                <h5 class="titulo">${productoPreview.modelo}</h5>
                <p class="card-text">${productoPreview.tipo}</p>
                <p class="card-text">${"$" + productoPreview.precio}</p>
                <p class="texto-adicional">El valor de este par corresponde a calidad G5, si queres realizar el encargo en una calidad diferente comunicate con nosotros por WhatsApp.</p>
                <br>
                <div class="sizeSelector"> Talle:
                <div  class="btn-group" role="group" aria-label="Basic example">
                    <button id="37" type="button" class="btn btn-secondary" onclick="guardarTalle(37)">37</button>
                    <button id="38" type="button" class="btn btn-secondary" onclick="guardarTalle(38)">38</button>
                    <button id="39" type="button" class="btn btn-secondary" onclick="guardarTalle(39)">39</button>
                    <button id="40" type="button" class="btn btn-secondary" onclick="guardarTalle(40)">40</button>
                    <button id="41" type="button" class="btn btn-secondary" onclick="guardarTalle(41)">41</button>
                    <button id="42" type="button" class="btn btn-secondary" onclick="guardarTalle(42)">42</button>
                    <button id="43" type="button" class="btn btn-secondary" onclick="guardarTalle(43)">43</button>
                    <button id="44" type="button" class="btn btn-secondary" onclick="guardarTalle(44)">44</button>
                    <button id="45" type="button" class="btn btn-secondary" onclick="guardarTalle(45)">45</button>
                </div>
    </div>
    <br>
    <button id="agregarAlCarrito" class="btn btn-success">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById("renderPreview").innerHTML=render;
    seleccionTalle()
}
irAPreview()


function seleccionTalle()
{   let objeto=JSON.parse(localStorage.getItem("productoPreviewLS"))
        if(objeto.stock37 < 1)
        {
            document.getElementById("37").setAttribute("disabled","disabled");
        }
        if(objeto.stock38 < 1)
        {
            document.getElementById("38").setAttribute("disabled","disabled");
        }
        if(objeto.stock39 < 1)
        {
            document.getElementById("39").setAttribute("disabled","disabled");
        }
        if(objeto.stock40 < 1)
        {
            document.getElementById("40").setAttribute("disabled","disabled");
        }
        if(objeto.stock41 < 1)
        {
            document.getElementById("41").setAttribute("disabled","disabled");
        }
        if(objeto.stock42 < 1)
        {
            document.getElementById("42").setAttribute("disabled","disabled");
        }
        if(objeto.stock43 < 1)
        {
            document.getElementById("43").setAttribute("disabled","disabled");
        }
        if(objeto.stock44 < 1)
        {
            document.getElementById("44").setAttribute("disabled","disabled");
        }
        if(objeto.stock45 < 1)
        {
            document.getElementById("45").setAttribute("disabled","disabled");
        }
}

/*----------------------------------------Funciones para el agregado al carrito----------------------------------*/


function guardarTalle(talle)
{
    localStorage.setItem("TalleSeleccionado",talle)
}

function guardarCarritoLS(carrito)
{
    localStorage.setItem("carrito",JSON.stringify(carrito))
}
function cargarCarritoLS()
{
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


function checkCarrito(id,talle){
    const carrito=cargarCarritoLS();
    return carrito.some(compra=> compra.ID === id && compra.talle === talle)
}


let agregarAlCarrito=document.getElementById("agregarAlCarrito")
    agregarAlCarrito.addEventListener("click",agregarItem)

    function agregarItem()
        {   
            
            let traerItemID=JSON.parse(localStorage.getItem("ID"));
            let traerTalle=JSON.parse(localStorage.getItem("TalleSeleccionado"));
            if (traerTalle == null || traerTalle== undefined){

                Swal.fire({
                    icon: 'error',
                    title: 'Epa!',
                    text: 'Olvidó elegir un talle!',
                })
            }
            else {
            
            let traerProducto=JSON.parse(localStorage.getItem("productoPreviewLS"));
            traerProducto.talle=traerTalle;
            
            let carrito=cargarCarritoLS();
            

            if(checkCarrito(traerProducto.ID,traerProducto.talle))
                {
                let pos=carrito.findIndex(indexItem => indexItem.ID === traerItemID);
                carrito[pos].cantidad+=1;
                }
            else{
                if(!traerProducto.cantidad)
                {traerProducto.cantidad=1;}
                carrito.push(traerProducto)
            }
        
            guardarCarritoLS(carrito);
            localStorage.removeItem("TalleSeleccionado");
            renderContadorCarrito();
        };
        }





/*Debo limpiar el selector de talle al agregar al carrito o al cargar otra página ya que podría quedar seleccionado al entrar en
la preview de un producto que no posee dicho talle en stock*/
        window.addEventListener('beforeunload', function() {
            localStorage.removeItem('TalleSeleccionado');
            renderContadorCarrito();
        });
        window.onload=renderContadorCarrito();