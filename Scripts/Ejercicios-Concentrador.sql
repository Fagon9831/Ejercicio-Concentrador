--ID de los clientes de la Ciudad de Monterrey
select id_cliente  from clientes  where barrio ='Patiobonito';
--ID y descripción de los productos que cuesten menos de 15 pesos
select id_producto from productos where precio<2500;
--ID y nombre de los clientes, cantidad vendida, y descripción del producto, en las ventas en las cuales se vendieron más de 10 unidades.
select c.id_cliente,concat(c.nombre,' ',c.apellido) as nombre ,f.cantidad , p.descripcion  from clientes c
inner join ventas v  on c.cliente_code =v.cliente_code  
inner join factura f  on v.venta_code =f.venta_code 
inner join productos p  on f.producto_code =p.product_code 
where  f.cantidad >10;
--ID y nombre de los clientes que no aparecen en la tabla de ventas (Clientes que no han comprado productos)
select c.id_cliente, concat( c.nombre,' ',c.apellido)as nombre  from clientes c 
left join ventas v on c.cliente_code =v.cliente_code 
where v.id_venta isnull ;
--ID y nombre de los clientes que han comprado todos los productos de la empresa.
select id_cliente,concat(nombre,' ',apellido) as nombre 
from clientes 
where cliente_code in(
select v.cliente_code  from factura f 
inner join ventas v on v.venta_code =f.venta_code
inner join clientes c on c.cliente_code  =v.cliente_code 
group by v.cliente_code
having count( distinct f.producto_code)=(select count(product_code) from productos));
--ID y nombre de cada cliente y la suma total (suma de cantidad) de los productos que ha comprado
select c.id_cliente,concat(nombre,' ',apellido) as nombre, sum(v.valor) as Total from clientes c
left  join ventas v on v.cliente_code=c.cliente_code 
group by c.id_cliente;
--ID de los productos que no han sido comprados por clientes de Guadalajara.
select nombre from productos where product_code  not in (
select p.product_code  from  factura f
inner join ventas v on  f.venta_code = v.venta_code 
inner join clientes c on v.cliente_code = c.cliente_code 
inner join productos p ON  p.product_code  = f.producto_code 
where c.barrio ='Gaitana');
--ID de los productos que se han vendido a clientes de Monterrey y que también se han vendido a clientes de Cancún.
select distinct (p.id_producto)  from  factura f
inner join ventas v on  f.venta_code = v.venta_code 
inner join clientes c on v.cliente_code = c.cliente_code 
inner join productos p ON  p.product_code  = f.producto_code 
where c.barrio in('Gaitana','Cota');
--Nombre de las ciudades en las que se han vendido todos los productos. 
select c.barrio  from clientes  c
inner join ventas v on v.cliente_code =c.cliente_code 
inner join factura f on f.venta_code  =v.venta_code 
inner join productos p on p.product_code =f.producto_code 
where barrio in (select barrio from	clientes)
group by c.barrio 
having count(distinct p.product_code)=(select count(product_code) from productos);