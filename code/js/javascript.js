$(function() {

// Introduction
	// Click start to play Tic Tac Toe!
		$(".prompts").html("Click start to play Tic Tac Toe!").append("<input type='button' id='start' value='start'>");

	// How many players do you have? One or two?
		$("#start").on("click", function() {
			$(".prompts").html("How many players?").append("<input type='button' id='one-player' value='One Player'>").append("<input type='button' id='two-player' value='Two Players'>");
	
	// Please enter the name for player 1
			$("#two-player").on("click", function() {
				$(".prompts").html("What is the name of Player 1?").append("<input type='text' id='player-one-name'>").append("<input type='button' id='submit-player-one' value='Submit'>");
	// Please enter the name for player 2

			$("#submit-player-one").on("click", function() {
				$(".prompts").html("What is the name of Player 2?").append("<input type='text' id='player-two-name'>").append("<input type='button' id='submit-player-two' value='Submit'>");
		
	// Let's flip a coin to see who goes first
			$("#submit-player-two").on("click", function() {
				$(".prompts").html("Let's flip a coin to see who goes first. Player 1 is heads. Player 2 is tails.").append("<input type='button' id='coin-flip' value='Flip!'>");

	// Play heads or tails
			$("#coin-flip").on("click", function() {
				var coinFlipWinner = Math.random();
				if (coinFlipWinner < 0.5) {
					coinFlipWinner = 'playerOne';
					$(".prompts").html("Heads wins! Player 1, choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					console.log(coinFlipWinner);
				} else if (coinFlipWinner > 0.5) {
					coinFlipWinner = 'playerTwo';
					$(".prompts").html("Tails wins! Player 2, choose X or O.").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");
					console.log(coinFlipWinner);
				} else {
					console.log("Drat. It's a tie. Work this out.");
				}
				//coin flip function
			});
			});
			});
			});
		});







	// Player x goes first! Do you want to be X or O?

// Play the game

});