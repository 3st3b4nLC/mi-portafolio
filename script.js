/* -----------------------------------------------
   FUNCIÓN 1: Mostrar / ocultar información
------------------------------------------------- */
document.getElementById("btnLeerMas").addEventListener("click", () => {
    const extra = document.getElementById("extraInfo");

    // Si está oculto, lo muestra
    if (extra.classList.contains("oculto")) {
        extra.classList.remove("oculto");
        btnLeerMas.textContent = "Leer menos";
    } else {
        extra.classList.add("oculto");
        btnLeerMas.textContent = "Leer más";
    }
});


/* -----------------------------------------------
   FUNCIÓN 2: Cambiar tema claro/oscuro
------------------------------------------------- */
document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


/* -----------------------------------------------
   FUNCIÓN 3: Validación del formulario
------------------------------------------------- */
document.getElementById("formContacto").addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe el formulario

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const resultado = document.getElementById("resultado");

    // Validación básica
    if (nombre === "" || email === "" || mensaje === "") {
        resultado.textContent = "❗ Todos los campos son obligatorios.";
        resultado.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        resultado.textContent = "❗ El email no es válido.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "✔ Mensaje enviado correctamente. ¡Gracias!";
    resultado.style.color = "green";
});
