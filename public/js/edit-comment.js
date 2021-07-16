//////////////////////////////////////////////////////
// script to update comment
const updateCommentHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  const comment = document.querySelector('#edit-comment-content').value.trim();
  // console.log(id, content);
  
  if (id && comment) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if comment update is successful
    if (response.ok) {
      document.location.replace(`/comments`);
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#update-comment-btn').addEventListener('click', updateCommentHandler);

//////////////////////////////////////////////////////
// script to delete comment
const deleteCommentHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  // console.log(id);
  
  if (id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });

    // redirect to dashboard if comment delete is successful
    if (response.ok) {
      document.location.replace('/comments');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#delete-comment-btn').addEventListener('click', deleteCommentHandler);