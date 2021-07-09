//////////////////////////////////////////////////////
// script to update post
const updatePostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  const comment = document.querySelector('#edit-post-content').value.trim();
  // console.log(id, content);
  
  if (id && comment) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post update is successful
    if (response.ok) {
      document.location.replace(`/posts`);
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#update-post-btn').addEventListener('click', updatePostHandler);

//////////////////////////////////////////////////////
// script to delete post
const deletePostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  // console.log(id);
  
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });

    // redirect to dashboard if post delete is successful
    if (response.ok) {
      document.location.replace('/posts');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#delete-post-btn').addEventListener('click', deletePostHandler);