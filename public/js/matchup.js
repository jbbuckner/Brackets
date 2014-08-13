var Matchup = {
	CreateMatchups: function(totalRounds, teams){
		var matchups = [];

		var columns = (Math.log(teams.length)/Math.log(2))+1;

		var tempTeams = teams.slice(0, teams.length);
		
		console.log(tempTeams.length);
		for (var i=0; i<columns; i++){
			var seedsInColumn = Math.pow(2,i);
			if (i<columns-1){
				for (var j=0; j<seedsInColumn/2; j++){
					var matchup = Matchup.BuildMatchup({
						round: columns-i
					});
					matchups.push(matchup);
				}
			}else{
				while(tempTeams.length>0){
				console.log("tempTeams", tempTeams);
				var highSeedHolder = tempTeams.shift();
				var lowSeedHolder = tempTeams.pop();
				var matchup = Matchup.BuildMatchup({
					//var matchupTeams = {};			
					round: 1,
					lowSeed: lowSeedHolder,
					highSeed: highSeedHolder
				});
				matchups.push(matchup);
				}	
			}
		}
		return matchups;
	},
	BuildMatchup: function(matchupProperties){
		var MatchupObject = function(matchupProperties){
			this.round = matchupProperties.round;
			this.highSeed = matchupProperties.highSeed;
			this.lowSeed = matchupProperties.lowSeed;
			this.winner = null;
			// this.team1Wins = 0;
			// this.team2Wins = 0;
			// this.team1Score = 0;
			// this.team2Score = 0;
			this.competition = matchupProperties.competition;
		};
		MatchupObject.prototype.sortMatches = function(){

		};
		return new MatchupObject(matchupProperties);
	}
}