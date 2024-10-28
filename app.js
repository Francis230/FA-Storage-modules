import { User } from './user.js';
import { Interaction } from './interactions.js';

// Creamos algunos usuarios
const user1 = new User(1, "Juan");
const user2 = new User(2, "Ana");

// Creamos una instancia de Interaction para gestionar publicaciones y acciones
const interaction = new Interaction();

// Usuario 1 crea una publicación
const post1 = interaction.createPost(user1, "¡Hola, este es mi primer post en esta plataforma!");

// Usuario 2 le da "me gusta" a la publicación de Juan
interaction.likePost(post1.id);

// Usuario 2 comenta la publicación de Juan
interaction.commentPost(post1.id, user2, "¡Felicidades por tu primera publicación!");

// Usuario 1 crea otra publicación
const post2 = interaction.createPost(user1, "Explorando las funcionalidades de JavaScript y módulos ES.");

// Usuario 1 y Usuario 2 dan "me gusta" a la segunda publicación
interaction.likePost(post2.id);
interaction.likePost(post2.id);

// Usuario 2 comenta la segunda publicación de Juan
interaction.commentPost(post2.id, user2, "¡Interesante tema!");

// Mostramos todos los posts y sus detalles
interaction.showAllPosts();
