const {sequelize} = require('../data/connection');
const {user} = sequelize.models;

const getAllUser = async () => {
    const users = await user.findAll();
    return users;
}

const addUser = async(user1) => {
    const dbUser=await user.create(user1); //create and save to data base
    return dbUser;
}

const loginUser = async () => {
    //what to do 
}

const getUserByEmail = async (email) => {
    const user1= await user.findOne({
        where:{
            email:email
        }
    });
    if(user1)
        return user1;
    else
        throw new Error('User Not Found');
}

const updateUserByEmail = async (email,user1) => {
    const result = await user.destroy({
        where:{
            email:email
        }
    });
    const dbUser = await addUser(user1);
    return dbUser;
}

const updateUserPwdByEmail = async (email,pwd) => {
    const result = await user.update({password:pwd},{
        where: {
            email:email
        }
    });
    return result;
}

module.exports = {
    getAllUser,
    addUser,
    loginUser,
    getUserByEmail,
    updateUserByEmail,
    updateUserPwdByEmail
}
