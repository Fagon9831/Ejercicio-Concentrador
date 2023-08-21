const {Router}=require('express')
const {crearProducto,crearCliente,crearVenta,buscarClientes,buscarProductos,crearFactura}=require('../Controllers/controller')

const router = Router();
router.post('/crearProducto',crearProducto)
router.post('/crearCliente',crearCliente)
router.post('/crearVenta',crearVenta)
router.get('/consultarCliente',buscarClientes)
router.get('/consultarProductos',buscarProductos)
router.post('/crearFactura',crearFactura)

module.exports=router;