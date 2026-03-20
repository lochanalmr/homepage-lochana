const textToType = "LemonHealth";
const typingSpeed = 75; // Speed in milliseconds
let index = 0;

function typeWriter2() {
  if (index < textToType.length) {
    document.getElementById("typewriter-text-2").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter2, typingSpeed);
  }
}

// Call the function to start the effect
typeWriter2();
