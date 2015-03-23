console.log("Let's play rock, paper, scissors!");


var rock = document.getElementById('rock_bt');
var paper = document.getElementById('paper_bt');
var scissors = document.getElementById('scissors_bt');
var playerMove = null;
var computerText = document.getElementById('comp');
var pm = document.getElementById('pm');
var winner = document.getElementById('winner');
var player = document.getElementById('playerTot');
var computer = document.getElementById('computerTot'); 
/*Computer Move*/

console.log("#1");

function computerMove(){

	if(Math.random() < .33){
		return cm = "rock";
	}else if(Math.random() < .66){
		return cm = "paper";
	}else{
		return "scissors";
	}
};

var playerTot = 0;
var computerTot = 0;

function gamePlay(playerMove, computerMove){
    console.log("player chose " + playerMove);
    console.log("computer chose " + computerMove);
    computerText.innerText = computerMove;
    pm.innerText = playerMove;
        
	if(playerMove === "rock" && computerMove === "scissors" || 
		playerMove === "scissors" && computerMove === "paper" || 
		playerMove === "paper" && computerMove === "rock"){
		playerTot++;
		player.innerText = playerTot;
		console.log(playerTot);
		console.log(computerTot);
		return  "PLAYER WINS!";
		return playerWin;
		
	}else if (playerMove === computerMove){
		return "Jimmy!";
		 return playerTie;

		console.log(playerTot);
		console.log(computerTot);

	}else{
		computerTot++;
		computer.innerText = computerTot;
		console.log(playerTot);
		console.log(computerTot);
		return "COMPUTER WINS!!";
		return computerWin;
		
		
	}

}


/*function counter(){
	
	

	if(gamePlay() = playerWin){
		playerTot++;
		return playerTot;
	}else{
		computerTot++;
		return computerTot;
	}
}*/

rock.addEventListener('click', function(){
	winner.innerText = gamePlay("rock", computerMove());
/*	document.body.style.backgroundImage = 'url(Danny_D.jpg)';
*/ 
})

paper.addEventListener('click', function(){
	winner.innerText = gamePlay("paper", computerMove());
/*		document.body.style.backgroundImage = 'url(Danny_D.jpg)';
*/	
})

scissors.addEventListener('click', function(){
	winner.innerText = gamePlay("scissors", computerMove());
		// document.body.style.backgroundImage = 'url(Danny_D.jpg)';
		
})

console.log("!!!!!")




