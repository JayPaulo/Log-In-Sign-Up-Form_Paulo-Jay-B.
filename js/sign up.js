let users = [];

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const passwordConfirm = document.getElementById('signUpPasswordConfirm').value;

    if (password !== passwordConfirm) {
        document.getElementById('passwordConfirmError').innerText = "Passwords do not match.";
        return;
    }

    users.push({ name, email, password });
    document.getElementById('formSuccess').innerText = "Sign up successful!";

    setTimeout(() => {
        window.location.href = 'loggedIn.html';
    }, 2000);
});
