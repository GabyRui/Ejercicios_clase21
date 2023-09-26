
//PREGUNTA 1: DOOM

  const title = document.getElementById('title');
  const parrafo = document.getElementById('parrafo');
  const button = document.getElementById('button');


  console.log(title);
  console.log(parrafo);
  console.log(button);

  //PREGUNTA 2

  const navBar = document.querySelector('#list');

  console.log(navBar);

  //PREGUNTA 3

  const pregunta3 = document.getElementById('dom');
  console.log(pregunta3);

  //PREGUNTA 4

  const pregunta4 = document.getElementById('conId');
  console.log(pregunta4);

   //PREGUNTA 5

  const pregunta5 = document.querySelector('.section_pregunta5, .pregunta5');

  console.log(pregunta5);

    //PREGUNTA 6

    //Aplicaremos array para convertirlo en arreglo.

    const preguntasix = Array.from(document.querySelectorAll('.query1'));

    const elementosAreglo = [];

    preguntasix.forEach(element => {
     element.style.backgroundColor = 'lightpink';
    })

    //PREGUNTA 7
      
    const parrafo7 = document.getElementById('parrafo7');

    parrafo7.textContent = 'Soy el párrafo actualizado (revisar en Javascript)'

    //PREGUNTA 8

    const pregunta8 = document.getElementById('preguntaEight');

    pregunta8.innerHTML = 'Cambié el texto del innerHTML (revisar en Javascript)'

    //PREGUNTA 9

    const estilos = document.getElementById('button9');

    estilos.style.backgroundColor = 'white';

    estilos.style.color = 'blue';

    //PREGUNTA 10

    const pregunta10 = document.getElementById('icon');

    pregunta10.style.color = 'blue';

    //PREGUNTA 11

    const button11 = document.getElementById('button_11');

    button11.classList.add('resaltado');

    console.log(button11.classList);













