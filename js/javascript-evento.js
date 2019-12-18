fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/4')

  .then(evento => {
    return evento.json()
  })

  .then(data => {
     //Work with JSON data here
  data.forEach(evento => {

    if(evento.id == 000001){

    const appp = document.getElementById('eventoPrincipal');

    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class','encabezadoMobile');

    const banner = document.createElement('div');
    banner.setAttribute('class','todosMobileMain');

    const imgBanner = document.createElement('img');
    imgBanner.src = evento.img_banner;
    imgBanner.setAttribute('class', 'fit');

    const containerInfo = document.createElement('div');
    containerInfo.setAttribute('class', 'row');

    const containerTitulo = document.createElement('div');
    containerTitulo.setAttribute('class','col-12');

    const textoTitulo = document.createElement('h2');
    textoTitulo.textContent = evento.Titulo;

    const textoDescripcion = document.createElement('p');
    textoDescripcion.textContent = evento.descripcion;



    appp.appendChild(mainContainer);
    mainContainer.appendChild(banner);
    banner.appendChild(imgBanner);
    mainContainer.appendChild(containerInfo);
    containerInfo.appendChild(containerTitulo);
    containerTitulo.appendChild(textoTitulo);
    containerTitulo.appendChild(textoDescripcion);
}
})
})

  .catch(err => {
    console.log('and I oop. '+err);

  })
