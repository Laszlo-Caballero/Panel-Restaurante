
insert into Categoria(categoria) values
("Vegetariana"),
("Comida Rapida"),
("Ensaladas"),
("Guisos"),
("Carnes"),
("Pizzas");


insert into Categoria(categoria) values
("Carne");


use restaurante;

select * from Usuario;


update usuario set tipo = "admin" where idUsuario = 2;


select C.idComida , (
select I.imagenPath from imagencomida as IC inner join Imagen as I on I.idImagen = IC.idImagen where C.idComida = IC.IdComida limit 1
) as imagePath, C.nombre, Round(C.precio, 2) as precio, C.estado, C.descripcion, C.vendidos from Comida as C;


select * from comida;

select imagenpath ;

select * from imagen;

select * from imagencomida;

insert into Imagencomida (idImagen, idComida) values (2, 1);
insert into CategoriaComida (idCategoria, idComida) values (5, 1);

select * from categoriacomida;


delete from categoria where idCategoria = 7;

select C.idCategoria, C.categoria from Categoria as C inner join CategoriaComida as CC on C.idCategoria = CC.idCategoria where CC.idComida = 1;

insert into categoriaComida (idCategoria, idComida) values (6 ,1);

select * from categoria;

-- insert into Comida (nombre, precio, descripcion) values(?,?,?)


select * from imagen;

select IC.idImagen  ,I.ImagenPath from imagencomida as IC inner join imagen as I on  IC.idImagen = I.idImagen where IC.idComida = 1 ;

select * from imagen;




insert into imagen (ImagenPath) values ("file-1720876025607");