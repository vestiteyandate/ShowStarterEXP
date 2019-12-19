fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/4')

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

    const banner = document.createElement('div');
    banner.setAttribute('class','todosMobileMain');

    const divImagen = document.createElement('div')
    divImagen.setAttribute('class', 'imagenBanner')

    const imgBanner = document.createElement('img');
    imgBanner.src = evento.img_banner;
    imgBanner.setAttribute('class', 'fit');

    const textoPrincipal = document.createElement('div');
    textoPrincipal.setAttribute('class', 'infoEvento');

    const categoria = document.createElement('p');
    categoria.textContent = evento.categoria;

    const titulo = document.createElement('h1');
    titulo.textContent = evento.Titulo;

    const barraPorcentaje = document.createElement('div');
    barraPorcentaje.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
    barraPorcentaje.setAttribute('role', 'progressbar');
    barraPorcentaje.setAttribute('aria-valuenow', evento.porcentaje + '%');
    barraPorcentaje.setAttribute('aria-valuemin', '0');
    barraPorcentaje.setAttribute('aria-valuemax', '100');
    barraPorcentaje.style.width = evento.porcentaje + '%';


    const divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'row infoEvento');

    const divDescripcion = document.createElement('div');
    divDescripcion.setAttribute('class', 'col-6');

    const containerInfo = document.createElement('ul');
    // containerInfo.setAttribute('class', 'row');

    const liFecha = document.createElement('li')

    // const iconoFecha = document.createElement('i');
    // iconofecha.setAttribute('class', 'far fa-calendar-alt');

    const fecha = document.createElement('h4');
    fecha.textContent = evento.fecha;

    const liPrecio = document.createElement('li');

    const precio = document.createElement('h4');
    precio.textContent = evento.precio;

    const liCiudad = document.createElement('li');

    const ciudad = document.createElement('h4');
    ciudad.textContent = evento.ciudad;

    const liVenue = document.createElement('li')

    const venue = document.createElement('h4');
    venue.textContent = evento.venue;

    const divPerfil = document.createElement('div');
    divPerfil.setAttribute('class', 'col-6');

    const descripcion = document.createElement('h4');
    descripcion.textContent = evento.descripcion;

    const imgPerfil = document.createElement('img');
    imgPerfil.src = evento.img_perfil;
    imgPerfil.setAttribute('class', 'fit');


    appp.appendChild(mainContainer);
    mainContainer.appendChild(banner);
    banner.appendChild(divImagen);
    divImagen.appendChild(imgBanner);
    mainContainer.appendChild(textoPrincipal);
    textoPrincipal.appendChild(categoria);
    textoPrincipal.appendChild(titulo);
    textoPrincipal.appendChild(barraPorcentaje);
    mainContainer.appendChild(divInfo);
    divInfo.appendChild(divDescripcion);
    divDescripcion.appendChild(containerInfo);
    // containerInfo.appendChild(liCategoria);
    // containerInfo.appendChild(liTitulo);
    containerInfo.appendChild(liFecha);
    containerInfo.appendChild(liPrecio);
    containerInfo.appendChild(liCiudad);
    containerInfo.appendChild(liVenue);
    // liCategoria.appendChild(categoria);
    // liTitulo.appendChild(titulo);
    // liFecha.appendChild(iconoFecha);
    liFecha.appendChild(fecha);
    liPrecio.appendChild(precio);
    liCiudad.appendChild(ciudad);
    liVenue.appendChild(venue);
    divInfo.appendChild(divPerfil);
    divPerfil.appendChild(descripcion);
    divPerfil.appendChild(imgPerfil);

}
})
})

  .catch(err => {
    console.log('and I oop. '+err);

  })
