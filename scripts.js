document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('language-dropdown');
    const selectedFlag = document.getElementById('selected-flag');

    const translations = {
        'us': {
            'title': 'Passport Tracking System',
            'placeholder': 'Enter passport number',
            'trackButton': 'Track',
            'loginButton': 'Login',
            'signupButton': 'Sign Up',
            'headerHome': 'Home',
            'headerAbout': 'About Us',
            'headerOffices': 'Passport Offices',
            'headerContact': 'Contact Us'
        },
        'es': {
            'title': 'Sistema de Rastreo de Pasaportes',
            'placeholder': 'Ingrese el número de pasaporte',
            'trackButton': 'Rastrear',
            'loginButton': 'Iniciar sesión',
            'signupButton': 'Registrarse',
            'headerHome': 'Inicio',
            'headerAbout': 'Sobre Nosotros',
            'headerOffices': 'Oficinas de Pasaportes',
            'headerContact': 'Contáctanos'
        },
        'fr': {
            'title': 'Système de Suivi des Passeports',
            'placeholder': 'Entrez le numéro de passeport',
            'trackButton': 'Suivre',
            'loginButton': 'Connexion',
            'signupButton': 'S\'inscrire',
            'headerHome': 'Accueil',
            'headerAbout': 'À Propos',
            'headerOffices': 'Bureaux des Passeports',
            'headerContact': 'Contactez-nous'
        }
        
    };
    document.getElementById('language-dropdown').addEventListener('change', function() {
        var selectedOption = this.options[this.selectedIndex];
        var flagSrc = selectedOption.getAttribute('data-flag');
        
        document.getElementById('selected-flag').src = flagSrc;
    });
    
    function updateLanguage(languageCode) {
        const translation = translations[languageCode];
        if (translation) {
            document.querySelector('.title').textContent = translation.title;
            document.querySelector('input[type="text"]').placeholder = translation.placeholder;
            document.getElementById('track-button').textContent = translation.trackButton;
            document.querySelector('.login-btn').textContent = translation.loginButton;
            document.querySelector('.signup-btn').textContent = translation.signupButton;
            document.querySelectorAll('.nav-link')[0].textContent = translation.headerHome;
            document.querySelectorAll('.nav-link')[1].textContent = translation.headerAbout;
            document.querySelectorAll('.nav-link')[2].textContent = translation.headerOffices;
            document.querySelectorAll('.nav-link')[3].textContent = translation.headerContact;
        }
    }

    languageDropdown.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        const flagSrc = event.target.options[event.target.selectedIndex].dataset.flag;
        selectedFlag.src = flagSrc;
        updateLanguage(selectedLanguage);
    });

    // Initialize the flag based on the default selection
    const initialFlagSrc = languageDropdown.options[languageDropdown.selectedIndex].dataset.flag;
    selectedFlag.src = initialFlagSrc;

    // Function to display current date and time
    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
    }

    // Update date and time every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
