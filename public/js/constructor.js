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
	var rowCount=0;
	totalRows = getTotalRows(seeds);
	console.log(totalRows);
	for (var j=0; j<totalRows; j=j*10;){
		for(var i=0; i<seeds; i++;)
		rowCount++;
		console.log('total rows ', rowCount);

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

		var total = (i+1)*2;
		var matchesPerRound = total/2
		var addup= 1+total;

		
	
		roundArray[0]={};
		roundArray[0].matchesArray=[];
		roundArray[j].matchesArray[i].team1 = roundArray[j-1].matchesArray[i].team1;
		roundArray[j].matchesArray[i].team2 = addup-roundArray[j-1].matchesArray[i].team1;
		roundArray[j].matchesArray[i+1].team1 = roundArray[j-1].matchesArray[i].team2;
		roundArray[j].matchesArray[i+1].team2 = addup-roundArray[j-1].matchesArray[i].team1;
	}
}