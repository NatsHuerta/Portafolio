//cambiar var(palabara antigua) por let
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  // 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('NATALIA HUERTA')
  .pauseFor(300)
  .deleteChars(10)
  .start();

  //Habilitar ventana emergente
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))