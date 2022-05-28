/*Menu hamburguesa*/

const menu=document.querySelector(".menu");
const btnAbrirMenu=document.querySelector(".abrir-menu");
const btnCerrarMenu=document.querySelector(".cerrar-menu");

function desplegarMenu(){
    menu.classList.toggle("abrir_menu");
}

btnAbrirMenu.addEventListener("click",desplegarMenu);
btnCerrarMenu.addEventListener("click",desplegarMenu);

const menuLinks1=document.querySelector(".linkmenu1");
const menuLinks2=document.querySelector(".linkmenu2");
const menuLinks3=document.querySelector(".linkmenu3");

function cerrarMenu(){
  menu.classList.remove("abrir_menu");
}
menuLinks1.addEventListener("click",cerrarMenu);
menuLinks2.addEventListener("click",cerrarMenu);
menuLinks3.addEventListener("click",cerrarMenu);

/*validacion formulario*/

function validacion(){

  const nombreF = document.getElementById('nombre');
  const emailF = document.getElementById('email');
  const mensajeF=document.getElementById('mensaje');
  

  if (nombreF.value === "") {
    alert("Por favor, escribe tu nombre.");
    nombre.focus();
    return false;
  }


  if (emailF.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

 if (mensajeF.value === "") {
    alert("Por favor, escribe tu mensaje");
    mensaje.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}
