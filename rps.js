
function play(){
	var userChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();

		if ((computerChoice >= 0) && (computerChoice <= .33)) {
			var compChoice = "rock";
	    	// alert("Computer chooses rock")
		}

		else if((computerChoice >= .34) && (computerChoice <= .66)) {
	    	var compChoice = "paper";
	    	alert("Computer chooses paper")
		}

		else if ((computerChoice >= .67) && (computerChoice <=1)) {
	    	var compChoice = "scissors";
	    	alert("Computer chooses scissors")
		} 

		else {
			alert("That's not even a choice!")
		}
	    

	function compare(choice1, choice2) {
	    if(choice1 == choice2) {
	    	alert("It's a tie!");
	    }
	    else if(choice1 == "rock") {
	        if(choice2 == "scissors") {
	            alert("Rock wins!");
	        }
	        else {
	            alert("Paper wins!");
	        }
	    }
	 	else if(choice1 == "paper") {
	        if(choice2 == "rock") {
	            alert("Paper wins!");
	        }
	        else {
	            alert("Scissors wins!");
	        }
	    }
	    else if(choice1 == "scissors") {
	    	if(choice2 =="paper") {
	    		alert("Scissors wins!");
	    	}
	    	else {
	    		alert("Rock wins!");
	    	}
	    }
	};
	console.log(userChoice);
	console.log(compChoice);
	compare(userChoice, compChoice);
}


