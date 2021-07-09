// script to create a comment post
const createPostHandler = async (event) => {
  console.log("I am here");
  event.preventDefault();

  // collect inputs
  // const user_id = document.querySelector('#user_id').value.trim();
  const link_id = document.querySelector('#create-post-link-id').value.trim();
  const comment = document.querySelector('#create-post-content').value.trim();
  console.log(comment, link_id);
  
  if (link_id && comment) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ comment, link_id }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post creation is successful
    if (response.ok) {
      document.location.replace('/posts');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('#create-post-btn').addEventListener('click', createPostHandler);