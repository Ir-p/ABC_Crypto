// // script to signup
// const loginHandler = async (event) => {
//     event.preventDefault();
  
//     // collect inputs
//     const user_id = document.querySelector('#user_id').value.trim();
//     const Name = document.querySelector('#name').value.trim();
//     const Text = document.querySelector('#text').value.trim();
//     const Keyword = document.querySelector('#keyword').value.trim();
//     const link 
//     console.log(user_id, Name, Text, Keyword);
    
//     if (Name && Text && Keyword) {
//       const response = await fetch('/api/links', {
//         method: 'POST',
//         body: JSON.stringify({ user_id, Name, Text, Keyword}),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       // redirect to dashboard if sign up is successful
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

//   // browser event handler
// document.querySelector('.form-resource').addEventListener('submit', loginHandler);