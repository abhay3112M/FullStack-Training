const {DataTypes} =require('sequelize');

module.exports=(sequelize)=>{

        sequelize.define('User',{  //user by default will be mapped to a table called Users

            email:{
                type:DataTypes.STRING,
                primaryKey:true
            },
            name:DataTypes.STRING,
            photo:DataTypes.STRING(5000),
            password:DataTypes.STRING,
            roles:{
                type:DataTypes.STRING,
                get:function(){
                    // this.getDataValue('roles').split(',');
                    this.getDataValue('roles');
                },
                set:function(value){
                    // this.setDataValue('roles', value.join(','));
                    this.setDataValue('roles');
                }
            }

        });
 

};