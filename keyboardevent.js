const letters = "abcdefghijklmnopqrstuvwxyz".split("");

let secretKey = letters[Math.floor(Math.random() * letters.length)];

document.body.addEventListener("keydown", function(event) {
  // If the key you pressed is the secret key, append "SECRET KEY PRESSED" to the body in a tag of your choice.
  if (event.key === secretKey) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = "SECRET KEY PRESSED";
    list.appendChild(li);
    
    // After the secret key is pressed, randomly pick another secret key and assign it to your secret key variable.
    secretKey = letters[Math.floor(Math.random() * letters.length)];
  }
});
