async function obtenerPersonajes(page) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    console.log(data)
    return data.results;
  } catch (error) {
    console.log('Error:', error);
  }
}

async function toggleMostrarPersonajes(page, skip) {
  const resultadoDiv = document.getElementById('resultado');

  // Si el resultadoDiv ya contiene elementos, se ocultan
  if (resultadoDiv.childElementCount > 0) {
    resultadoDiv.innerHTML = '';
  } else {
    const personajes = await obtenerPersonajes(page);
    const personajesMostrar = personajes.slice(skip, skip + 5);
    mostrarListaPersonajes(personajesMostrar);
  }
}

function mostrarListaPersonajes(personajes) {
  const resultadoDiv = document.getElementById('resultado');

  // Mostrar los datos de cada personaje
  personajes.forEach(personaje => {
    const nombre = personaje.name;
    const peso = personaje.mass;
    const altura = personaje.height;

    // Crear una tarjeta para el personaje
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    // Crear el contenido de la tarjeta
    const contenidoTarjeta = document.createElement('div');
    contenidoTarjeta.innerHTML = `
   
    <div>
      <h3>Nombre :${nombre}</h3>
      <p>Peso: ${peso}</p>
      <p>Altura: ${altura}</p>
      </div>
    </div>
    `;

    // Agregar el contenido de la tarjeta a la tarjeta
    tarjeta.appendChild(contenidoTarjeta);

    // Agregar la tarjeta al resultadoDiv
    resultadoDiv.appendChild(tarjeta);
  });
}

//