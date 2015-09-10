$(function() {

var $playerOne = {name: null, tile: null, turn: null, moves: [], wins: 0};
var $playerTwo = {name: null, tile: null, turn: null, moves: [], wins: 0};
var players = [$playerOne, $playerTwo];

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

	// Please enter a name for player 2
				$(".prompts").html("What is the name of Player 2?").append("<input type='text' id='player-two-name'>").append("<input type='button' id='submit-player-two' value='Submit'>");

	// Store player 2's name
			$("#submit-player-two").on("click", function() {
				$playerTwo.name = $("#player-two-name").val();
				$("#player-two-variable").html('Player 2: ' + $playerTwo.name);

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
					console.log("player one's turn is " + $playerOne.turn);
					console.log("player two's turn is " + $playerTwo.turn);


					$(".prompts").html("Heads wins! " + coinFlipWinner.name + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");

				} else if (coinFlipWinner > 0.5) {
					coinFlipWinner = $playerTwo;
					coinFlipLoser = $playerOne;

					//Set whose turn it is to play
					$playerOne.turn = false;
					$playerTwo.turn = true;
					console.log("player one's turn is " + $playerOne.turn);
					console.log("player two's turn is " + $playerTwo.turn);

					$(".prompts").html("Tails wins! " + coinFlipWinner.name + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");

				} else {
					$(".prompts").html("Drat. It's a tie. Work this out.");
				}

			// DRY: look at the array of objects and determine turns

			// DRY: Can this be drier? If the winner chooses X, give the winner X and the loser O

			$("#tile-x").on("click", function() {
				coinFlipWinner.tile = 'X';
				coinFlipLoser.tile = 'O';

				$("#player-one-tile").html($playerOne.tile);
				$("#player-two-tile").html($playerTwo.tile);

				$(".prompts").html(coinFlipWinner.name + " choose a square.")
			});

			// DRY: Can this be drier? If the winner chooses O, give the winner O and the loser X
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

//var $playerOne = {name: null, tile: null, turn: null, moves: [], wins: 0};
//var $playerTwo = {name: null, tile: null, turn: null, moves: [], wins: 0};

		// HELP: Look at this array. If .turn is set to true, play .tile. Automatically find the true one without if/else.
		// If the player's turn is true, when he/she clicks on a square, put his/her tile in it


		//Issue: running through all of them because any time you click any old square, all of the functions with that click will run.
		//Need to get more specific and make it a one action situation.

		function swapTurns(turn) {
			if ($playerOne.turn === true) {
				$playerOne.turn = false;
				$(".prompts").html($playerTwo.name + " choose a square.")
				console.log("function: player one's new turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$playerOne.turn = true;
				$(".prompts").html($playerOne.name + " choose a square.")
				console.log("function: player one's new turn is " + $playerOne.turn);
			} else if ($playerTwo.turn === true) {
				$playerTwo.turn = false;
				$(".prompts").html($playerOne.name + " choose a square.")
				console.log("function: player two's new turn is " + $playerTwo.turn);
			} else if ($playerTwo.turn === false) {
				$playerTwo.turn = true;
				$(".prompts").html($playerTwo.name + " choose a square.")
				console.log("function: player two's new turn is " + $playerTwo.turn);
			}
		};


		$("#a").on("click", function() {
			if ($playerOne.turn === true){
				$("#a").html($playerOne.tile);
				console.log("#a player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#a").html($playerTwo.tile);
				console.log("#a player two's turn is " + $playerTwo.turn);
			}

			swapTurns()

		});

		$("#b").on("click", function() {
			if ($playerOne.turn === true){
				$("#b").html($playerOne.tile);
				console.log("#b player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#b").html($playerTwo.tile);
				console.log("#b player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#c").on("click", function() {
			if ($playerOne.turn === true){
				$("#c").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#c").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#d").on("click", function() {
			if ($playerOne.turn === true){
				$("#d").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#d").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#e").on("click", function() {
			if ($playerOne.turn === true){
				$("#e").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#e").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#f").on("click", function() {
			if ($playerOne.turn === true){
				$("#f").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#f").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#g").on("click", function() {
			if ($playerOne.turn === true){
				$("#g").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#g").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#h").on("click", function() {
			if ($playerOne.turn === true){
				$("#h").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#h").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

		$("#i").on("click", function() {
			if ($playerOne.turn === true){
				$("#i").html($playerOne.tile);
				console.log("#c player one's turn is " + $playerOne.turn);
			} else if ($playerOne.turn === false) {
				$("#i").html($playerTwo.tile);
				console.log("#c player two's turn is " + $playerTwo.turn);
			}

			swapTurns()
		});

});