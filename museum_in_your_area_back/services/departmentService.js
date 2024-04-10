const { Department } = require("../models");


async function getDepartments(){
    try {
        return await Department.findAll();
      } catch (error) {
        console.error("Error fetching departments:", error);
        throw error;
      }
}

module.exports = {getDepartments}