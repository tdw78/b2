'use strict';
const faker = require("faker");

let topics = [];

 for(let i = 1 ; i <= 4 ; i++){
   topics.push({
     title: faker.hacker.noun(),
     description: faker.hacker.phrase(),
     createdAt: new Date(),
     updatedAt: new Date()
   });
 }


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Topics", topics, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  }
};
