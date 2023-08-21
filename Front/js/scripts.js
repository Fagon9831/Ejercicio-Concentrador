let spanP=document.querySelector(".spanMain")        
spanP=document.createElement('span')
spanP.textContent=""
spanP.classList.add("spanMain")
document.querySelector(".section-options").appendChild(spanP)
function registerProduct() {
    let form = document.querySelector(".section-results__form")
   
    if (form) {
        form.innerHTML = ""   
        document.querySelector(".section-results__button").innerHTML = ""
        document.querySelector(".section-results__venta").innerHTML = ""

    }
    spanP.textContent="Registrar Empleado!!"
    let span2=document.createElement('span')
    span2.textContent="Nombre: "
    document.querySelector(".section-results__form").appendChild(span2)

    let name = document.createElement('input');
    name.classList.add("section-results__form");
    name.id = "iName"
    document.querySelector(".section-results__form").appendChild(name)
    let span3=document.createElement('span')
    span3.textContent="Apellido: "
    document.querySelector(".section-results__form").appendChild(span3)

    let description = document.createElement('input');
    description.classList.add("section-results__form");
    description.id = "iDescription"
    document.querySelector(".section-results__form").appendChild(description)
    let span4=document.createElement('span')
    span4.textContent="Precio: "
    document.querySelector(".section-results__form").appendChild(span4)
    let price = document.createElement('input');
    price.classList.add("section-results__form");
    price.id = "iPrice"
    document.querySelector(".section-results__form").appendChild(price)
    let span5=document.createElement('span')
    span5.textContent="Codigo SKU: "
    document.querySelector(".section-results__form").appendChild(span5)
    let sku = document.createElement('input');
    sku.classList.add("section-results__form");
    sku.id = "iSku"
    document.querySelector(".section-results__form").appendChild(sku)
    let button = document.createElement('button');
    button.textContent = "Registar Producto"
    button.classList.add("section-results__button");
    button.addEventListener("click", async () => {
        let Sname = document.getElementById('iName').value
        let Sdescription = document.getElementById('iDescription').value
        let Sprice = document.getElementById('iPrice').value
        let Ssku = document.getElementById('iSku').value
        const myArray = new BigUint64Array(1);
        var infoSend = {
            nombre: Sname,
            descripcion: Sdescription,
            precio: Sprice,
            sku: Ssku,
            product_code: Sname.slice(0, 8) + "+" + crypto.getRandomValues(myArray)
        }
        //console.log(infoSend)
        const response = await fetch('http://localhost:3000/crearProducto', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoSend)
        })
    })
    document.querySelector(".section-results__button").appendChild(button)
}
function registerClient() {
    let form = document.querySelector(".section-results__form")
    if (form) {
        form.innerHTML = ""
        document.querySelector(".section-results__button").innerHTML = ""
        document.querySelector(".section-results__venta").innerHTML = ""
    }
    spanP.textContent="Registrar Cliente!!"
    let span1=document.createElement('span')
    span1.textContent="Nombre: "
    document.querySelector(".section-results__form").appendChild(span1)
    let name = document.createElement('input');
    name.classList.add("section-results__form");
    name.id = "iName"
    document.querySelector(".section-results__form").appendChild(name)
    let span2=document.createElement('span')
    span2.textContent="Apellido: "
    document.querySelector(".section-results__form").appendChild(span2)
    let apellido = document.createElement('input');
    apellido.classList.add("section-results__form");
    apellido.id = "iApellido"
    document.querySelector(".section-results__form").appendChild(apellido)
    let span3=document.createElement('span')
    span3.textContent="Correo: "
    document.querySelector(".section-results__form").appendChild(span3)
    let correo = document.createElement('input');
    correo.classList.add("section-results__form");
    correo.id = "iCorreo"
    document.querySelector(".section-results__form").appendChild(correo)
    let span4=document.createElement('span')
    span4.textContent="Telefono: "
    document.querySelector(".section-results__form").appendChild(span4)
    let telefono = document.createElement('input');
    telefono.classList.add("section-results__form");
    telefono.id = "iTelefono"
    document.querySelector(".section-results__form").appendChild(telefono)
    let span5=document.createElement('span')
    span5.textContent="Direccion: "
    document.querySelector(".section-results__form").appendChild(span5)
    let direccion = document.createElement('input');
    direccion.classList.add("section-results__form");
    direccion.id = "iDireccion"
    document.querySelector(".section-results__form").appendChild(direccion)
    let span6=document.createElement('span')
    span6.textContent="Codigo Postal: "
    document.querySelector(".section-results__form").appendChild(span6)
    let codigo_postal = document.createElement('input');
    codigo_postal.classList.add("section-results__form");
    codigo_postal.id = "iCodigo_postal"
    document.querySelector(".section-results__form").appendChild(codigo_postal)
    let span7=document.createElement('span')
    span7.textContent="Barrio: "
    document.querySelector(".section-results__form").appendChild(span7)
    let barrio = document.createElement('input');
    barrio.classList.add("section-results__form");
    barrio.id = "iBarrio"
    document.querySelector(".section-results__form").appendChild(barrio)
    let button = document.createElement('button');
    button.textContent = "Registar Cliente"
    button.classList.add("section-results__button");
    button.addEventListener("click", async () => {
        let Sname = document.getElementById('iName').value
        let Sapellido = document.getElementById('iApellido').value
        let Scorreo = document.getElementById('iCorreo').value
        let Stelefono = document.getElementById('iTelefono').value
        let Sdireccion = document.getElementById('iDireccion').value
        let Scodigo_postal = document.getElementById('iCodigo_postal').value
        let Sbarrio = document.getElementById('iBarrio').value
        const myArray = new BigUint64Array(1);
        var infoSend = {
            nombre: Sname,
            apellido: Sapellido,
            correo: Scorreo,
            telefono: Stelefono,
            direccion: Sdireccion,
            codigo_postal: Scodigo_postal,
            barrio: Sbarrio,
            cliente_code: Sname.slice(0, 12) + "+" + crypto.getRandomValues(myArray)
        }
        const response = await fetch('http://localhost:3000/crearCliente', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoSend)
        })
    })
    document.querySelector(".section-results__button").appendChild(button)
}
let productos = []
async function registerSale() {
    let form = document.querySelector(".section-results__form")
    if (form) {
        form.innerHTML = ""
        document.querySelector(".section-results__button").innerHTML = ""
        document.querySelector(".section-results__venta").innerHTML = ""
    }
    spanP.textContent="Registrar Venta!!"
    const response = await fetch('http://localhost:3000/consultarCliente')
    const result = await response.json()
    let cliente = document.createElement('select');
    cliente.classList.add("section-results__form");
    cliente.id = "iCliente"
    cliente.innerHTML = "<option>Seleccione el cliente</option>"
    document.querySelector(".section-results__form").appendChild(cliente)
    result.forEach(element => {
        let opcionS = document.createElement('option');
        opcionS.classList.add("section-results__form");
        opcionS.id = element.cliente_code
        opcionS.textContent = element.nombre + " " + element.apellido
        cliente.appendChild(opcionS)
    });
    const responseP = await fetch('http://localhost:3000/consultarProductos')
    const resultP = await responseP.json()
    let producto = document.createElement('select');
    producto.classList.add("section-results__venta");
    producto.id = "sel-id"
    producto.innerHTML = "<option>Seleccione el producto</option>"
    producto.onchange = () => {
        let selDescripcionP = document.getElementById('sel-id').value
        for (let l = 0; l < productos.length; l++) {
            if (productos[l][1] == selDescripcionP) {
                let inp = document.getElementById('iValor')
                inp.textContent = productos[l][2]
            }

        }
    }
    let cont = 0
    resultP.forEach(element => {
        let opcionS = document.createElement('option');
        opcionS.classList.add("section-results__venta");
        opcionS.id = element.product_code
        opcionS.textContent = element.nombre
        producto.appendChild(opcionS)

        for (var i = 0; i < 3; i++) {
            var fila = [];
            fila[0] = element.product_code
            fila[1] = element.nombre
            fila[2] = element.precio
            productos.push(fila);
            cont++;
        }
    });
    document.querySelector(".section-results__venta").appendChild(producto)

    let valor = document.createElement('span');
    valor.classList.add("section-results__venta");
    valor.id = "iValor"    
    valor.placeholder="Valor"
    document.querySelector(".section-results__venta").appendChild(valor)

    let cantidad = document.createElement('input');
    cantidad.classList.add("section-results__venta");
    cantidad.id = "iCantidad"
    cantidad.type="number"
    cantidad.placeholder="Cantidad"
    document.querySelector(".section-results__venta").appendChild(cantidad)

    let table = document.createElement('table');
    table.classList.add("section-results__venta");
    table.id = "iTable"

    let colP = document.createElement('tr');
    colP.classList.add("section-results__venta");
    colP.id = "iTable"
    colP.innerHTML = `<th>Producto</th><th>Cantidad</th><th>Valor Unidad</th><th>Valor</th>`
    let id=""
    let button = document.createElement('button');
    button.classList.add("section-results__venta");
    button.id = "iButton"
    button.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" ><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>`
    button.addEventListener("click", () => {
        cliente.disabled=true
        let product = document.getElementById('sel-id').value;
        let productid = document.getElementById('sel-id')
        id = productid.options[productid.selectedIndex].id
        //console.log(id)
        let cant = document.getElementById('iCantidad').value;
        let valorF = parseInt(document.getElementById('iValor').textContent) * cant
        let valorU = document.getElementById('iValor').textContent

        let colS = document.createElement('tr');
        colS.classList.add("section-results__venta");
        colS.innerHTML = `<td id='${id}'>${product}</td>
                    <td>${cant}</td>
                    <td>${valorU}</td>
                    <td>${valorF}</td>`
        table.appendChild(colS)

    })
    document.querySelector(".section-results__venta").appendChild(button)
    document.querySelector(".section-results__venta").appendChild(table)
    table.appendChild(colP)
    let buttonSend = document.createElement('button');
    buttonSend.classList.add("section-results__venta");
    buttonSend.id = "iButtonSend"
    buttonSend.textContent = "Realizar Venta"
    buttonSend.addEventListener("click", async() => {
        let clientSe = document.getElementById('iCliente')
        let Clienteid = clientSe.options[clientSe.selectedIndex].id
        var now = new Date();
        let sFecha=now.getFullYear()+"-"+(now.getMonth()+1) +"-"+now.getDate()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
        var table = document.getElementById("iTable");
        var matrix = [];
        let code_venta=now.getFullYear()+""+(now.getMonth()+1) +""+now.getDate()+""+now.getHours()+""+now.getMinutes()+""+now.getSeconds()+"-"+Clienteid;
        let factura_code=now.getFullYear()+""+(now.getMonth()+1) +""+now.getDate()+"-"+Clienteid;
        let sValor=0
        for (var i = 1, row; row = table.rows[i]; i++) {        
            sValor= row.cells[3].textContent;
        }
        var infoVenta = {
            fecha: sFecha,
            cliente_code: Clienteid,
            valor: sValor,
            venta_code: code_venta
        }
        const response = await fetch('http://localhost:3000/crearVenta', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoVenta)
        })
        for (var i = 1, row; row = table.rows[i]; i++) {
            var infoFactura = {
                venta_code: code_venta,
                producto_code: row.cells[0].id,
                cantidad: row.cells[1].textContent,
                factura_code: factura_code
            }
           const response = await fetch('http://localhost:3000/crearFactura', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoFactura)
            })
        }
    })
    document.querySelector(".section-results__venta").appendChild(buttonSend)
}

async function loadTable() {

    let fil1 = document.createElement('td')
    fil1.classList.add("section-results__table")
    fil1.appendChild(producto)

    let col = document.createElement('tr')
    col.classList.add("section-results__table")
    col.id = "iCol"
    col.appendChild(fil1)
    col.innerHTML += `<td><input class='fil2'></td><td><input class='fil3'></td><td><input class='fil4'></td><td><button onclick='loadTable()'>+</button></td>`
    document.querySelector("#iTable").appendChild(col)

}

let btnRegisterProduct = document.getElementById('register-product')
btnRegisterProduct.addEventListener("click", registerProduct)
let btnRegisterClient = document.getElementById('register-client')
btnRegisterClient.addEventListener("click", registerClient)
let btnRegisterSale = document.getElementById('register-sale')
btnRegisterSale.addEventListener("click", registerSale)
