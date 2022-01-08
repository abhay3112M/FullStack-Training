const { Sequelize, DataTypes } = require('sequelize');

module.exports=(sequelize) => {
    console.log('building the author model ');
    sequelize.define(
        "author", //Name of this model
        {
           //properties of his model
           name: DataTypes.STRING,
           id: {
               type: DataTypes.STRING,
               primaryKey: true
           },
           biography: DataTypes.STRING(8000),
           photograph: DataTypes.STRING
        }
    );
} 