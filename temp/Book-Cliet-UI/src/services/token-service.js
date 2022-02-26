let AuthorizationToken = null;

export const getToken= async ()=>{
    return await AuthorizationToken;
}

export const updateToken = async (token)=>{
    AuthorizationToken = token;
    console.log("TOKEN",AuthorizationToken);
};