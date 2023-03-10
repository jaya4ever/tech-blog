
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
  {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      content: {
          type: DataTypes.TEXT,
          allowNull: false,
          
      },
    },
  {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
  }
)

// Export the model
module.exports = Post;