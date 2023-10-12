function cambioTema() {
    const themeLink = document.getElementById('tema');
    const botonTema = document.getElementById('cambio-tema');
    if (themeLink.getAttribute('href') === 'style.css') {
      themeLink.setAttribute('href', 'styleDark.css');
      localStorage.setItem('tema', 'oscuro');
      botonTema.classList.add('btn-oscuro'); // Agrega la clase "btn-oscuro"
    } else {
      themeLink.setAttribute('href', 'style.css');
      localStorage.setItem('tema', 'claro');
      botonTema.classList.remove('btn-oscuro'); // Quita la clase "btn-oscuro"
    }
  }
  