import delay from '../utils/delay';

import {getHttp} from './axios';
import {getToken, updateToken} from './token-service';


const seedData = [
    { name: 'Vivek Dutta Mishra', email: "vivek@conceptarchitect.in", password: 'p@ss1' },
    { name: 'Aman Kumar', email: "aman@gmail.com", password: 'p@ss1' }

]

let AuthorizationToken = null;

class UserService {

    constructor() {
        // this._load();
    }

    // _load = () => {
    //     try {
    //         let json = localStorage.getItem("users");
    //         if (json)
    //             this.users = JSON.parse(json);
    //         else
    //             throw new Error("No Key found");
    //     } catch (e) {
    //         this.users = seedData;
    //         this._save();
    //     }
    // }

    // _save = () => {
    //     localStorage.setItem('users', JSON.stringify(this.users));
    // }

    register = async (user) => {
        // await delay(2000);

        if (!user || !user.name || !user.email || !user.password)
            throw new Error('Invalid User Details');

        // let existing = await this.users.find(u => u.email === user.email);
        // if (existing)
        //     throw new Error('User already exists with this email ' + user.email);

        console.log("user",user)
        // this.users.push(user);
        // this._save();
        // localStorage.setItem('user', JSON.stringify(user));
        let axios=await getHttp();
        let response = await axios.post('/users',user);
        AuthorizationToken = response.data.token;
        updateToken(AuthorizationToken);
        console.log(response,AuthorizationToken);
        return user;
    }


    login = async (email, password) => {
        // await delay(5000);
            if (!email || !password)
                throw new Error('Missing Credentials');

            let user = {
                "email": email,
                "password": password
            }

            let axios=await getHttp();
            let response = await axios.put('/users',user);
            console.log(response);
            AuthorizationToken = response.data.token;
            updateToken(AuthorizationToken);
            console.log(AuthorizationToken);
            return user;
   
            

    }

    logout = async () => {
        await delay(1000);
        AuthorizationToken = null;
        updateToken(AuthorizationToken);
        // localStorage.removeItem('user');
    }

    getLoggedInUser = async () => {
        await delay(1000);
        let json = localStorage.getItem('user');
        if (json)
            return JSON.parse(json);
        else
            return null;
    }

}

export default new UserService();