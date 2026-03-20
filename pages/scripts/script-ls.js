const textToType = "LemonSearch";
const typingSpeed = 75; // Speed in milliseconds
let index = 0;

function typeWriter3() {
  if (index < textToType.length) {
    document.getElementById("typewriter-text-3").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter3, typingSpeed);
  }
}

// Call the function to start the effect
typeWriter3();
