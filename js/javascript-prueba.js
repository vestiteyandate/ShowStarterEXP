
var info ;

fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/4')

  .then(evento => {
    return evento.json()
  })
  .then(data => {
     //Work with JSON data here
     data.forEach(evento => {

    const app = document.getElementById('');

    const container = document.createElement('div');
    container.setAttribute('class', 'row show');
    container.setAttribute('id', evento.id);

    const divImagen = document.createElement('div');
    divImagen.setAttribute('class', 'col-5 dieciseiesNueve');

    const imagen = document.createElement('img');
    imagen.src = evento.img_perfil;
    imagen.setAttribute('class', 'fit');

    const containerFecha = document.createElement('div');
    containerFecha.setAttribute('class', 'fecha');

    const info = document.createElement('div');
    info.setAttribute('class', 'col-7');

    const listaInfo = document.createElement('ul');

    const infoCategoria = document.createElement('li');

    const categoria = document.createElement('p');
    categoria.textContent = evento.categoria;

    const infoTitulo = document.createElement('li');

    const titulo = document.createElement('h3');
    titulo.textContent = evento.Titulo;

    const infoPorcentaje = document.createElement('li');

    const porcentaje = document.createElement('div');
    porcentaje.setAttribute('class', 'progress');

    const barraPorcentaje = document.createElement('div');
    barraPorcentaje.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
    barraPorcentaje.setAttribute('role', 'progressbar');
    barraPorcentaje.setAttribute('aria-valuenow', evento.porcentaje + '%');
    barraPorcentaje.setAttribute('aria-valuemin', '0');
    barraPorcentaje.setAttribute('aria-valuemax', '100');
    barraPorcentaje.style.width = evento.porcentaje + '%';


    const separador =document.createElement('hr');
    separador.setAttribute('class' , 'separador');



    container.appendChild(divImagen);
    divImagen.appendChild(imagen);
    app.appendChild(container);
    container.appendChild(info);
    info.appendChild(listaInfo);
    listaInfo.appendChild(infoCategoria);
    infoCategoria.appendChild(categoria);
    listaInfo.appendChild(infoTitulo);
    infoTitulo.appendChild(titulo);
    container.appendChild(separador);
    listaInfo.appendChild(infoPorcentaje);
    infoPorcentaje.appendChild(porcentaje);
   porcentaje.appendChild(barraPorcentaje);



  })
});

fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/4')

  .then(evento => {
    return evento.json()
  })

  .then(data => {
     //Work with JSON data here
     // if(element.id = 000001){
    data.forEach(evento => {

      if(evento.id == 000006){

    const appp = document.getElementById('carouselUno');
    appp.setAttribute


}
})
})

  .catch(err => {
    console.log('and I oop. '+err);

  })
