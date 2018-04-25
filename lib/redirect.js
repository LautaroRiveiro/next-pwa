//======================================
// Funciones de redirección
//======================================

import Router from "next/router";

export default (ruta, context = {}) => {
  if (context.res) {
    //Redirección desde el servidor. Se hace desde una HTTP response 303.
    context.res.writeHead(303, { Location: ruta });
    context.res.end();
  } else {
    //Redirección desde el navegador/cliente.
    //Se hace desde Router, con un replace porque reemplaza la petición original.
    Router.replace(ruta);
  }
};
