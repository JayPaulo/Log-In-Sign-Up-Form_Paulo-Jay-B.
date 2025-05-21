document.getElementById('logInForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('logInEmail').value;
  const password = document.getElementById('logInPassword').value;

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
      window.location.href = 'loggedIn.html';
  } else {
      document.getElementById('logInError').innerText = "Invalid email or password.";
  }
});
