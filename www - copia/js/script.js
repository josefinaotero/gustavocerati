document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll('.discos-titulos-secciones');

  titulos.forEach((titulo) => {
    const contenido = titulo.nextElementSibling;
    titulo.setAttribute('tabindex', '0');
    titulo.setAttribute('aria-expanded', 'false');

    const toggle = () => {
      const abierto = !titulo.classList.contains('activo');
      titulo.classList.toggle('activo', abierto);
      contenido.classList.toggle('activo', abierto);
      contenido.style.maxHeight = abierto ? contenido.scrollHeight + 'px' : '0px';
      titulo.setAttribute('aria-expanded', abierto);
    };

    titulo.addEventListener('click', toggle);
    titulo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  window.addEventListener('resize', () => {
    document.querySelectorAll('.disco-seccion-contenido.activo').forEach((contenido) => {
      contenido.style.maxHeight = contenido.scrollHeight + 'px';
    });
  });
});

/*document.addEventListener('DOMContentLoaded', () => {
  const canciones = document.querySelectorAll('.disco-canciones li');

  const cerrar = (li) => {
    li.classList.remove('activo');
    li.setAttribute('aria-expanded', 'false');
    const player = li.querySelector('.cancion-player');
    player.classList.remove('activo');
    player.innerHTML = ''; // sin esto la canción seguiría sonando oculta
  };

  const abrir = (li) => {
    canciones.forEach((otra) => {
      if (otra !== li && otra.classList.contains('activo')) cerrar(otra);
    });

    const id = li.dataset.spotifyId;
    const titulo = li.querySelector('.titulo-cancion').textContent;
    const player = li.querySelector('.cancion-player');
    player.innerHTML = `<iframe title="Spotify: ${titulo}" src="https://open.spotify.com/embed/track/${id}?utm_source=generator" width="100%" height="80" allow="autoplay; encrypted-media; clipboard-write; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    li.classList.add('activo');
    player.classList.add('activo');
    li.setAttribute('aria-expanded', 'true');
  };

  canciones.forEach((li) => {
    li.setAttribute('tabindex', '0');
    li.setAttribute('aria-expanded', 'false');

    const manejarToggle = () => (li.classList.contains('activo') ? cerrar(li) : abrir(li));

    li.addEventListener('click', manejarToggle);
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        manejarToggle();
      }
    });
  });
});*/