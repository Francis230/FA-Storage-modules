export class Post {
    constructor(id, user, content) {
      this.id = id;
      this.user = user;
      this.content = content;
      this.likes = 0;
      this.comments = [];
    }
  
    // Método para agregar un comentario a la publicación
    addComment(user, text) {
      this.comments.push({ user: user.name, text });
    }
  
    // Método para añadir "me gusta"
    addLike() {
      this.likes += 1;
    }
  
    // Método para mostrar los detalles de la publicación
    showDetails() {
      console.log(`\nPublicación de ${this.user.name}: ${this.content}`);
      console.log(`👍 Me gusta: ${this.likes}`);
      console.log("Comentarios:");
      this.comments.forEach((comment, index) => {
        console.log(`  ${index + 1}. ${comment.user}: ${comment.text}`);
      });
    }
  }
  