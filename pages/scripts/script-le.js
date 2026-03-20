const textToType = "LemonEye";
const typingSpeed = 75; // Speed in milliseconds
let index = 0;

function typeWriter4() {
  if (index < textToType.length) {
    document.getElementById("typewriter-text-4").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter4, typingSpeed);
  }
}

// Call the function to start the effect
typeWriter4();
