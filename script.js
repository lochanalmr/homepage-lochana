const textToType = "This is Lochana's 🏠Home on the 🌐Internet";
const typingSpeed = 75; // Speed in milliseconds
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    document.getElementById("typewriter-text").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Call the function to start the effect
typeWriter();
