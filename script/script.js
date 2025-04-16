// Show personal message using variables
function showMessage() {
    let name = "Meowster";
    let age = 3;
    let bonus = age + 2;
    let shelter = "VietVibe Cat Shelter";
    let message = "Hey " + name + ", your age is " + age + 
                  ". You are qualified to stay at " + shelter +
                  ". You get a bonus of " + bonus + " treats!";
    alert(message);
}

// Age check
function checkAge() {
    let catAge = 2;
    if (catAge >= 1) {
        alert("This kitty is old enough to be adopted!");
    } else {
        alert("This kitten is too young for adoption.");
    }
}


// Repeat alert using a for loop
function showMany() {
    for (let i = 1; i <= 5; i++) {
        alert("Cat fact #" + i + ": Cats sleep up to 16 hours a day!");
    }
}

// Change the color of the header or any target element
function changeColor() {
    const header = document.getElementById("main-title");
    if (header) {
        header.style.color = "#a23e48"; // red tone
        header.style.backgroundColor = "#fff0f5"; // soft pink
    }
}

// Swap image to Luna
function changeToLuna()
    {
        document.getElementById("lunasimba").src="https://images.unsplash.com/photo-1552944150-6dd1180e5999?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }


// Swap image to Simba
function changeToSimba()
    {
        document.getElementById("lunasimba").src="https://static.wixstatic.com/media/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg/v1/fill/w_640,h_620,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/103d43_9ecc1086f64147b9afe8a9c3333b1a1a~mv2.jpg"
    }


// Swap to alternate theme
function changeTheme() {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "#f2f2f2";
  
    // Nav bar
    const nav = document.querySelector("nav");
    if (nav) {
      nav.style.backgroundColor = "#333";
      nav.style.borderBottom = "5px solid #ff6347";
    }
  
    // Nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.style.color = "#f2f2f2";
    });
  
    // Container box
    const container = document.querySelector(".container");
    if (container) {
      container.style.backgroundColor = "#2e2e2e";
      container.style.borderRadius = "10px";
      container.style.padding = "20px";
    }
  
    // Buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.style.backgroundColor = "#ff6347";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "6px";
    });
  
    // Footer
    const footer = document.querySelector(".site-footer");
    if (footer) {
      footer.style.backgroundColor = "#333";
      footer.style.color = "#ccc";
      footer.style.borderTop = "5px solid #ff6347";
    }
  }
  

// Change inner text of a button (e.g. after click)
function changeInner() {
    const btn = document.getElementById("okButton");
    if (btn) {
        btn.innerHTML = "You clicked me!";
    }
}

function hoverFunction() {
    const element = document.getElementById("hoverTarget");
    if (element) {
        element.style.background = "#f8b195";
    }
}

// count
let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("counter").textContent = "Count: " + count;
}

function generateMessages() {
    const container = document.getElementById("loop-messages");
    container.innerHTML = ""; // reset
    for (let i = 1; i <= 5; i++) {
      const p = document.createElement("p");
      p.textContent = "Cat Fact #" + i + ": Cats sleep up to 16 hours a day!";
      container.appendChild(p);
    }
  }
  