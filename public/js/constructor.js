// var Bracket = {
// 	CreateBracket: function(){
// 		//var matchups = 
// 	}
// };

// function Bracket(seeds){
// 	this.numberOfTeams = seeds || 16;
// 	this.columns = ((Math.log(this.numberOfTeams)/Math.log(2))+1);
// 	this.teamLocation = 0;
// 	this.roundArray
// 	this.classID = 'seed-';
// }

//Bracket.columns = ((Math.log(Bracket.numberofTeams)/Math.log(2))+1);

// Bracket.prototype.createBracketMatchups = function(){
// 	console.log(this.columns);
	
// 	var ColumnNumber=0;

// 	for (var j=0; j<Bracket.columns; j++){
// 		var seedsInColumn=Math.pow(2,ColumnNumber);
// 		var matchesPerRound = seedsInColumn/2;
// 		var currentRound=0;
		
// 		roundArray[ColumnNumber]={};
// 		roundArray[ColumnNumber].matchesArray=[];
		
// 		switch (seedsInColumn){
// 			case 1:
// 			roundArray[ColumnNumber].matchesArray[0]={};
// 			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
// 			roundArray[ColumnNumber].matchesArray[0].winner = null;
// 			break;
// 			case 2:
// 			console.log("ColumnNumber "+ColumnNumber);
// 			roundArray[ColumnNumber].matchesArray[0]={};
// 			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
// 			roundArray[ColumnNumber].matchesArray[0].team2 = teams[seedsInColumn-1];
// 			break;
// 			default:
// 				for(var i=0; i<roundArray[ColumnNumber-1].matchesArray.length; i++){
// 					roundArray[ColumnNumber].matchesArray[currentRound]={};
// 					roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team1;
// 					roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
// 					currentRound++;
// 					roundArray[ColumnNumber].matchesArray[currentRound]={};
// 					roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team2;
// 					roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
// 					currentRound++;
// 				}
// 				break;
// 		}
// 		ColumnNumber++;
// 	}
// }