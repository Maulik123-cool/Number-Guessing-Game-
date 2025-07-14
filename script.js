let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "🚫 Please enter a number between 1 and 100!";
    return;
  }

  if (guess === numberToGuess) {
    message.textContent = `🎉 You got it! The number was ${numberToGuess}.`;
    attemptsDisplay.textContent = `It took you ${attempts} tries.`;
  } else if (guess < numberToGuess) {
    message.textContent = "Too low! 📉 Try again.";
  } else {
    message.textContent = "Too high! 📈 Try again.";
  }
}

function resetGame() {
  numberToGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '';
}
