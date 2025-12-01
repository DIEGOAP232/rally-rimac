document.addEventListener("DOMContentLoaded", () => {

    const goToRegistro = document.getElementById("btnEnter");
    if (goToRegistro) goToRegistro.addEventListener("click", () => {
        window.location.href = "registro.html";
    });

    const goRuta1 = document.getElementById("btnContinuarRuta1");
    if (goRuta1) goRuta1.addEventListener("click", () => {
        window.location.href = "ruta1.html";
    });
});
