	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var guessList = '';

	

function randomLetter() {
	var newLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
		return newLetter;
}

var compGuess = randomLetter();
console.log(compGuess);


document.addEventListener('keyup', function (argument) {
	var key = argument.key;
	var test = document.getElementById('guessList');
	test.innerHTML = key; 



	if (key === compGuess){
			wins = ++wins;
			guessesLeft = 10;
			var showWins = document.getElementById('wins');
			showWins.innerHTML = wins;
			compGuess = randomLetter();
			console.log('new letter: ' + compGuess);
			

		}else{
			guessesLeft--;
			var gl = document.getElementById('guessesLeft');
			gl.innerHTML = guessesLeft;
		} 

	if (guessesLeft === 0){
		guessesLeft = 10;
		++losses;
		var updateLosses = document.getElementById('losses');
		updateLosses.innerHTML = losses;

		compGuess = randomLetter();
		console.log('new letter: ' + compGuess);
	}
	})



