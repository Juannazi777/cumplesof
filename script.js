document.getElementById("btnCumpleanos").addEventListener("click", function() {
    // Mostrar el mensaje de cumpleaños cuando el botón se presione
    document.getElementById("message").style.display = "block";
  
    // Llamar a la función para lanzar el confeti
    launchConfetti();
  
    // Llamar a la función para crear globos
    createBalloons();
  
    // Hacer desaparecer el botón
    document.getElementById("btnCumpleanos").style.display = "none";
  });
  
  // Función para lanzar confeti
  function launchConfetti() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6347', '#ffdd57', '#1e90ff', '#32cd32', '#ff69b4']
    });
  }
  
  // Función para crear globos animados
  function createBalloons() {
    for (let i = 0; i < 10; i++) {
      let balloon = document.createElement("div");
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw"; // Posición aleatoria
      balloon.style.animationDuration = Math.random() * 4 + 3 + "s"; // Duración aleatoria de la animación
      document.body.appendChild(balloon);
  
      // Eliminar los globos después de que termine la animación
      setTimeout(() => {
        balloon.remove();
      }, 6000);
    }
  }
  