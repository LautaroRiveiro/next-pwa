const authenticate = (user, pass)=>{
    if( user == "test@test.com" && pass == "1234" )
        return {jwt: "123123123"};
    else
        return "Mail o password invalido";
}

export { authenticate };