//Teams
var team = function(){
 	this.teamname=null;
// 	logo:null,bio:null,seed:0,wins:0,losses:0,
//	record: this.wins+"-"+this.losses,
// 	percentage: function(wins, losses){
// 		if(wins+losses>0){
// 			this = wins/(wins+losses);
// 		}else{
// 			this = null;
// 		}
// }	
}

var match = function(){
// 	competiton:true, team1:null, team2:null, seed1:null, seed2:null, score1:0, score2:0, win1:0, win2:0, games:0, winner:null
}

function createTeams(seed){
		var newteam = new team();
		newteam.seed = seed;
		teams.push(newteam);
	// for (var i=0; i<seeds; i++){
	// 	var newteam = new team();
	// 	newteam.seed = i+1;
	// 	teams.push(newteam);
		
	// }
	console.log('teams ',teams);
	matchups(seeds);
}
// function matchups(seeds){
// 	//var branch4 = Number(seeds).toString(4);
// 	//need to if branch is 10 100 1000 ... than it is good to go. branch4%10 = 0
// 		for (var i=0; i<seeds/2; i++){
// 			bracketarray[i]= new match();
// 			bracketarray[i].team1 = teams[i];
// 			bracketarray[i].team2 = teams[(seeds-i)-1];
// 		}
// 		console.log('brackets ',bracketarray);
// 	}
getTotalRows=function(seeds){
	return ((Math.log(seeds)/Math.log(2)));
}