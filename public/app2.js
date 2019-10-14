console.log("Let's play! ( ⋂ ‿ ⋂ )");

//--------------- START OF GAME SET UP AND CONFIGURATIONS ---------------//
//Source of the computer words
var words = [
];


const options = {
    mode: 'no-cors'
};

fetch('http://localhost:8080/public/words.txt')
.then((resp) => resp.text()) 
  .then(function(text) {
    // console.log('text: '+ text) 
  words = text.split('\n');
  console.log(words);
  startGame();
  })


function startGame () {
// Arrays //
let underScore = [];        // returns underscores depending on length of word
let rightAnswer = [];     // correctly guessed letters go here
let wrongAnswer = [];       // incorrectly guessed letters go here
var lives = 6;              // number of guesses left 


document.getElementById("lives").innerHTML = lives;


//Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docrightLetters = document.getElementsByClassName('rightGuess');
let docwrongLetters = document.getElementsByClassName('wrongLetters');


//Computer picks a random word from array
let randomNumber = Math.floor(Math.random() * words.length);
let chosenWord = words[randomNumber];
console.log('The answer is: ' + chosenWord);

//Create underscores based on length of a word
let createUnderscore = () => {
  for(let i = 0; i < chosenWord.length; i++) {
    underScore.push('_');
  }
  return underScore;
}
//--------------- END OF GAME SET UP AND CONFIGURATIONS ---------------//


//------------------------- START OF GAME LOGIC  ---------------------------//
//Get users guess from keys
document.addEventListener('keypress', (event) => {
  let keycode = event.keyCode;    
  let usersLetter = String.fromCharCode(keycode).toLowerCase();     

// Add the right letter to the rightAnswer array or the wrong letter to the wrongAnswer array
  let i = 0;
  while (i < chosenWord.length) {
    if (chosenWord[i] === usersLetter) {
        underScore[i] = usersLetter;
    }
    i++;
} 

  if (chosenWord.indexOf(usersLetter) >= 0) {
    rightAnswer.push(usersLetter);
  } else {
    wrongAnswer.push(usersLetter);
    lives--;
    document.getElementById("lives").innerHTML = lives;
  }

console.log('wrong answer array: ' + wrongAnswer);

let uniqueWrongAnswer = new Set (wrongAnswer);
console.log('unique wrong' + uniqueWrongAnswer);

let backToWrongAnswerArray = [...uniqueWrongAnswer];
console.log('unique wrong answer: ' + backToWrongAnswerArray);
  

// If lives = 0, then the user loses and the game restarts.
  if (document.getElementById("lives").innerHTML == 0){
    alert('Sorry, you lost. Try again! (◕ ︵ ◕)');
    location.reload();
  }

// Checks to see if word is complete. If it is, user wins.
  if (underScore.join('') == chosenWord) {                  
    alert('Congratulations, you win! ٩(ˊ ᗜ ˋ *)و'); 
  } else {
    //This adds letter to the "wrong answer" box
    docwrongLetters[0].innerHTML = backToWrongAnswerArray;
  }

//DOM manipulation, adds letter to underscores
  docUnderScore[0].innerHTML = underScore.join(' ');
    })
docUnderScore[0].innerHTML = createUnderscore().join(' ');
}
//------------------------- END OF GAME LOGIC  ---------------------------//

//------------------------- RESTART GAME FUNCTION -----------------------//
function restartGame()
{
location.reload();
}


