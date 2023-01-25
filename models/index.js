const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});


Post.belongsTo(User, {
  foreignKey: 'user_Id',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_Id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_Id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks: true
});

module.exports = {
  User,
  Comment,
  Post
};