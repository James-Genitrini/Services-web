const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('miniproj_bdd', 'miniproj', 'miniproj', {
    host: 'localhost',
    dialect: 'postgres',  
    logging: false
  });
  

sequelize.authenticate()
  .then(() => console.log('Connection to the database successful!'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
