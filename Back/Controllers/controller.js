const { Pool } = require('pg')
const conexion = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Fabian25*',
    database: 'devf',
    port: 5432
})
async function crearProducto(req,res){
    let {nombre,        
        descripcion,
        precio,
        sku,
        product_code
        } = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    productos(nombre,descripcion,precio,sku,product_code)
    VALUES($1,$2,$3,$4,$5)`,[nombre,descripcion,precio,sku,product_code])
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base)
}
async function crearCliente(req,res){
    let {
        nombre,        
        apellido,
        correo,
        telefono,
        direccion,
        codigo_postal,
        barrio,
        cliente_code
        } = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    clientes(nombre,apellido,correo,telefono,direccion,codigo_postal,barrio,cliente_code)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[nombre,apellido,correo,telefono,direccion,codigo_postal,barrio,cliente_code])
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base)
}
async function crearVenta(req,res){
    let {fecha,        
        cliente_code,
        valor,        
        venta_code
        } = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    ventas(fecha,cliente_code,valor,venta_code)
    VALUES($1,$2,$3,$4)`,[fecha,cliente_code,valor,venta_code])
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base)
}
async function crearFactura(req,res){
    let {venta_code,        
        producto_code,
        cantidad,
        factura_code
        } = req.body
    let respuesta_base = await conexion.query(`INSERT INTO 
    factura(venta_code,producto_code,cantidad,factura_code)
    VALUES($1,$2,$3,$4)`,[venta_code,producto_code,cantidad,factura_code])
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base)
}
async function buscarClientes(req,res){
    let respuesta_base = await conexion.query("SELECT nombre,apellido, cliente_code FROM clientes")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base.rows)
}
async function buscarProductos(req,res){
    let respuesta_base = await conexion.query("SELECT * FROM productos")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.status(200).json(respuesta_base.rows)
}


module.exports = {
    crearProducto,
    crearCliente,
    crearVenta,
    crearFactura,
    buscarClientes,
    buscarProductos
}
