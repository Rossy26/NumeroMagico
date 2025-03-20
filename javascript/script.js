let numeroMagico;
let intentos;
let intentosPrevios;

function iniciarJuego() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    intentosPrevios = [];
    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos-previos").textContent = "Ninguno";
    document.getElementById("ingresar-numero").value = "";
    document.getElementById("ingresar-numero").disabled = false;
    document.getElementById("intento").disabled = false;
    document.getElementById("reiniciarJuego").style.display = "none";
    document.getElementById("intentos-restantes").textContent = 10;
    document.getElementById("gif-resultado").style.display = "none";

}   

document.getElementById("intento").addEventListener("click", function() {
    let inputNumero = parseInt(document.getElementById("ingresar-numero").value);
    if (isNaN(inputNumero) || inputNumero < 1 || inputNumero > 100) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa un número válido entre 1 y 100.";
        return;
    }
    intentos++;
    document.getElementById("intentos-restantes").textContent = 10 - intentos;
    intentosPrevios.push(inputNumero);
    document.getElementById("intentos-previos").textContent = intentosPrevios.join(", ");
    
    if (inputNumero === numeroMagico) {
        document.getElementById("mensaje").textContent = "¡Felicidades! Adivinaste el número en " + intentos + " intentos.";
        finalizarJuego();
    } else if (intentos >= 10) {
        document.getElementById("mensaje").textContent = "Lo siento, has agotado tus intentos. El número era " + numeroMagico + ".";
        finalizarJuego();
    } else {
        document.getElementById("mensaje").textContent = inputNumero < numeroMagico ? "El número es mayor." : "El número es menor.";
    }
});

//desabilita el campo de entrada y el botón de intento
function finalizarJuego() {
    document.getElementById("ingresar-numero").disabled = true;
    document.getElementById("intento").disabled = true;
    document.getElementById("reiniciarJuego").style.display = "block";

    let gifResultado = document.getElementById("gif-resultado");
    gifResultado.style.display = "block";

    if(intentos < 10 && numeroMagico == parseInt(document.getElementById("ingresar-numero").value)){
        gifResultado.src = "assets/win.gif";
    } else {
        gifResultado.src = "assets/lose.gif";
    }
}

document.getElementById("reiniciarJuego").addEventListener("click", iniciarJuego);

// Inicia el juego al cargar la página
iniciarJuego();
