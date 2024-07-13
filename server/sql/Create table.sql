create table Usuario(
	idUsuario int primary key auto_increment,
    nombre varchar(25) not null,
    email varchar(255) not null unique,
    contraseña text,
    tipo varchar(50) default 'empleado',
    imagen text
);


create table Categoria(
	idCategoria int primary key auto_increment,
    categoria varchar(50) not null
);
create table comida(
	idComida int primary key auto_increment,
    nombre varchar(25) not null,
    precio float not null,
    estado boolean default true,
    descripcion text not null,
    vendidos int default 0
);

create table categoriaComida(
	idCategoria int,
    idComida int,
    primary key (idComida, idCategoria),
    foreign key (idComida) references Comida(idComida),
    foreign key (idCategoria) references Categoria(idCategoria)
);

create table Imagen(
	idImagen int primary key auto_increment,
    ImagenPath text not null
);


create table imagenComida(
	idImagen int,
	idComida int,
    primary key(idImagen, IdComida),
    foreign key (idImagen) references Imagen(IdImagen),
    foreign key (idComida) references Comida(idComida)
);
