'use strict';

module.exports = function(sequelize, DataTypes) {

  var Movie = sequelize.define('Movie', {

    name: DataTypes.STRING,

    message: DataTypes.STRING

  }, {

    classMethods: {

      associate: function(models) {

      }

    }

  });

  return Movie;

};