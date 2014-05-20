//constructor
// function construct(totalRows){
// $('#full-bracket .left').append('<ul class ="seed-list"></ul>');
// 	for (var i=0; i<bracketarray.length; i++){
// 		console.log("team1 ",bracketarray[i].team1);
// 		$('#full-bracket .left .seed-list').append('<li class="button"></li>').append(bracketarray[i].team1.seed);
		
// 		$('#full-bracket .left .seed-list').append('<li class="button"></li>').append(bracketarray[i].team2.seed);
// 	}
// }
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
			roundArray[ColumnNumber].matchesArray[0].team1 = null;
			//roundArray[ColumnNumber].matchesArray[0].winner = null;
			break;
			case 2:
			console.log("ColumnNumber "+ColumnNumber);
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
						console.log('seedsPerRound', seedsInColumn);
						console.log('math for seed', seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed)
						roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed]
						currentRound++
				}
				// //clear previous column array
				for(var clearMatch=0; clearMatch<roundArray[ColumnNumber-1].matchesArray.length; clearMatch++){
					roundArray[ColumnNumber-1].matchesArray[clearMatch].team1 = null;
					roundArray[ColumnNumber-1].matchesArray[clearMatch].team2 = null;
				}
			// roundArray[ColumnNumber].matchesArray[i].team1 = roundArray[ColumnNumber-1].matchesArray[i].team1;
			// roundArray[ColumnNumber].matchesArray[i].team2 = addup-roundArray[ColumnNumber-1].matchesArray[i].team1;
			// roundArray[ColumnNumber].matchesArray[i].team2 = team[addup-i]
			// roundArray[ColumnNumber].matchesArray[i+1].team1 = roundArray[ColumnNumber-1].matchesArray[i].team2;
			// roundArray[ColumnNumber].matchesArray[i+1].team2 = addup-roundArray[ColumnNumber-1].matchesArray[i].team1;
			break;				
		}
		ColumnNumber++;			
	}
}
// round[0].match[0]= team[0] v team[1] 
// split 
// round[1].match[0] = team[0] v team[3] 
// round[1].match[1] = team[1] v team[2]
// split
// round[2].match[0] = team[0] v team[7]
// round[2].match[1] = team[3] v team[4]
// round[2].match[2] = team[2] v team[5]
// round[2].match[3] = team[1] v team[6]
// split
// match[7] = 1 v 16
// match[8] = 8 v 9
// match[9] = 4 v 
// round[0].match[0]= 1 v 2 
// split 
// round[1].match[0] = 1 v 4 
// round[1].match[1] = 2 v 3
// split
// round[2].match[0] = 1 v 8
// round[2].match[1] = 4 v 5
// round[2].match[2] = 3 v 6
// round[2].match[3] = 2 v 7
// split
// match[7] = 1 v 16
// match[8] = 8 v 9
// match[9] = 4 v 
