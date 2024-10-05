
document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem('loggedInUser'); // Fetch the username from localStorage
    const headerContent = document.querySelector('.header-content'); // Header element for navigation links
    const userInfo = document.getElementById('user-info'); // User info section
    const usernameDisplay = document.getElementById('username'); // Display username in the navbar
    const userWelcome = document.getElementById('user-welcome'); // Welcome message for dashboard
    const welcomeMessage = document.getElementById('welcome-message'); // Welcome message in navbar
    const logoutBtn = document.getElementById('logout-btn'); // Logout button

    // Function to render header based on user login status
    function renderHeader() {
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

            // Show the username in the navbar and welcome message
            usernameDisplay.textContent = loggedInUser;
            userWelcome.textContent = loggedInUser;
            welcomeMessage.textContent = `Welcome back, ${loggedInUser}`;
            userInfo.style.display = 'block'; // Display the user info section
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
            userInfo.style.display = 'none'; // Hide the user info section
        }
    }

    // Render the header initially
    renderHeader();

    // Logout functionality
    if (loggedInUser) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser'); // Clear the logged-in user
            // Update the UI after logout
            renderHeader();
            // Optionally redirect to the login page after logout
            window.location.href = 'login.html'; // Uncomment this line if you want to redirect
        });
    }
});
