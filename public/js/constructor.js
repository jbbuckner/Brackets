function createBracketMatchups(seeds){
	//winners box
	var ColumnNumber=0;
	
	
	totalColumns = getTotalColumns(seeds);
	//console.log('totalColumns ', ColumnNumber);
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
					
					//var matchesPerRound = seedsInColumn/2;
						roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team1;
						roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
						currentRound++
						roundArray[ColumnNumber].matchesArray[currentRound]={};

						roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team2;
						//console.log('seedsPerRound', seedsInColumn);
						//console.log('math for seed', seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed)
						roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed]
						currentRound++
				}
				//clearMatches(ColumnNumber, roundArray[ColumnNumber-1].matchesArray.length);
				// clear previous column array
				// for(var clearMatch=0; clearMatch<roundArray[ColumnNumber-1].matchesArray.length; clearMatch++){
				// 	roundArray[ColumnNumber-1].matchesArray[clearMatch].team1 = null;
				// 	roundArray[ColumnNumber-1].matchesArray[clearMatch].team2 = null;
				// }
			break;
		}
		buildBracket(ColumnNumber, seedsInColumn);
		//clearMatches(ColumnNumber, roundArray[ColumnNumber-1].matchesArray.length);
		ColumnNumber++;
		

	}
	
}

function buildBracket(ColumnNumber, seedsNow){
var columnX = 'column'+ColumnNumber;
	$('#full-bracket .left').append('<div class="column '+columnX+'"></div>');
	console.log('seedsNow', seedsNow);
	for(var i=0; i<seedsNow/2; i++){
		if(ColumnNumber==0){
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');	
		}else{
			//console.log("this seed", roundArray[ColumnNumber].matchesArray[i]);
			console.log("this seed", roundArray[ColumnNumber].matchesArray[i].team1.seed);
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');
			$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team2.seed+'</div>');
		}
	}
}
function clearMatches(ColumnNumber, arrayLength){
	// clear previous column array
	console.log("clearMatches", ColumnNumber+" "+arrayLength);
	for(var clearMatch=0; clearMatch<arrayLength; clearMatch++){
		roundArray[ColumnNumber-1].matchesArray[clearMatch].team1 = null;
		roundArray[ColumnNumber-1].matchesArray[clearMatch].team2 = null;
	}
}