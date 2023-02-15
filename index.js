var mysql = require('mysql');
var express = require('express');
var url = require('url');


var app = express(); // usar express
app.use(express.json()); // usar json

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});



app.get('/dbarahona/api/autor/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from autor where id_autor = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/autor/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from autor", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/autor/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into autor(nombre, pais, año) values (?, ?, ?)", [req.body.nombre, req.body.pais, req.body.fecha], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/autor/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.nombre, req.body.pais, req.body.fecha, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update autor set nombre = ?, pais = ?, año = ? where id_autor = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/autor/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from autor where id_autor = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});




app.get('/dbarahona/api/editorial/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from editorial where id_editorial = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/editorial/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from editorial", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/editorial/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into editorial (codigo, nombre) values (?, ?)", [req.body.codigo, req.body.nombre], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/editorial/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.codigo, req.body.nombre, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update editorial set codigo = ?, nombre = ? where id_editorial = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/editorial/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from editorial where id_editorial = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});



app.get('/dbarahona/api/detalles/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from detalles where id_detalle = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
    });
});
app.get('/dbarahona/api/detalles/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from detalles", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/detalles/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into detalles (numero, libro, cantidad, estado) values (?, ?, ?, ?)", [req.body.numero, req.body.libro, req.body.cantidad, req.body.estado], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/detalles/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.numero, req.body.libro, req.body.cantidad, req.body.estado, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update detalles set numero = ?, libro = ?, cantidad = ?, estado = ? where id_detalle = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/detalles/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from detalles where id_detalle = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});




app.get('/dbarahona/api/clientes/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from clientes where id_cliente = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/clientes/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from clientes", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/clientes/', function (req, res) {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into clientes (nombres, apellidos, direccion, telefono) values (?, ?, ?, ?)", [req.body.nombres, req.body.apellidos, req.body.direccion, req.body.telefono], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/clientes/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.nombres, req.body.apellidos, req.body.direccion, req.body.telefono, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update clientes set nombres = ?, apellidos = ?, direccion = ?, telefono = ? where id_cliente = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/clientes/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from clientes where id_cliente = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});



app.get('/dbarahona/api/usuarios/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from usuarios where id_usuario = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/usuarios/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from usuarios", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/usuarios/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into usuarios (nombres, apellidos, nombre_usuario, password, cargo, estado) values (?, ?, ?, ?, ?, ?)", [req.body.nombres, req.body.apellidos, req.body.usuario, req.body.contra, req.body.cargo, req.body.estado], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/usuarios/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.nombres, req.body.apellidos, req.body.usuario, req.body.contra, req.body.cargo, req.body.estado, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update usuarios set nombres = ?, apellidos = ?, nombre_usuario = ?, cargo = ?, estado = ? where id_usuario = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/usuarios/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from usuarios where id_usuario = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});



app.get('/dbarahona/api/categorias/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from categorias where id_categoria = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
    });
});
app.get('/dbarahona/api/categorias/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from categorias", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/categorias/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into categorias (nombre) values (?)", [req.body.nombre], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/categorias/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.nombre,req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update categorias set nombre = ? where id_categoria = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/categorias/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });

    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from categorias where id_categoria = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});


app.get('/dbarahona/api/libros/:id', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from libros where id_libro = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/libros/', function (req, res) {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from libros", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/libros/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into libros (nombre, id_autor, id_editorial, tema, numero_edicion, id_categoria, precio, estado, observacion, stock) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.nombre, req.body.id_autor, req.body.id_editorial, req.body.tema, req.body.numero_edicion, req.body.id_categoria, req.body.precio, req.body.estado, req.body.observacion, req.body.stock], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/libros/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.nombre, req.body.id_autor, req.body.id_editorial, req.body.tema, req.body.numero_edicion, req.body.id_categoria, req.body.precio, req.body.estado, req.body.observacion, req.body.stock, req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update libros set nombre = ?, id_autor = ?, id_editorial = ?, tema = ?, numero_edicion = ?, id_categoria = ?, precio = ?, estado = ?, observacion = ?, stock = ? where id_libro = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/libros/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from libros where id_libro = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});



app.get('/dbarahona/api/cabeceras/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from cabeceras where id_cabecera = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.get('/dbarahona/api/cabeceras/', function (req, res) {

    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("select * from cabeceras", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});
app.post('/dbarahona/api/cabeceras/', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("insert into cabeceras (fecha_prestamo, fecha_devolucion, id_usuario, id_cliente, id_detalle) values (?, ?, ?, ?, ?)", [req.body.fecha_prestamo, req.body.fecha_devolucion, req.body.id_usuario, req.body.id_cliente, req.body.id_detalle], function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se guardo");
                }
            });
        }
        con.end();
    });
});
app.put('/dbarahona/api/cabeceras/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    let parametros = [req.body.fecha_prestamo, req.body.fecha_devolucion, req.body.id_usuario, req.body.id_cliente, req.body.id_detalle,req.params.id];
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("update cabeceras set fecha_prestamo = ?, fecha_devolucion = ?, id_usuario = ?, id_cliente = ?, id_detalle = ? where id_cabecera = ?", parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                    console.log("se actualizo");
                }
            });
        }
        con.end();
    });
});
app.delete('/dbarahona/api/cabeceras/:id', function (req, res) {
    let con = mysql.createConnection({
        host: "localhost",
        user: "desfhyeb_dbarahona",
        password: "Hola12345$",
        database: "desfhyeb_dbarahona"
    });
    con.connect(function (err) {
        if (err) {
            res.send(err);
        } else {
            con.query("delete from cabeceras where id_cabecera = ?", req.params.id, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(JSON.stringify(result));
                }
            });
        }
        con.end();
    });
});

app.listen();