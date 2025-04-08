//=========================================================================
// ========= TOGGLE MENU ======================
//=========================================================================
let fName = "Joseph";
let lName = "Adams";
let greeting = "Hello and Good day";
console.log(`${greeting} ${fName} ${lName}, how are you today?`);

//Toggle the menu visibility when menu button is clicked
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

//=========================================================================
// ========= SHOW ALLERT ======================
//=========================================================================
const alertButton = document.getElementById("alertButton");

alertButton.addEventListener("click", function () {
  alert("Hello! this is an alert message.");
});

//=========================================================================
// ========= INCREMENT & DECREMENT ======================
//=========================================================================

const counterDisplay = document.getElementById("counter");
const IncrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

//initialize the counter
let count = 0;

//Increment
incrementButton.addEventListener("click", function () {
  count += 1; //increment by 1
  counterDisplay.textContent = count;
});

decrementButton.addEventListener("click", function () {
  count -= 1;
  counterDisplay.textContent = count;
});

//=========================================================================
// ========= RESET ======================
//=========================================================================

const resetButton = document.getElementById("resetButton");
//Add an event listener to the reset button to refresh the page.
resetButton.addEventListener("click", function () {
  location.reload(); //refresh the page
});

//=========================================================================
// ========= FORMS ======================
//=========================================================================

const usernameInput = document.getElementById("username");
const greetingButton = document.getElementById("greetingButton");
const greetingMessage = document.getElementById("greetingMessage");

//get the references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
  const namePattern = /[a-zA-Z\s]+$/; // Regular expression to allow only letters and
  return namePattern.test(name);
}

//Add an event listener to the button
greetingButton.addEventListener("click", function () {
  // Get the value of the input
  const username = usernameInput.value.trim();
  greetingMessage.textContent = `Hello! ${username}!`;

  //Check if the input is not empty and is valid
  if (username === "") {
    greetingMessage.textContent = "Please enter your name.";
  } else if (!isValidName(username)) {
    greetingMessage.textContent = "Invallid input. Please use only letters";
  } else {
    greetingMessage.textContent = `Hello! ${username}!`;
  }
});

//=========================================================================
// ========= DOM ======================
//=========================================================================
const addParagraphButton = document.getElementById("addParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");

addParagraphButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  newParagraph.textContent =
    "Congratualation on Learning Practical JavaScript!";

  paragraphContainer.appendChild(newParagraph);
});
