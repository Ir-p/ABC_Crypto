// model for blog comments
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create model
class Comment extends Model {}

// initialize
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    link_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'link',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

// export
module.exports = Comment;