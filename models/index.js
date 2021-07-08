// import models
const User = require('./User');
const Link = require('./Link');
const Comment = require('./Comment');

// User hasMany Comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// User hasMany Link
User.hasMany(Link, {
  foreignKey: 'user_id'
});

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Link belongsTo User
Link.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment belongsTo Link
Comment.belongsTo(Link, {
  foreignKey: 'link_id'
});

// Link hasMany Comments
Link.hasMany(Comment, {
  foreignKey: 'link_id',
  onDelete: 'CASCADE'
});

// export
module.exports = {
  User,
  Link,
  Comment 
};