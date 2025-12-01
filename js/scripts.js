function markBadge(key) {
    localStorage.setItem(key, "true");
    showBadgePopup(); // activa el popup
}


/* Ir al quiz (Google Forms real) */
function goGoogleQuiz() {
    markBadge("est1_quiz");

    window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfhZWT3dV9r4aer4cXPqynHtKLW3Wf5Uao1DlW6xJgx09ifzw/viewform";
}

// Volver a la ruta principal
function volverRuta() {
    window.location.href = "ruta.html";
}

// Ir a la estación 2
function irEstacion2() {
    window.location.href = "estacion2.html";
}

/* Redirigir al Google Forms de la Estación 2 */
function goGoogleQuiz2() {
    // Insignia por completar el quiz
    markBadge("est2_quiz");

    window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSe6ujNjJRpwFHAKZx1fuKXYbagBIo79edUTwcSYILyjZ4W5Rg/viewform";
}

/* Ir a la estación 3 */
function irEstacion3() {
    window.location.href = "estacion3.html";
}

/* Redirigir al Google Forms de la Estación 3 */
function goGoogleQuiz3() {
    markBadge("est3_quiz");
    window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfbl3IWmd2z2qACI1Jr_c2AhN7U9JUdD5T7gBWTvNmFdEVgKQ/viewform";
}

/* Ir a Estación 4 */
function irEstacion4() {
    window.location.href = "estacion4.html";
}

/* Redirigir al Google Forms de la Estación 4 */
function goGoogleQuiz4() {
    markBadge("est4_quiz");
    window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSc6Vxdx2LZoDbN3V8HGw2eAJQuCah7W90bxM0DNQgkwm2jtfg/viewform";
}

/* Ir a la estación 5 */
function irEstacion5() {
    window.location.href = "estacion5.html";
}

/* Redirigir al Google Forms de la Estación 5 */
function goGoogleQuiz5() {
    markBadge("est5_quiz");
    window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfi59qZCfDhjcT3VZXRtjNfryXUjb2XlHODRNZr6BUeqSXwcw/viewform";
}

function finalizarRally() {

    // Dar insignia especial del rally
    markBadge("rally_completado");
    markBadge("embajador_rimac");

    // Redirigir al Kahoot
    window.location.href =
        "https://kahoot.it/challenge/e638df08-4d95-41ec-8c4a-52718923b872_1764563772912?puid=7dfed8f3-5f65-4f69-8262-fc8f7d83ec52";
}

function showBadgePopup() {
    const popup = document.getElementById("popupInsignia");

    if (!popup) return; // Si la página no tiene el popup, no hace nada

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}



