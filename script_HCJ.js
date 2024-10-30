// Get references to elements
const toggleButton = document.getElementById('toggleMessageButton');
const message = document.getElementById('message');
const colorButton = document.getElementById('colorChangeButton');

// Toggle message visibility and button text
toggleButton.addEventListener('click', function() {
  console.log("Toggle Button Clicked"); // Debugging statement
  if (message.classList.contains('hidden')) {
    message.classList.remove('hidden');
    message.classList.add('show'); // Trigger fade-in effect
    toggleButton.textContent = "Hide Message"; // Change button text
  } else {
    message.classList.remove('show');
    message.classList.add('hidden');
    toggleButton.textContent = "Show Message"; // Reset button text
  }
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log("Generated Color:", color); // Debugging statement
  return color;
}

// Change background color on button click
colorButton.addEventListener('click', function() {
  console.log("Color Change Button Clicked"); // Debugging statement
  document.body.style.backgroundColor = getRandomColor();
});
