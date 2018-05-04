import {setCookie, getCookie} from './session';



//==============================================================================

function mostrarBannerManual() {
  //Chequeo que no se haya mostrado el automatico
  if (getCookie("bannerAuto") == "true" || getCookie("bannerManual") == "true") {
    console.log("mostrarBannerManual: Ya se mostro el banner automatico");
    return false;
  }

  //Muestro el banner
  //Guardo que se mostró
  setCookie("bannerManual", "true");
  return true;
  //alert("Instale PWA");

}

function beforeinstallpromptCallback(e) {
  //Chequeo que no se haya mostrado el automatico
  if (getCookie("bannerManual") == "true" || 
  getCookie("bannerAuto") == "true") {
    e.preventDefault();
    console.log("beforeinstallpromptCallback: Ya se mostro el banner manual");
    return false;
  }

  //Guardo que se va a mostrar
  setCookie("bannerAuto", "true");

  //Esto es en caso que no lo difiera. Si no tengo que manejarlo de otra forma.
}

//==============================================================================


function banner(){

  window.addEventListener("beforeinstallprompt", beforeinstallpromptCallback);
  
  //Desde donde lo estoy corriendo
  if (matchMedia("(display-mode:standalone)").matches) {
    alert("Estoy desde una PWA");
  } else {

    console.log("Estoy desde la web");

    if ( getCookie("bannerAuto") == "true" || getCookie("bannerManual") == "true" ) {
      console.log("Ya fue ofrecido el banner");
      //En ios no va a funcionar el ls porque no lo comparten.
      //Puede ser que lo tenga instalado, que lo haya rechazado o que lo haya borrado
      //En principio en ningun caso quiero hacer mas nada
    } else {
      console.log("Nunca fue ofrecido el banner");
      return mostrarBannerManual();
    }
  }
  return false;
}


export default banner;
