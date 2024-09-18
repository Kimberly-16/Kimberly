document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('language-dropdown');
    const selectedFlag = document.getElementById('selected-flag');

    languageDropdown.addEventListener('change', function() {
        const selectedOption = languageDropdown.options[languageDropdown.selectedIndex];
        const flagSrc = selectedOption.getAttribute('data-flag');
        selectedFlag.src = flagSrc;
    });

    // Initialize the flag based on the default selection
    const initialFlagSrc = languageDropdown.options[languageDropdown.selectedIndex].getAttribute('data-flag');
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
