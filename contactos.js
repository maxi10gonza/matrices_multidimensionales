const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contactos = [];

function solicitarDatos() {
    rl.question("Ingrese nombre: ", function(nombre) {
        rl.question("Ingrese apellido: ", function(apellido) {
            rl.question("Ingrese DNI: ", function(dni) {
                let telefonos = [];
                
                function agregarTelefono() {
                    rl.question("Ingrese un teléfono (o presione Enter para finalizar): ", function(telefono) {
                        if (telefono) {
                            telefonos.push(telefono);
                        } else {
                            contactos.push([nombre, apellido, dni, telefonos]);
                            rl.question("¿Desea ingresar otra persona? (si/no): ", function(respuesta) {
                                if (respuesta.toLowerCase() === 'si') {
                                    solicitarDatos();
                                } else {
                                    console.log("\nLista de contactos:");
                                    console.log(contactos);
                                    rl.close();
                                }
                            });
                        }
                    });
                }
                agregarTelefono();
            });
        });
    });
}

solicitarDatos();