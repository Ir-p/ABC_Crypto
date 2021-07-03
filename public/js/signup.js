// script to signup
const loginHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const first_name = document.querySelector('#signup-firstname').value.trim();
  const last_name = document.querySelector('#signup-lastname').value.trim();
  const username = document.querySelector('#signup-username').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  console.log(first_name, last_name, username, password);
  
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// browser event handler
document.querySelector('.signup-form').addEventListener('submit', loginHandler);