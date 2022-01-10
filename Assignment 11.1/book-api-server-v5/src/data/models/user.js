const { Sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize) => {
    console.log('building the user model...');
    sequelize.define(
        "user", //Name of this model
        {
             //properties of his model
             username: DataTypes.STRING,
             email: {
                 type: DataTypes.STRING,
                 primaryKey: true
             },
             password: DataTypes.STRING,
             photograph: DataTypes.STRING
        }
    );
} 