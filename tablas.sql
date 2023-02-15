create table
    autor(
        id_autor int auto_increment,
        nombre varchar(30),
        pais varchar(30),
        año date,
        primary key (id_autor)
    );

create table
    editorial(
        id_editorial int auto_increment,
        codigo varchar(30),
        nombre varchar(30),
        primary key (id_editorial)
    );

create table
    detalles(
        id_detalle int auto_increment,
        numero varchar(30),
        libro varchar(30),
        cantidad int,
        estado varchar(50),
        primary key (id_detalle)
    );

create table
    clientes(
        id_cliente int auto_increment,
        nombres varchar(30),
        apellidos varchar(30),
        direccion varchar(50),
        telefono varchar(20),
        primary key (id_cliente)
    );

create table
    usuarios(
        id_usuario int auto_increment,
        nombres varchar(30),
        apellidos varchar(30),
        nombre_usuario varchar(50),
        password varchar(40),
        cargo varchar(30),
        estado varchar(30),
        primary key (id_usuario)
    );

create table
    categorias(
        id_categoria int auto_increment,
        nombre varchar(30),
        primary key (id_categoria)
    );

create table
    libros(
        id_libro int auto_increment,
        nombre varchar(30),
        id_autor int,
        id_editorial int,
        tema varchar(20),
        numero_edicion int,
        id_categoria int,
        precio float,
        estado varchar(30),
        observacion varchar(60),
        stock int,
        primary key (id_libro),
        foreign key(id_autor) references autor(id_autor),
        foreign key (id_editorial) references editorial(id_editorial),
        foreign key(id_categoria) references categorias(id_categoria)
    );

create table
    cabeceras(
        id_cabecera int auto_increment,
        fecha_prestamo date,
        fecha_devolucion date,
        id_usuario int,
        id_cliente int,
        id_detalle int,
        primary key(id_cabecera),
        foreign key(id_usuario) references usuarios(id_usuario),
        foreign key(id_cliente) references clientes(id_cliente),
        foreign key(id_detalle) references detalles(id_detalle)
    );