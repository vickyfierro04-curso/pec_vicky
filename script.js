let segundos = 15;

function iniciarTemporizador() {
    let contador = setInterval(function() {
        document.getElementById("tiempo").textContent = segundos;
        segundos--;

        if (segundos < 0) {
            clearInterval(contador);
            document.getElementById("tiempo").textContent = "¡Listo!";
        }
    }, 1000);
}