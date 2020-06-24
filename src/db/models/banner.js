'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Banner.belongsTo(models.Topic, {
        foreignKey: "topicId",
        onDelete: "CASCADE"
      });
    };
  };
  Banner.init({
    source: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
   },
   topicId: {
     type: DataTypes.INTEGER,
     onDelete: "CASCADE",
     references: {
       model: "Topics",
       key: "id",
       as: "topicId"
     } 
   }
  }, {
    sequelize,
    modelName: 'Banner',
  });
  return Banner;
};