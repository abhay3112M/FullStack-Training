const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    console.log('building the book model');
    sequelize.define(
        "book", //Name of this model
        {
            //properties of his model
            isbn: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            price: DataTypes.INTEGER,
            cover: DataTypes.STRING,
            rating: DataTypes.DOUBLE,
            details: DataTypes.STRING(5000)
    
        }
    );
} 