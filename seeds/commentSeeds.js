// import models
const { Comment } = require('../models');

// sample comments
const sample_comments = [
  {
    comment: 'Really useful review.',
    user_id: '3',
    link_id: '1'
  },
  {
    comment: 'Seems biased.',
    user_id: '1',
    link_id: '1'
  },
  {
    comment: 'Good review.',
    user_id: '2',
    link_id: '2'
  },
  {
    comment: 'Excellent article.',
    user_id: '3',
    link_id: '3'
  },
  {
    comment: 'Need to research on bitcoin.',
    user_id: '3',
    link_id: '4'
  }
];

// create and insert sample user data
const commentSeeds = () => Comment.bulkCreate(sample_comments);

// export
module.exports = commentSeeds;