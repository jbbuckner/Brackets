function grabTeam(column, seed){
	for(var i=0; i<=roundArray[column].matchesArray.length-1; i++){
		//loop t
		console.log(i);
		console.log(roundArray[column].matchesArray[i].team1.seed+" "+ seed);
		if(roundArray[column].matchesArray[i].team1.seed == seed){
			console.log("team1", i, roundArray[column].matchesArray[i].team1);
			findPreviousRoundPlace(column, i, roundArray[column].matchesArray[i].team1);
			break;
		}else if(roundArray[column].matchesArray[i].team2.seed == seed){
			console.log("team2", i, roundArray[column].matchesArray[i].team2);
			findPreviousRoundPlace(column, i, roundArray[column].matchesArray[i].team2);
			break;
		}else{
			console.log("not found");
		}
	}
	// roundArray[column-1].matchesArray[parseInt(i/2)]%2 !==0 .team1;
	// else .team2
}

function findPreviousRoundPlace(currentColumn, j, thisTeam){
	var nextMatchup;
	if(j%2==0){
		nextMatchup=parseInt(j)/2;
		console.log(nextMatchup);
		roundArray[currentColumn-1].matchesArray[nextMatchup].team1 = thisTeam;
		roundArray[currentColumn-1].matchesArray[nextMatchup].team1.win++;
		insertTeam(currentColumn, roundArray[currentColumn-1].matchesArray[nextMatchup].team1, j);
	}else{
		nextMatchup=parseInt(j-1)/2;
		console.log(nextMatchup)
		roundArray[currentColumn-1].matchesArray[nextMatchup].team2 = thisTeam;
		roundArray[currentColumn-1].matchesArray[nextMatchup].team2.win++;
		insertTeam(currentColumn, roundArray[currentColumn-1].matchesArray[nextMatchup].team2, j);
	}
}

function insertTeam(currentColumn, currentTeam, k){
	var nextColumn = currentColumn-1;
	var teamSeed = currentTeam.seed;
	console.log("teamSeed", teamSeed);
	if(k<roundArray[nextColumn].matchesArray.length){
		console.log("left");
		$('.left .column-'+(nextColumn)).append('<div class="row '+classID+teamSeed+'">'+teamSeed+'</div>');
	}else{
		console.log("right");
		$('.right .column-'+(nextColumn)).append('<div class="row '+classID+teamSeed+'">'+teamSeed+'</div>');
	}
}

// grabTeam = function(column, seed){
// 	_.find(roundArray[column].matchesArray, { 'seed' : seed });
// }

// function findPreviousRoundPlace(currentColumn, j, thisTeam){
// 	var nextMatchup;
// 	if(j%2==0){
// 		nextMatchup=parseInt(j)/2;
// 		console.log(nextMatchup);
// 		roundArray[currentColumn-1].matchesArray[nextMatchup].team1 = thisTeam;
// 		roundArray[currentColumn-1].matchesArray[nextMatchup].team1.win++;
// 		insertTeam(currentColumn, roundArray[currentColumn-1].matchesArray[nextMatchup].team1, j);
// 	}else{
// 		nextMatchup=parseInt(j-1)/2;
// 		console.log(nextMatchup)
// 		roundArray[currentColumn-1].matchesArray[nextMatchup].team2 = thisTeam;
// 		roundArray[currentColumn-1].matchesArray[nextMatchup].team2.win++;
// 		insertTeam(currentColumn, roundArray[currentColumn-1].matchesArray[nextMatchup].team2, j);
// 	}
// }
// function insertTeam(column, row, seed){
// 	var nextColumn = column-1;
// 	var selectedTeam = grabTeam(column, seed);
// 	var teamSeed = selectedTeam.seed;
// 	console.log("teamSeed", teamSeed.seed);
// 	//findPreviousRoundPlace(column, , selectedTeam)
// 	if(k<roundArray[nextColumn].matchesArray.length){
// 		console.log("left");
// 		$('.left .column-'+(nextColumn)).append('<div class="row '+classID+teamSeed+'">'+teamSeed+'</div>');	
// 	}else{
// 		console.log("right");
// 		$('.right .column-'+(nextColumn)).append('<div class="row '+classID+teamSeed+'">'+teamSeed+'</div>');	
// 	}
	
// }
