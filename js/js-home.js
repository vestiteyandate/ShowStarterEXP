// function scroll(){
//   window.scrollBy(0, window.innerHeight);
// }
window.onload = console.log("esto está funcionando");
window.scrollBy(0,2812);



var info ;

fetch('https://api.jsonbin.io/b/5df4fc9f2c714135cda13775/3')

  .then(evento => {
    return evento.json()
  })
  .then(data => {
     data.forEach(evento => {

  const bloque = document.getElementById('eventosHome');

  const container = document.createElement('div');
  container.setAttribute('class', 'row bloqueEventos');
  bloque.appendChild(container);

  const divImagen = document.createElement('div');
  divImagen.setAttribute('class', 'col-3 noPadding');
  container.appendChild(divImagen);

  const imagen = document.createElement('img');
  imagen.setAttribute('class', 'imagenShow');
  imagen.src = evento.img_perfil;
  divImagen.appendChild(imagen);

  const divInfo = document.createElement('div');
  divInfo.setAttribute('class', 'col-8');
  container.appendChild(divInfo);

  const listaInfo = document.createElement('ul');
  divInfo.appendChild(listaInfo);

  const liCategoria = document.createElement('li');
  listaInfo.appendChild(liCategoria);

  const categoria = document.createElement('p');
  categoria.textContent = evento.categoria;
  liCategoria.appendChild(categoria);

  const liTitulo = document.createElement('li');
  listaInfo.appendChild(liTitulo);

  const titulo = document.createElement('h3');
  titulo.textContent = evento.Titulo;
  liTitulo.appendChild(titulo);

  const liFecha = document.createElement('li');
  listaInfo.appendChild(liFecha);

  const fecha = document.createElement('p');
  fecha.textContent = evento.fecha;
  liFecha.appendChild(fecha);

  const liPrecio = document.createElement('li');
  listaInfo.appendChild(liPrecio);

  const precio = document.createElement('p');
  precio.textContent = '$ '+ evento.precio;
  liPrecio.appendChild(precio);

  const liPorcentaje = document.createElement('li');
  listaInfo.appendChild(liPorcentaje);

  const porcentaje = document.createElement('div');
  porcentaje.setAttribute('class', 'progress');
  liPorcentaje.appendChild(porcentaje);

  const barraPorcentaje = document.createElement('div');
  barraPorcentaje.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
  barraPorcentaje.setAttribute('role', 'progressbar');
  barraPorcentaje.setAttribute('aria-valuenow', evento.porcentaje + '%');
  barraPorcentaje.setAttribute('aria-valuemin', '0');
  barraPorcentaje.setAttribute('aria-valuemax', '100');
  barraPorcentaje.style.width = evento.porcentaje + '%';
  porcentaje.appendChild(barraPorcentaje);

  const divSocial = document.createElement('div');
  divSocial.setAttribute('class', 'col-1 noPadding')
  container.appendChild(divSocial);

  const section = document.createElement('section');
  section.setAttribute('class', 'compartir');
  divSocial.appendChild(section);

  const ulSocial = document.createElement('ul');
  section.appendChild(ulSocial);

  const liTwitter = document.createElement('li');
  ulSocial.appendChild(liTwitter);

  const twitter = document.createElement('i');
  twitter.setAttribute('class', 'fab fa-twitter');
  liTwitter.appendChild(twitter);

  const liInstagram = document.createElement('li');
  ulSocial.appendChild(liInstagram);

  const instagram = document.createElement('i');
  instagram.setAttribute('class', 'fab fa-instagram');
  liInstagram.appendChild(instagram);

  const liFacebook = document.createElement('li');
  ulSocial.appendChild(liFacebook);

  const facebook = document.createElement('i');
  facebook.setAttribute('class', 'fab fa-facebook-square');
  liFacebook.appendChild(facebook);

  const divBoton = document.createElement('div');
  divInfo.appendChild(divBoton);

  const boton =document.createElement('button');
  boton.setAttribute('type', 'button');
  boton.setAttribute('class', 'btn btn-outline-dark btn-block');
  boton.textContent = 'APORTAR';
  divBoton.appendChild(boton);


})
});

$(document).ready(function(){
    $('.count').prop('disabled', true);
    $(document).on('click','.plus',function(){
    $('.count').val(parseInt($('.count').val()) + 1 );
    });
      $(document).on('click','.minus',function(){
      $('.count').val(parseInt($('.count').val()) - 1 );
        if ($('.count').val() == 0) {
        $('.count').val(1);
      }
        });
});
