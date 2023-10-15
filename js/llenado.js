document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
  
    // Define el número de cards que deseas crear (por ejemplo, 5)
    var n = 11;
  
    // Obtén el contenedor de las cards
    var cardContainer = document.getElementById('card-container');
  
    // Arreglo de títulos
    var titulos = ['TreeAcademy', 
    'Proyecto IA',
     'Flash Basket', 
     'Big Cars', 
     'MYSS-Cine', 
     "MiPC - App",
     "Cine - App",
     "MaxVision - App",
     "Regulus - App",
     "Hedwig - App",
     "Book Friend" ];
  

     var direccion = [
      "https://github.com/YSantanas/treeAcademyFULL",
      "https://github.com/YSantanas/IAProyecto",
      "https://github.com/YSantanas/IAFlask",
      "https://github.com/YSantanas/BaseDProyecto",
      "https://github.com/YSantanas/webCine",
      "https://github.com/YSantanas/miPC",

      "https://youtu.be/Depmjrp6VD4",
      "https://github.com/YSantanas/Maxvision-Ejercicio1",
      "https://github.com/YSantanas/Ejercicio-2-ComputoMovil",
      "https://github.com/YSantanas/hedwigMovil",
      "https://github.com/YSantanas/BookFriend"
    ];

    var direccionYou = [
      "https://youtu.be/0eZGZ-oQNSQ",
      "https://youtu.be/yD0PaiWkvDI",
      "https://youtu.be/AjnYhD5ePKE",
      "https://github.com/YSantanas/BaseDProyecto",
      "https://github.com/YSantanas/webCine",
      "https://youtu.be/9ES7gXak1ug",

      "https://youtu.be/Depmjrp6VD4",
      "https://youtu.be/-1Cqbpmca5o",
      "https://youtu.be/YBfs9tLKba4",
      "https://youtu.be/jqhDX9LmZdc",
      "https://youtu.be/z3RrLOXXUhU"

    ];
    // Arreglo de descripciones
    var descripciones = [
      "Página web para la venta de cursos de diferentes carreras.",
      "Página web que implementa algoritmos de Inteligencia Artificial.",
      "Página web sobre de deportes que implementa firebase.",
      "Página web que con la base de datos de un concesionario de coche",
      "Página web para añadir,modificar y eliminar datos de peliculas.",
      "Aplicación móvil que implementa la venta de productos electrónicos.",
      "Aplicación móvil donde podemos ver un catalogo de peliculas.",
      
      "Aplicación móvil sobre astrología que permite ver el horóscopo.",
      "Aplicación móvil que utiliza una API de Harry potter.",
      "Aplicación móvil con API de Harry potter actualizada.",
      "Página web con cátalogo de libros y aportes."

      ];

    // Utiliza un bucle for para crear "n" cards
    for (var i = n-1; i >= 0; i--) {
      // Crea un elemento de div para la card
      var cardDiv = document.createElement('div');
      cardDiv.className = 'col-md-3'; // Cambiamos a col-md-3 para 4 columnas en pantallas medianas
  
      // Obtiene el título y la descripción de la card actual del arreglo
      var titulo = titulos[i];
      var descripcion = descripciones[i];
  
      // Crea la estructura de la card con el título y la descripción
      cardDiv.innerHTML = `
        <div class="card mb-4">

        
          <img src="./imagenes/Proyectos/git${i + 1}.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${descripcion}</p>
          </div>
          <div class="final-card text-center ali"><!-- Icono de GitHub --><a href="${direccion[i]}" target="_blank"><i class="fab fa-github" style="color: #7e0ee6; margin-right: 2%;"></i></a><!-- Icono de YouTube --><a href="${direccionYou[i]}" target="_blank"><i class="fab fa-youtube" style="color: #e61c0e"></i></a></div>

        </div>
      `;
  
      // Agrega la card al contenedor
      cardContainer.appendChild(cardDiv);
    }
  });
  