fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/5')

  .then(evento => {
    return evento.json()
  })

  .then(data => {
     //Work with JSON data here
  data.forEach(evento => {

    if(evento.id == 000006){

    const appp = document.getElementById('evento');


    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','encabezadoMobile');
    appp.appendChild(mainContainer);

    const categoria = document.createElement('p');
    categoria.textContent = evento.categoria;
    mainContainer.appendChild(categoria);

    const titulo = document.createElement('h1');
    titulo.textContent = evento.Titulo;
    mainContainer.appendChild(titulo);

    const textoPrincipal = document.createElement('div');
    textoPrincipal.setAttribute('class', 'infoEvento');
    mainContainer.appendChild(textoPrincipal);

    const columnas = document.createElement('div');
    columnas.setAttribute('class', 'row');
    mainContainer.appendChild(columnas);

    const divTexto = document.createElement('div');
    divTexto.setAttribute('class', 'col-5 offset-1');
    columnas.appendChild(divTexto);

    const ulInfo = document.createElement('ul');
    divTexto.appendChild(ulInfo);

    const liFecha = document.createElement('li')
    ulInfo.appendChild(liFecha);

    const fecha = document.createElement('h4')
    fecha.textContent = evento.fecha;
    liFecha.appendChild(fecha);

    const liPrecio = document.createElement('li');
    ulInfo.appendChild(liPrecio);

    const precio = document.createElement('h4');
    precio.textContent = '$' + evento.precio;
    liPrecio.appendChild(precio);

    const liCiudad = document.createElement('li');
    ulInfo.appendChild(liCiudad);

    const ciudad = document.createElement('h4');
    ciudad.textContent = evento.ciudad;
    liCiudad.appendChild(ciudad);

    const liVenue = document.createElement('li')
    ulInfo.appendChild(liVenue);

    const venue = document.createElement('h4');
    venue.textContent = evento.venue;
    liVenue.appendChild(venue);

    const liBarra = document.createElement('li');
    ulInfo.appendChild(liBarra);

    const barraPorcentaje = document.createElement('div');
    barraPorcentaje.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
    barraPorcentaje.setAttribute('role', 'progressbar');
    barraPorcentaje.setAttribute('aria-valuenow', evento.porcentaje + '%');
    barraPorcentaje.setAttribute('aria-valuemin', '0');
    barraPorcentaje.setAttribute('aria-valuemax', '100');
    barraPorcentaje.style.width = evento.porcentaje + '%';
    liBarra.appendChild(barraPorcentaje);

    const divImagen = document.createElement('div');
    divImagen.setAttribute('class', 'col-4');
    columnas.appendChild(divImagen);

    const imagen = document.createElement('img');
    imagen.src = evento.img_perfil;
    imagen.setAttribute('class', 'fit');
    divImagen.appendChild(imagen);


}
})
})

  .catch(err => {
    console.log('and I oop. '+err);

  })
