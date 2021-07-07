// script to signup
const loginHandler = async (event) => {
    event.preventDefault();
  
    // collect inputs
    // const user_id = session.user_id;
    const Name = document.querySelector('#name').value.trim();
    const Text = document.querySelector('#text').value.trim();
    const Keyword = document.querySelector('#keyword').value.trim();
    console.log(Name, Text, Keyword);
    
    if (username && password) {
      const response = await fetch('/api/links', {
        method: 'POST',
        body: JSON.stringify({ Name, Text, Keyword}),
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
document.querySelector('.form-resource').addEventListener('submit', loginHandler);