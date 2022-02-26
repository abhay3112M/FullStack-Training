import axios from 'axios';
import {getToken} from './token-service';

const baseUrl="http://localhost:4000/api";

export const getHttp= async ()=>{

    let instance= await axios.create({
        baseURL: baseUrl   
    });

    return instance;
}

export const getHttpAdmin = async () => {

    let token = null;
    await getToken().then((val)=>{
        token = val
        console.log("val",val)
    });
    console.log("token",token)
    let instance= await axios.create({
        baseURL: baseUrl,
        headers: {'authorization': `${token}`}
    });

    return instance;
}

