$(function() {

var $playerOne = {name: null, tile: null, turn: null, moves: [], wins: 0};
var $playerTwo = {name: null, tile: null, turn: null, moves: [], wins: 0};
var $players = [$playerOne, $playerTwo];


// Introduction
// Click start to play Tic Tac Toe!
$(".prompts").html("Click start to play Tic Tac Toe!<br>").append("<input type='button' id='start' value='start'>");

// How many players do you have? One or two?
$("#start").on("click", function() {
	$(".prompts").html("How many players?<br>").append("<input type='button' id='one-player' value='One Player'>").append("<input type='button' id='two-player' value='Two Players'>");
	
	// Please enter the name for player 1
	$("#two-player").on("click", function() {
		$(".prompts").html("What is the name of Player 1?   ").append("<input type='text' id='player-one-name'>").append("<input type='button' id='submit-player-one' value='Submit'>");

	// Store player 1's name
		$("#submit-player-one").on("click", function() {
			//When you click to submit player 1, store the name in the stat section
			$playerOne.name = $("#player-one-name").val()
			$("#player-one-variable").html('Player 1: ' + $playerOne.name);

	// Please enter a name for player 2
			$(".prompts").html("What is the name of Player 2?   ").append("<input type='text' id='player-two-name'>").append("<input type='button' id='submit-player-two' value='Submit'>");

	// Store player 2's name
			$("#submit-player-two").on("click", function() {
				$playerTwo.name = $("#player-two-name").val();
				$("#player-two-variable").html('Player 2: ' + $playerTwo.name);

	// Let's flip a coin to see who goes first
				$(".prompts").html("Let's flip a coin to see who goes first. " + $playerOne.name + " is heads. " + $playerTwo.name + " is tails.<br>").append("<input type='button' id='coin-flip' value='Flip!'>");

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

						$("#player-one").css("background-color", "#ffff66");
						$("#player-two").css("background-color", "white");
						$(".prompts").html("Heads wins! " + coinFlipWinner.name + ", choose X or O.<br>").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");

					} else if (coinFlipWinner > 0.5) {
						coinFlipWinner = $playerTwo;
						coinFlipLoser = $playerOne;

						//Set whose turn it is to play
						$playerOne.turn = false;
						$playerTwo.turn = true;

						$("#player-two").css("background-color", "#ffff66");
						$("#player-one").css("background-color", "white");
						$(".prompts").html("Tails wins! " + coinFlipWinner.name + ", choose X or O.<br>").append("<input type='button' id='tile-x' value='X'>").append("<input type='button' id='tile-o' value='O'>");

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

						$(".prompts").html(coinFlipWinner.name + " choose a square.");
					});

				// DRY: Can this be drier? If the winner chooses O, give the winner O and the loser X
					$("#tile-o").on("click", function() {
						coinFlipWinner.tile = 'O';
						coinFlipLoser.tile = 'X';
						
						$("#player-one-tile").html($playerOne.tile);
						$("#player-two-tile").html($playerTwo.tile);

						$(".prompts").html(coinFlipWinner.name + " choose a square.");
					});
				});
			});
		});
	});
});


// Play the game

// HELP: Look at this array. If .turn is set to true, play .tile. Automatically find the true one without if/else.
// If the player's turn is true, when he/she clicks on a square, put his/her tile in it

function swapTurns(turn) {
	if ($playerOne.turn === true) {
		$playerOne.turn = false;
		$(".prompts").html($playerTwo.name + " choose a square.");
		$("#player-two").css("background-color", "#ffff66");
		$("#player-one").css("background-color", "white");
	} else if ($playerOne.turn === false) {
		$playerOne.turn = true;
		$(".prompts").html($playerOne.name + " choose a square.")
		$("#player-one").css("background-color", "#ffff66");
		$("#player-two").css("background-color", "white");
	} else if ($playerTwo.turn === true) {
		$playerTwo.turn = false;
		$(".prompts").html($playerOne.name + " choose a square.")
		$("#player-one").css("background-color", "#ffff66");
		$("#player-two").css("background-color", "white");
	} else if ($playerTwo.turn === false) {
		$playerTwo.turn = true;
		$(".prompts").html($playerTwo.name + " choose a square.")
		$("#player-two").css("background-color", "#ffff66");
		$("#player-one").css("background-color", "white");
	}
};


//winningRow = {first: ['a', 'b', 'c'], second: ['d', 'e', 'f'], third: ['g', 'h', 'i']};
//winningColumn = {first: ['a', 'd', 'g'], second: ['b', 'e', 'h'], third: ['c', 'f', 'i']};
//winningDiagonal = {left: ['a', 'e', 'i'], right: ['c', 'e', 'g']};



// 1. Look at Player One's moves. It is an array of strings.
// 2. Look at the Winning Combinations, which is an array of arrays of strings. 
// 3. Do any strings in Player One's moves array appear in the subset of arrays in Winning Combinations?

//I have an array [1, 2, 3, 4, 5]
//I need to see if the elements in that array are in any of these arrays [1, 2, 3], [2, 3, 5]


var row1 = ['a', 'b', 'c'];
var row2 = ['d', 'e', 'f'];
var row3 = ['g', 'h', 'i'];
var col1 = ['a', 'd', 'g'];
var col2 = ['b', 'e', 'h'];
var col3 = ['c', 'f', 'i'];
var dia1 = ['a', 'e', 'i'];
var dia2 = ['c', 'e', 'g'];

var winningCombination = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['a', 'd', 'g'], ['b', 'e', 'h'], ['c', 'f', 'i'], ['a', 'e', 'i'], ['c', 'e', 'g']];



/*function chooseWinnerP1(){
	if ($.inArray(row1, $playerOne.moves)) {
		debugger;
		console.log("p1 row1");
	} else if ($.inArray(row2, $playerOne.moves)) {
		console.log("p1 row2");
	} else if ($.inArray(row3, $playerOne.moves)) {
		console.log("p1 row3");
	} else if ($.inArray(col1, $playerOne.moves)) {
		console.log("p1 col1");
	} else if ($.inArray(col2, $playerOne.moves)) {
		console.log("p1, col2");
	} else if ($.inArray(col3, $playerOne.moves)) {
		console.log("p1, col3");
	} else if ($.inArray(dia1, $playerOne.moves)) {
		console.log("p1, dia1");
	} else if ($.inArray(dai2, $playerOne.moves)) {
		console.log("p1, dia2");
	} else {
		console.log("no winner found");
	}
}

function chooseWinnerP2(){
	if ($.inArray(row1, $playerTwo.moves)) {
		debugger;
		console.log("p2 row1");
	} else if ($.inArray(row2, $playerTwo.moves)) {
		console.log("p2 row2");
	} else if ($.inArray(row3, $playerTwo.moves)) {
		console.log("p2 row3");
	} else if ($.inArray(col1, $playerTwo.moves)) {
		console.log("p2 col1");
	} else if ($.inArray(col2, $playerTwo.moves)) {
		console.log("p2, col2");
	} else if ($.inArray(col3, $playerTwo.moves)) {
		console.log("p2, col3");
	} else if ($.inArray(dia1, $playerTwo.moves)) {
		console.log("p2, dia1");
	} else if ($.inArray(dai2, $playerTwo.moves)) {
		console.log("p2, dia2");
	} else {
		console.log("no winner found");
	}
}*/

function chooseWinnerP1(){
	for (var i =  0; i < winningCombination.length; i++) {
		var won = winningCombination[i].every(function(element, index, array) {
			var within = $.inArray(element, $playerOne.moves);
			if (within != -1) {
				return true;
			}
			else {
				return false;

			}
		}) 
		if (won) {
			return true;
		}
	}	
	return false;
}

function chooseWinnerP2(){
	for (var i =  0; i < winningCombination.length; i++) {
		var won = winningCombination[i].every(function(element, index, array) {
			var within = $.inArray(element, $playerTwo.moves);
			if (within != -1) {
				return true;
			}
			else {
				return false;
			}
		})
		if (won){
			return true;
		}
	} 
	return false;
}
	








/*function chooseWinnerP1() {
	for (var i = 0; i < winningCombination.length; i++) {
		for (var j = 0; j < ($playerOne.moves).length; j++) {
			if (winningCombination[i] === $playerOne.moves[j]) {
				console.log("Player One Wins");
			} else {
				console.log("No winner yet");
			}
		}
	}
}

function chooseWinnerP2() {
	for (var i = 0; i < winningCombination.length; i++) {
		for (var j = 0; j < ($playerOne.moves).length; j++) {
			if (winningCombination[i] === $playerOne.moves[j]) {
				console.log("Player One Wins");
			} else {
				console.log("No winner yet");
			}
		}
	}
}*/






/*function chooseWinnerP1() {
	var i;
	var j;
	
	for (i=0, j=0; i < ($playerOne.moves).length && j < row1.length;) {
		if ($playerOne.moves[i] < row1[j]) {
			++i;
		} else if ($playerOne.moves[i] == row1[j]) {
			++i; ++j;
		} else {
			console.log("no winner yet")
		}
	}
}


function chooseWinnerP2() {
	var i = 0;
	var j = 0;
	for (i; i < row1.length; i++) {
	if (row1[i] === $playerTwo.moves[j]) {
		console.log("2 win row1");
	} else if (row2[i] === $playerTwo.moves[j]) {
		console.log("2 win row2");
	} else if (row3[i] === $playerTwo.moves[j]) {
		console.log("2 win row3");
	}
}
}*/





/*function chooseWinnerP1() {
	var gameboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
	var winningCombination = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['a', 'd', 'g'], ['b', 'e', 'h'], ['c', 'f', 'i'], ['a', 'e', 'i'], ['c', 'e', 'g']];
	
	for (var i = 0; i < 8; i ++) {
		var win = [];
		win = winningCombination[i];
		console.log(win);

	if (gameboard[win[0]] === true && gameboard[win[1]] === true && gameboard[win[2]] === true) {
		console.log(winner);
		} 
	}
}*/





/*function chooseWinnerP1() {
	for (var i = 0; i < 8; i++) {
	var win = [];
	var win = winningCombination[i];
	console.log(win);
		if ($playerOne.moves[win][0] === $playerOne && $playerOne.moves[win][1] === $playerOne && $playerOne.moves[win][2] === $playerOne) {
			console.log("playerone wins");
		}		
		if ($playerTwo.moves[win][0] === $playerTwo && $playerTwo.moves[win][1] === $playerTwo && $playerTwo.moves[win][2] === $playerTwo) {
			console.log("playertwo wins");
		}
	}
}*/



//check if row 1 is in playerOne.moves

/*function chooseWinnerP1(arr1, arr2) {
	if ($.inArray(row1, $playerOne.moves)) {
			console.log("PlayerOne wins row1");
		} else if ($.inArray(row2, $playerOne.moves)) {
			console.log("PlayerOne wins row2");
		} else if ($.inArray(row3, $playerOne.moves)) {
			console.log("PlayerOne wins row3");
		} else if ($.inArray(col1, $playerOne.moves)) {
			console.log("PlayerOne wins col1");
		} else if ($.inArray(col2, $playerOne.moves)) {
			console.log("PlayerOne wins col2");
		} else if ($.inArray(col3, $playerOne.moves)) {
			console.log("PlayerOne wins col3");
		} else if ($.inArray(dia1, $playerOne.moves)) {
			console.log("PlayerOne wins dia1");
		} else if ($.inArray(dia2, $playerOne.moves)) {
			console.log("PlayerOne wins dia2");
		} else {
			console.log("no winner yet");
		}
	}

function chooseWinnerP2(arr1, arr2) {
	if ($.inArray(row1, $playerTwo.moves)) {
			console.log("playerTwo wins row1");
		} else if ($.inArray(row2, $playerTwo.moves)) {
			console.log("playerTwo wins row2");
		} else if ($.inArray(row3, $playerTwo.moves)) {
			console.log("playerTwo wins row3");
		} else if ($.inArray(col1, $playerTwo.moves)) {
			console.log("playerTwo wins col1");
		} else if ($.inArray(col2, $playerTwo.moves)) {
			console.log("playerTwo wins col2");
		} else if ($.inArray(col3, $playerTwo.moves)) {
			console.log("playerTwo wins col3");
		} else if ($.inArray(dia1, $playerTwo.moves)) {
			console.log("playerTwo wins dia1");
		} else if ($.inArray(dia2, $playerTwo.moves)) {
			console.log("playerTwo wins dia2");
		} else {
			console.log("no winner yet");
		}
	}*/



/*function chooseWinnerP1(arr1, arr2) {
	var i, j;
	for (i = 0, j = 0; i < row1.length; i++) {
		if (($playerOne.moves).indexOf(row1[i]) > -1) {
			console.log("PlayerOne wins row1");
			break;
		} else if (($playerOne.moves).indexOf(row2[i]) > -1) {
			console.log("PlayerOne wins row2");
			break;
		} else if (($playerOne.moves).indexOf(row3[i]) > -1) {
			console.log("PlayerOne wins row3");
			break;
		} else if (($playerOne.moves).indexOf(col1[i]) > -1) {
			console.log("PlayerOne wins col1");
			break;
		} else if (($playerOne.moves).indexOf(col2[i]) > -1) {
			console.log("PlayerOne wins col2");
			break;
		} else if (($playerOne.moves).indexOf(col3[i]) > -1) {
			console.log("PlayerOne wins col3");
			break;
		} else if (($playerOne.moves).indexOf(dia1[i]) > -1) {
			console.log("PlayerOne wins dia1");
			break;
		} else if (($playerOne.moves).indexOf(dia2[i]) > -1) {
			console.log("PlayerOne wins dia2");
			break;
		} else {
			console.log("no winner yet");
		}
	}
}

function chooseWinnerP2(arr1, arr2) {
	for (var i = 0; i < row1.length; i++) {
		if (($playerTwo.moves).indexOf(row1[i]) > -1) {
			console.log("playerTwo wins row1");
			break;
		} else if (($playerTwo.moves).indexOf(row2[i]) > -1) {
			console.log("playerTwo wins row2");
			break;
		} else if (($playerTwo.moves).indexOf(row3[i]) > -1) {
			console.log("playerTwo wins row3");
			break;
		} else if (($playerTwo.moves).indexOf(col1[i]) > -1) {
			console.log("playerTwo wins col1");
			break;
		} else if (($playerTwo.moves).indexOf(col2[i]) > -1) {
			console.log("playerTwo wins col2");
			break;
		} else if (($playerTwo.moves).indexOf(col3[i]) > -1) {
			console.log("playerTwo wins col3");
			break;
		} else if (($playerTwo.moves).indexOf(dia1[i]) > -1) {
			console.log("playerTwo wins dia1");
			break;
		} else if (($playerTwo.moves).indexOf(dia2[i]) > -1) {
			console.log("playerTwo wins dia2");
			break;
		} else {
			console.log("no winner yet");
		}
	}
}*/


/*function chooseWinnerP1(arr1, arr2) {
	for (var i = 0; i < ($playerOne.moves).length; i++) {
		if (($playerOne.moves)inArray(row1)) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(row1);
		} else if ($playerOne.moves).inArray(row2) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(row2);
		} else if ($playerOne.moves).inArray(row3) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(row3);
		} else if ($playerOne.moves).inArray(col1) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(col1);
		} else if ($playerOne.moves).inArray(col2) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(col2);
		} else if ($playerOne.moves).inArray(col3) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(col3);
		} else if ($playerOne.moves).inArray(dia1) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(dia1);
		} else if ($playerOne.moves).inArray(dia2) {
			console.log("PlayerOne wins");
			console.log($player.moves);
			console.log(dia2);
		} else {
			console.log("no winner");
		}
	}
}


function chooseWinnerP2(arr1, arr2) {
	for (var i = 0; i < ($playerTwo.moves).length; i++) {
		if ($playerTwo.moves).inArray(row1) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(row1);
		} else if ($playerTwo.moves).inArray(row2) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(row2);
		} else if ($playerTwo.moves).inArray(row3) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(row3);
		} else if ($playerTwo.moves).inArray(col1) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(col1);
		} else if ($playerTwo.moves).inArray(col2) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(col2);
		} else if ($playerTwo.moves).inArray(col3) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(col3);
		} else if ($playerTwo.moves).inArray(dia1) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(dia1);
		} else if ($playerTwo.moves).inArray(dia2) {
			console.log("playerTwo wins");
			console.log($player.moves);
			console.log(dia2);
		} else {
			console.log("no winner");
		}
	}
}*/




/*function chooseWinnerP1(arr1, arr2) {
	for (var i = 0; i < ($playerOne.moves).length; i++) {
		if (($playerOne.moves).indexOf(winningCombination)) {
			console.log("PlayerOne wins");
			console.log(($playerOne.moves).indexOf(winningCombination));
			console.log(winningCombination);
		} else {
			console.log("No winner yet");
		}
	}
}

function chooseWinnerP2(arr1, arr2) {
	for (var i = 0; i < ($playerTwo.moves).length; i++) {
		if (($playerTwo.moves).indexOf(winningCombination)) {
			console.log("PlayerTwo wins");
			console.log(($playerOne.moves).indexOf(winningCombination));
			console.log(winningCombination);
		} else {
			console.log("No winner yet");
		}
	}
}*/





/*function chooseWinnerP1(arr1, arr2) {
	for (var i = 0; i < ($playerOne.moves).length; i++) {
		if (winningCombination.indexOf($playerOne.moves[i]) ==-1) {
			console.log("PlayerOne wins");
			console.log(winningCombination.indexOf($playerOne.moves[i]));
		} else {
			console.log("No winner yet");
		}
	}
}

function chooseWinnerP2(arr1, arr2) {
	for (var i = 0; i < ($playerTwo.moves).length; i++) {
		if (winningCombination.indexOf($playerTwo.moves[i]) ==-1) {
			console.log("PlayerTwo wins");
			console.log(winningCombination.indexOf($playerOne.moves[i]));
		} else {
			console.log("No winner yet");
		}
	}
}*/





/*function chooseWinnerP1(arr1, arr2) {
	for (var i = 0; i < winningCombination.length; i++) {
		if ($.inArray($playerOne.moves[i],winningCombination) ==-1) {
			console.log("PlayerOne wins");
		} else {
			console.log("No winner yet");
		}
	}
}

function chooseWinnerP2(arr1, arr2) {
	for (var i = 0; i < winningCombination.length; i++) {
		if ($.inArray($playerOne.moves[i],winningCombination) ==-1) {
			console.log("PlayerOne wins");
		} else {
			console.log("No winner yet");
		}
	}
}*/




/*function chooseWinnerP1() {
	if (($playerOne.moves).any(winningCombination)) {
		console.log("player one wins");
	} else {
		console.log("no winner yet");
	}
}

function chooseWinnerP2() {
	if (($playerTwo.moves).any(winningCombination)) {
		console.log("player two wins");
	} else {
		console.log("no winner yet");
	}

}*/


/*function chooseWinnerP1() {
	for (var i = 0; i < $playerOne.moves.length; i++) {
		if (winningCombination.indexOf($playerOne.moves[i]) > -1) {
			winnerFound = true;
			console.log("Player One Wins");
			break;
		} else {
			console.log("Keep playing. No winner found.");
		}
	}			
}

function chooseWinnerP2() {
	for (var i = 0; i < $playerTwo.moves.length; i++) {
		if (winningCombination.indexOf($playerTwo.moves[i]) > -1) {
			winnerFound = true;
			console.log("Player Two Wins");
			break;
		} else {
			console.log("Keep playing. No winner found.");
		}
	}			
}*/


$("#a").on("click", function() {
	if ( ($("#a").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#a").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("a");
		} else if ($playerOne.turn === false) {
			$("#a").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("a");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#b").on("click", function() {
	if ( ($("#b").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#b").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("b");
		} else if ($playerOne.turn === false) {
			$("#b").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("b");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}

});

$("#c").on("click", function() {
	if ( ($("#c").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#c").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("c");
		} else if ($playerOne.turn === false) {
			$("#c").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("c");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#d").on("click", function() {
	if ( ($("#d").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#d").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("d");
		} else if ($playerOne.turn === false) {
			$("#d").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("d");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#e").on("click", function() {
	if ( ($("#e").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#e").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("e");
		} else if ($playerOne.turn === false) {
			$("#e").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("e");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#f").on("click", function() {
	if ( ($("#f").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#f").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("f");
		} else if ($playerOne.turn === false) {
			$("#f").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("f");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#g").on("click", function() {
	if ( ($("#g").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#g").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("g");
		} else if ($playerOne.turn === false) {
			$("#g").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("g");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#h").on("click", function() {
	if ( ($("#h").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#h").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("h");
		} else if ($playerOne.turn === false) {
			$("#h").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("h");
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

$("#i").on("click", function() {
	if ( ($("#i").attr("value")) == "true" ) {
		alert("Pick a new square!");
	} else {

		if ($playerOne.turn === true){
			$("#i").html($playerOne.tile).attr("value", "true");
			$playerOne.moves.push("i");
			//Check to see if Player One wins
		} else if ($playerOne.turn === false) {
			$("#i").html($playerTwo.tile).attr("value", "true");
			$playerTwo.moves.push("i");
			//Check to see if Player Two wins
		}
		chooseWinnerP1();
		chooseWinnerP2();
		swapTurns();
	}
});

});