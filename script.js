// Definir datos del perfil de usuario
const userProfile = {
    name: "Juan Pérez",
    age: 25
};

// Guardar el perfil de usuario en localStorage si no existe
if (!localStorage.getItem("userProfile")) {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

// Cargar el perfil de usuario desde localStorage
const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
document.getElementById("userName").textContent = storedProfile.name;
document.getElementById("userAge").textContent = storedProfile.age;

// Configurar el estado del botón de "me gusta"
const likeButton = document.getElementById("likeButton");
let isLiked = localStorage.getItem("isLiked") === "true"; // Cargar el estado desde localStorage

// Actualizar el texto del botón según el estado de "me gusta"
likeButton.textContent = isLiked ? "Ya no me gusta" : "Me gusta";

// Manejar el clic en el botón de "me gusta"
likeButton.addEventListener("click", () => {
    isLiked = !isLiked; // Cambiar el estado
    localStorage.setItem("isLiked", isLiked); // Guardar el estado en localStorage
    likeButton.textContent = isLiked ? "Ya no me gusta" : "Me gusta";
});
