let randomNumber = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let mensaje = "";
function adivina() {
    let valor = parseInt(document.getElementById("valor").value);

    if (isNaN(valor) || valor < 1 || valor > 100) {
        mensaje = "Por favor, ingresa un número entre 1 y 100.";
        document.getElementById("mensaje").innerHTML = mensaje;
        return;
    }

    intentos++;
    

    if (valor === randomNumber) {
        mensaje = "Felicidades! Has adivinado el número en " + intentos + " intentos.";
        document.getElementById("mensaje").innerHTML = mensaje;
        document.getElementById("intentos").innerHTML = intentos;
        
        resetGame();
    } 
    else if (valor > randomNumber) {
        mensaje = "El número es menor que " + valor;
    } 
    else {
        mensaje = "El número es mayor que " + valor;
    }

    document.getElementById("mensaje").innerHTML =mensaje;
    document.getElementById("intentos").innerHTML = intentos;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("valor").value = ""; // Limpiar el campo de entrada
    document.getElementById("intentos").innerHTML = ""; // Limpiar el contador de intentos
}
