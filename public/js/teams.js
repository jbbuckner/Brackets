//Teams
var team = function(){
 	this.teamname=null;
 	this.win=0;
 	this.loss=0;
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
	for (var i=0; i<seeds; i++){
		var newteam = new team();
		newteam.seed = i+1;
		teams.push(newteam);
	}
	console.log('teams ',teams);
}
