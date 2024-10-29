// Get references to the button and message paragraph
const button = document.getElementById('welcomeButton');
const message = document.getElementById('message');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Toggle the 'hidden' class on the message element
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden'); // Show the message
        message.textContent = "Hello! Thanks for visiting my web page."; // Optional: update message content
    } else {
        message.classList.add('hidden'); // Hide the message
    }
});
