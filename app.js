const contraseña = localStorage.getItem("contraseña");

GuardadoLocalStorage();

revisarContraseñaLocalStorage();

function revisarContraseñaLocalStorage() {
    if (contraseña === null) {
        insertarContraseñaLocalStorage();
    } else {
        contraseñaAlEntrar();
    }
}

function contraseñaAlEntrar() {
    const pedirContraseña = prompt("¿Cuál es tu contraseña?");
    if (pedirContraseña === contraseña) {
        alert("Contraseña correcta!");
    } else {
        alert("Contraseña incorrecta, vuelva a intentarlo.")
        contraseñaAlEntrar();
    }
}

function insertarContraseñaLocalStorage() {
    const nuevaContraseña = prompt("¿Cómo quieres que sea tu contraseña?")
    if (nuevaContraseña == "") {
        alert("Coloque una contraseña correcta.")
        insertarContraseñaLocalStorage();
    } else {
        localStorage.setItem("contraseña", nuevaContraseña);
        alert("Contraseña añadida!")
    }
}

function GuardadoLocalStorage() {
    console.log(contraseña);
}