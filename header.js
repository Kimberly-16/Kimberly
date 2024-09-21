document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    const headerContent = document.querySelector('.header-content');
    
    if (loggedInUser) {
        // User is logged in, display their username and Dashboard link
        headerContent.innerHTML = `
            <a href="index.html" class="nav-link">Home</a>
            <a href="about.html" class="nav-link">About Us</a>
            <a href="offices.html" class="nav-link">Passport Offices</a>
            <a href="contact.html" class="nav-link">Contact Us</a>
            <span class="username">Welcome, ${loggedInUser}</span>
            <a href="dashboard.html" class="nav-link">Dashboard</a>
        `;
    } else {
        // User is not logged in, display Sign In and Sign Up buttons
        headerContent.innerHTML = `
            <a href="index.html" class="nav-link">Home</a>
            <a href="about.html" class="nav-link">About Us</a>
            <a href="offices.html" class="nav-link">Passport Offices</a>
            <a href="contact.html" class="nav-link">Contact Us</a>
            <a href="signin.html" class="nav-link">Sign In</a>
            <a href="signup.html" class="nav-link">Sign Up</a>
        `;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch the username from localStorage
    const userInfo = document.getElementById('user-info');
    const usernameDisplay = document.getElementById('username');
    const userWelcome = document.getElementById('user-welcome');
    const welcomeMessage = document.getElementById('welcome-message');
    const logoutBtn = document.getElementById('logout-btn');

    if (loggedInUser) {
        // Show the username in the navbar and welcome message
        usernameDisplay.textContent = loggedInUser;
        userWelcome.textContent = loggedInUser;
        welcomeMessage.textContent = `Welcome back, ${loggedInUser}`;
        userInfo.style.display = 'block'; // Display the user info section
    } else {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    }

    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedInUser'); // Clear the logged-in user
        window.location.href = 'login.html'; // Redirect to the login page
    });
});

