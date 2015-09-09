$(function() {

var $playerOne = {name: null, tile: null, moves: [], wins: 0};
var $playerTwo = {name: null, tile: null, moves: [], wins: 0};

/*// Introduction
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
					coinFlipWinner = $playerOne.name;
					coinFlipLoser = $playerTwo.name;
					$(".prompts").html("Heads wins! " + coinFlipWinner + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					//console.log(coinFlipWinner);
					//console.log(coinFlipLoser);
				} else if (coinFlipWinner > 0.5) {
					coinFlipWinner = $playerTwo.name;
					coinFlipLoser = $playerOne.name;
					$(".prompts").html("Tails wins! " + coinFlipWinner + ", choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					//console.log(coinFlipWinner);
					//console.log(coinFlipLoser);
				} else {
					$(".prompts").html("Drat. It's a tie. Work this out.");
					//console.log("Drat. It's a tie. Work this out.");
				};

			// If coinFlipWinner chooses X, then coinFlipLoser gets O
			// If coinFlipWinner chooses O, then coinFlipWinner gets X


			// Begin the game by choosing X

			$("#tile-x").on("click", function() {
				$(".prompts").html(coinFlipWinner + " choose a square.")

			});
			});
			});
			});
			});
		});

*/
// Play the game

var winningCombo = [[a, b, c], [d, e, f], [g, h, i], [a, d, g], [b, e, h], [c, f, i], [a, e, i], [c, e, g]];

$(".tic-square").on("click", function() {
	$(this).html('X');
	
});



});