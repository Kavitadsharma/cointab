
document.addEventListener('DOMContentLoaded', () => {
    const allUsersBtn = document.getElementById('allUsersBtn');
    const userInfoContainer = document.getElementById('userInfoContainer');
    const addUserBtn = document.getElementById('addUserBtn');
    const openUserBtn = document.getElementById('openUserBtn');
    let users = []; // Declare the users variable outside the event listener scope
  
    allUsersBtn.addEventListener('click', async () => {
      // Fetch all users from the server
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users = await response.json();
  
      // Display user information
      userInfoContainer.innerHTML = users.map(user => (
        `<div class="userCard" key=${user.id}>
          <p>Name: ${user.name}</p>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
          <p>Website: ${user.website}</p>
          <p>City: ${user.address.city}</p>
          <p>Company: ${user.company.name}</p>
        </div>`
      )).join('');
  
      // Show the "Add" button
      addUserBtn.style.display = 'block';
      openUserBtn.style.display = 'none';
    });
  
    addUserBtn.addEventListener('click', async () => {
      console.log(users)
      await fetch('http://localhost:3000/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(users.map(user => ({
            userId: user.id,
            Name: user.name,
            Email: user.email,
            Phone: user.phone,
            Website: user.website,
            City: user.address.city,
            Company: user.company.name,
          }))),
      });
  
      // Hide the "Add" button and show the "Open" button
      addUserBtn.style.display = 'none';
      openUserBtn.style.display = 'block';
    });
  
    openUserBtn.addEventListener('click', () => {
      window.location.href = `../post.html`;
    });
  });
  

  