// script to create a comment
const createCommentHandler = async (event) => {
  console.log("I am here");
  event.preventDefault();

  // collect inputs
  // const user_id = document.querySelector('#user_id').value.trim();
  const link_id = document.querySelector('#create-comment-link-id').value.trim();
  const comment = document.querySelector('#create-comment-content').value.trim();
  console.log(comment, link_id);
  
  if (link_id && comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, link_id }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if comment creation is successful
    if (response.ok) {
      document.location.replace('/comments');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#create-comment-btn').addEventListener('click', createCommentHandler);