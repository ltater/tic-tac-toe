$(function() {

var $playerOne = {name: null, tile: null, turn: null, moves: [], wins: 0};
var $playerTwo = {name: null, tile: null, turn: null, moves: [], wins: 0};

// Introduction
	// Click start to play Tic Tac Toe!
		$(".prompts").html("Click start to play Tic Tac Toe!").append("<input type='button' id='start' value='start'>");

	// How many players do you have? One or two?
		$("#start").on("click", function() {
			$(".prompts").html("How many players?").append("<input type='button' id='one-player' value='One Player'>").append("<input type='button' id='two-player' value='Two Players'>");
	
	// Please enter the name for player 1
			$("#two-player").on("click", function() {
				$(".prompts").html("What is the name of Player 1?").append("<input type='text' id='player-one-name'>").append("<input type='button' id='submit-player-one' value='Submit'>");

	// Store player 1's name
			$("#submit-player-one").on("click", function() {
				//When you click to submit player 1, store the name in the stat section
				$playerOne.name = $("#player-one-name").val()
				$("#player-one-variable").html('Player 1: ' + $playerOne.name);
				console.log($playerOne.name);

	// Please enter a name for player 2
				$(".prompts").html("What is the name of Player 2?").append("<input type='text' id='player-two-name'>").append("<input type='button' id='submit-player-two' value='Submit'>");

	// Store player 2's name
			$("#submit-player-two").on("click", function() {
				$playerTwo.name = $("#player-two-name").val();
				$("#player-two-variable").html('Player 2: ' + $playerTwo.name);
				console.log($playerTwo.name);

	// Let's flip a coin to see who goes first
				$(".prompts").html("Let's flip a coin to see who goes first. " + $playerOne.name + " is heads. " + $playerTwo.name + " is tails.").append("<input type='button' id='coin-flip' value='Flip!'>");

	// Play heads or tails
			$("#coin-flip").on("click", function() {
				var coinFlipWinner = Math.random();
				var coinFlipLoser;
				if (coinFlipWinner < 0.5) {
					coinFlipWinner = $playerOne;
					coinFlipLoser = $playerTwo;

					//Set whose turn it is to play
					$playerOne.turn = true;
					$playerTwo.turn = false;
					//console.log('P1 true - player 1s turn is' + $playerOne.turn);
					//console.log('P2 false - player 2s turn is' + $playerTwo.turn);					

					$(".prompts").html("Heads wins! " + coinFlipWinner.name + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					//console.log(coinFlipWinner);
					//console.log(coinFlipLoser);

				} else if (coinFlipWinner > 0.5) {
					coinFlipWinner = $playerTwo;
					coinFlipLoser = $playerOne;

					//Set whose turn it is to play
					$playerOne.turn = false;
					$playerTwo.turn = true;
					//console.log('P1 - false player 1s turn is' + $playerOne.turn);
					//console.log('P2 - true player 2s turn is' + $playerTwo.turn);

					$(".prompts").html("Tails wins! " + coinFlipWinner.name + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					//console.log(coinFlipWinner);
					//console.log(coinFlipLoser);

				} else {
					$(".prompts").html("Drat. It's a tie. Work this out.");
					//console.log("Drat. It's a tie. Work this out.");
				}

			// If the winner chooses X, give the winner X and the loser O

			$("#tile-x").on("click", function() {
				coinFlipWinner.tile = 'X';
				coinFlipLoser.tile = 'O';

				$("#player-one-tile").html($playerOne.tile);
				$("#player-two-tile").html($playerTwo.tile);

				$(".prompts").html(coinFlipWinner.name + " choose a square.")
			});

			// If the winner chooses O, give the winner O and the loser X
			$("#tile-o").on("click", function() {
				coinFlipWinner.tile = 'O';
				coinFlipLoser.tile = 'X';
				
				$("#player-one-tile").html($playerOne.tile);
				$("#player-two-tile").html($playerTwo.tile);

				$(".prompts").html(coinFlipWinner.name + " choose a square.")
			});
			});
			});
			});
			});
		});


// Play the game

//var winningCombo = [[a, b, c], [d, e, f], [g, h, i], [a, d, g], [b, e, h], [c, f, i], [a, e, i], [c, e, g]];

/*var $playerOne = {name: null, tile: 'X', turn: true, moves: [], wins: 0};
var $playerTwo = {name: null, tile: 'O', turn: false, moves: [], wins: 0};

// Set coinFlipWinner's turn to true;
// Set coinFlipLoser's turn to false;

$(".tic-square").on("click", function() {
	if ($playerOne.turn = true){
		$(this).html($playerOne.tile);
	} else {
		$(this).html($playerTwo.tile);
	}
});*/



});