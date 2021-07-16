// cancel button handler
const cancelCommentHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/comments');
};

document.querySelector('#cancel-comment-btn').addEventListener('click', cancelCommentHandler);