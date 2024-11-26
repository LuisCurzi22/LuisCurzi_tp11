const prompt = require('prompt-sync')();

console.log(`Bienvenido
    1* Administrador
    2* Asistente
    3* Invitado`)

var perfil = +prompt("Debe especificar el perfil del usuario: ");

switch(perfil){
    case 1:
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case 2:
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    case 3:
        console.log("Usted sólo tiene permisos de consultar datos");
        break;
    case 4: 
        console.log("Debe especificar un perfil válido");
        break;
}