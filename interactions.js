import { Post } from './post.js';

// Clase para gestionar las interacciones con las publicaciones
export class Interaction {
  constructor() {
    this.posts = [];
  }

  // Método para crear una nueva publicación
  createPost(user, content) {
    const newPost = new Post(this.posts.length + 1, user, content);
    this.posts.push(newPost);
    return newPost;
  }

  // Método para agregar "me gusta" a una publicación por ID
  likePost(postId) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.addLike();
    } else {
      console.log("Publicación no encontrada.");
    }
  }

  // Método para agregar un comentario a una publicación por ID
  commentPost(postId, user, comment) {
    const post = this.posts.find(p => p.id === postId);
    if (post) {
      post.addComment(user, comment);
    } else {
      console.log("Publicación no encontrada.");
    }
  }

  // Método para mostrar todas las publicaciones y sus detalles
  showAllPosts() {
    this.posts.forEach(post => post.showDetails());
  }
}
