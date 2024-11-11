function login() {
    const username = $('#username').val();
    const password = $('#password').val();

    // Perform simple check for demo purposes
    if (username === 'itm' && password === 'goi') {
        window.location.href = 'inex.html';

        // Redirect to your Supermarket Billing System page
        window.location.href = 'inex.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
