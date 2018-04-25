//======================================
// Funciones de valdiación
//======================================

export const validateCredentials = (email, password) => {
  if (!email || !password) {
    return "Email y password requeridos.";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "El Email no tiene formato correcto.";
  }

  if (!(password.length >= 4)) {
    return "El Password debe tener al menos 4 caracteres.";
  }

  return null;
};
