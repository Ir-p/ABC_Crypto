// cancel button handler
const cancelPostHandler = async (event) => {
  event.preventDefault();

  document.location.replace('/posts');
};

document.querySelector('#cancel-post-btn').addEventListener('click', cancelPostHandler);