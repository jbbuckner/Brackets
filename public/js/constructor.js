function createBracketMatchups(seeds){
	//loops through and creates the array 
	//winners box
	var ColumnNumber=0;
	
	
	totalColumns = getTotalColumns(seeds);
	for (var j=0; j<totalColumns; j++){
		var seedsInColumn=Math.pow(2,ColumnNumber);
		roundArray[ColumnNumber]={};
		roundArray[ColumnNumber].matchesArray=[];
		switch (seedsInColumn){
			case 1:
			roundArray[ColumnNumber].matchesArray[0]={};
			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
			//roundArray[ColumnNumber].matchesArray[0].winner = null;
			break;
			case 2:
			//console.log("ColumnNumber "+ColumnNumber);
			roundArray[ColumnNumber].matchesArray[0]={};
			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
			roundArray[ColumnNumber].matchesArray[0].team2 = teams[seedsInColumn-1];
			break;
			default:
				var matchesPerRound = seedsInColumn/2;
				
				var currentRound=0;
				for(var i=0; i<roundArray[ColumnNumber-1].matchesArray.length; i++){

					roundArray[ColumnNumber].matchesArray[currentRound]={};
	
					roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team1;
					roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
					currentRound++
					roundArray[ColumnNumber].matchesArray[currentRound]={};

					roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team2;
					roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed]
					currentRound++
				}
			break;
		}
		displayBracket(ColumnNumber, seedsInColumn);
		//clearMatches(ColumnNumber, roundArray[ColumnNumber-1].matchesArray.length);
		ColumnNumber++;
	}
}

function displayBracket(ColumnNumber, seedsNow){
	//Loops through the array and displays the bracket
	var columnX = 'column'+ColumnNumber;
	$('#full-bracket .left').append('<div class="column '+columnX+'"></div>');
	//console.log('seedsNow', seedsNow);
	for(var i=0; i<seedsNow/2; i++){
		if(ColumnNumber==0){
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');	
		}else{
			console.log("this seed", roundArray[ColumnNumber].matchesArray[i].team1.seed);
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team2.seed+'</div>');
		}
	}
}
function clearMatches(ColumnNumber, arrayLength){
	// clear previous column array
	// Starts at the largest column than loops through each column and removes teams generated.
	console.log("clearMatches", ColumnNumber+" "+arrayLength);
	for(var clearMatch=0; clearMatch<arrayLength; clearMatch++){
		roundArray[ColumnNumber-1].matchesArray[clearMatch].team1 = null;
		roundArray[ColumnNumber-1].matchesArray[clearMatch].team2 = null;
	}
}