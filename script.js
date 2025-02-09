// Función para cargar los nombres desde usuarios.php
function cargarUsuarios() {
    let listaUsuarios = document.getElementById("usuarios-container");
    listaUsuarios.innerHTML = "<p class='text-center'>Cargando usuarios...</p>"; // Muestra un mensaje de carga

    fetch("usuarios.php")
        .then(response => response.json())  // Convierte la respuesta a JSON
        .then(data => {
            listaUsuarios.innerHTML = ""; // Limpia la lista antes de agregar nuevos datos
            data.forEach(nombre => {
                let listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = nombre;
                listaUsuarios.appendChild(listItem);
            });
        })
}
// Agregar un evento al botón para recargar los usuarios manualmente
document.getElementById("recargar-btn").addEventListener("click", cargarUsuarios);
