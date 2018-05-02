//==========================================
// Funciones que manejan la Session Cookie
//==========================================

import cookie from "js-cookie";

// Las cookies se setean unicamente desde el browser.
const setCookie = (key, value)=>{
    console.info("process", process);
    if(process.browser){
        const props = {
            expires: 1, //1 dia
            path: "/"
        }
        cookie.set(key, value, props);
    }
};

// Las cookies se pueden obtener desde el browser o desde el server.
const getCookie = (key, req) => {
    if(process.browser){
        return cookie.get(key);
    } else{
        if(!req.headers.cookie) return undefined;
        const rawCookie = req.headers.cookie.split(";").find(par => par.trim().startsWith( key + "=" )); // i.e. "jwt=234234we"
        if(!rawCookie) return undefined;
        return rawCookie.split("=")[1]; //i.e. "234234we"
    }
};

const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};

export{setCookie, getCookie, removeCookie};