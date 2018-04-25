//======================================
// Funciones de autenticación
//======================================

import redirect from "./redirect";
import { setCookie, getCookie, removeCookie } from "./session";
//import { authenticate } from "../services/authApi";
//import { createUser } from "../services/userApi";
import { validateCredentials, validateNewUser } from "./validation";

const signIn = async (email, password) => {
    const error = validateCredentials( email, password );
    if (error) {
        return error;
    }
/*
    const res = await authenticate( email, password );
    if(!res.jwt){
        return res;
    }

    setCookie( "jwt", res.jwt );
*/setCookie( "jwt", email );
    redirect("/home");
    return null;
};

const signUp = () => {};

const signOut = () => {};

const getJwt = (context) => {
    return getCookie( "jwt", context.req );
};

const isAuth = (context) =>{
    return !!getJwt( context );
};

const redirectIfAuth = (context) =>{
    if(isAuth(context)){
        redirect( "/home", context );
        return true;
    }
    return false;
};

const redirectIfNotAuth = (context)=>{
    if(!isAuth(context)){
        redirect("/login", context);
        return true;
    }
    return false;
};

export {signIn, signUp, signOut, getJwt, isAuth, redirectIfAuth, redirectIfNotAuth};