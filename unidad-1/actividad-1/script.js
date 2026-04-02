const screen = document.getElementById("screen");       /*busco el input con el id screen y guarda el elemento en screen*/ 

function add(value) {
    screen.value += value;                    /*screen.value es el contenido actual y +=value le pone algo al final*/
}                                               /*concatena texto, no suma */

function calculate() {                           /*esto se ejecuta al apretar = */
    try {
        screen.value = eval(screen.value);      /* aca se interpreta lo que esta en pantalla como calculo y lo pone en la pantalla*/
    } catch {
        alert("Error en la operación");         /*si hay error */
    }
}

function clearScreen() {
    screen.value = "";                    /*para borrar se pone un string vacio */
}



