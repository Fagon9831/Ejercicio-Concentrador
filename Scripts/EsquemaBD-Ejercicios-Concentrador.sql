-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.clientes_id_cliente_seq;

CREATE SEQUENCE public.clientes_id_cliente_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.facturas_id_factura_seq;

CREATE SEQUENCE public.facturas_id_factura_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.productos_id_producto_seq;

CREATE SEQUENCE public.productos_id_producto_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ventas_id_venta_seq;

CREATE SEQUENCE public.ventas_id_venta_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.clientes definition

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes (
	id_cliente serial4 NOT NULL,
	nombre varchar NOT NULL,
	apellido varchar NOT NULL,
	correo varchar NOT NULL,
	telefono int8 NOT NULL,
	direccion varchar NOT NULL,
	codigo_postal int8 NOT NULL,
	barrio varchar NOT NULL,
	cliente_code varchar NOT NULL,
	CONSTRAINT clientes_cliente_code_key UNIQUE (cliente_code),
	CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente)
);


-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos (
	id_producto serial4 NOT NULL,
	nombre varchar NOT NULL,
	descripcion varchar NOT NULL,
	precio numeric NOT NULL,
	sku varchar NOT NULL,
	product_code varchar NOT NULL,
	CONSTRAINT productos_pkey PRIMARY KEY (id_producto),
	CONSTRAINT productos_product_code_key UNIQUE (product_code)
);


-- public.ventas definition

-- Drop table

-- DROP TABLE public.ventas;

CREATE TABLE public.ventas (
	id_venta serial4 NOT NULL,
	fecha timestamp NOT NULL,
	cliente_code varchar NOT NULL,
	valor int8 NOT NULL,
	venta_code varchar NOT NULL,
	CONSTRAINT ventas_pkey PRIMARY KEY (id_venta),
	CONSTRAINT ventas_venta_code_key UNIQUE (venta_code),
	CONSTRAINT fk_cliente_code FOREIGN KEY (cliente_code) REFERENCES public.clientes(cliente_code)
);


-- public.factura definition

-- Drop table

-- DROP TABLE public.factura;

CREATE TABLE public.factura (
	id_factura int4 NOT NULL DEFAULT nextval('facturas_id_factura_seq'::regclass),
	venta_code varchar NOT NULL,
	producto_code varchar NOT NULL,
	cantidad int4 NOT NULL,
	factura_code varchar NOT NULL,
	CONSTRAINT factura_pkey PRIMARY KEY (id_factura),
	CONSTRAINT fk_producto_code FOREIGN KEY (producto_code) REFERENCES public.productos(product_code),
	CONSTRAINT fk_venta_code FOREIGN KEY (venta_code) REFERENCES public.ventas(venta_code)
);
