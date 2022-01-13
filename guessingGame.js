document.addEventListener("DOMContentLoaded", () => {
  let messageBox = document.querySelector("p")
  let submitButton = document.querySelectorAll("input")[1];
  let textBox = document.querySelectorAll("input")[0];
  let newGameLink = document.querySelector("a");
  let guessCount = 0;
  let target = getRandomNum();

  newGameLink.addEventListener("click", e => {
    e.preventDefault();

    messageBox.textContent = "Guess a number from 1 to 100"
    target = getRandomNum()
    guessCount = 0;
  })
  submitButton.addEventListener("click", e => {
    e.preventDefault();
    let pluralSingular = guessCount > 1 ? "es" :"";

    let guess = textBox.value;
    if (isValid(guess)) {
      console.log(guess);
      guessCount++;
      if (guess < target) {
        messageBox.textContent = `The target number is higher than ${guess}`
      } else if (guess > target) {
        messageBox.textContent = `The target number is lower than ${guess}`;
      } else {
        messageBox.textContent = `${guess} is the right number! You guessed it. It took you ${guessCount} guess${pluralSingular}.`
      }
    } else {
      console.log("please only input numbers");
    }
  })
})
function getRandomNum() {
  let random = Math.floor(Math.random() * 100 + 1)
  return random;
}
function isValid(num) {
  if (isNaN(num)) {
    return false
  } else {
    return true
  }
}