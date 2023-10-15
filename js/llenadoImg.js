document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
  
    // Define el número de cards que deseas crear (por ejemplo, 5)
    var n = 7;
  
    // Obtén el contenedor de las cards
    var cardContainer = document.getElementById('img-contenedor');
  
    // Utiliza un bucle for para crear "n" cards
    for (var i = n-1; i >= 0; i--) {
      // Crea un elemento de div para la card
      var cardDiv = document.createElement('div');
      cardDiv.className = 'col-md-3'; // Cambiamos a col-md-3 para 4 columnas en pantallas medianas
  

  
      // Crea la estructura de la card con el título y la descripción
      cardDiv.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="col">

    <div class="card bg-transparent border-0 card-hover mx-auto">
    <img src="./imagenes/logos/logo${i + 1}.png" class="contenedor-logos">
    <div class="card-img-overlay">
    </div>
    </div>

    </div>
  </div>
</div>
`;
  
      // Agrega la card al contenedor
      cardContainer.appendChild(cardDiv);
    }
  });
  