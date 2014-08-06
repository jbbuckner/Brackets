var Matchup = {
	CreateMatchups: function(totalRounds){
		var matchups = [];
		//create a matchup
		//put highest seeded team obj in
		//put lowest seeded team obj in
		//need round?
		//columns = ((Math.log(Bracket.numberofTeams)/Math.log(2))+1);
		for (var i=0; i<totalRounds; i++){
			var seedsInColumn = Math.pow(2,i);
			switch (seedsInColumn){
				case 1:
					var matchup = Matchup.BuildMatchup({
						round : i+1,
						winner: null,
						lowSeed : null,
						competition: false
					});
					matchups.push(matchup);
				break;
				case 2:
					var matchup = Matchup.BuildMatchup({
						round : i+1
						//highSeed : Team.TeamObject(),
						//lowSeed : Team.TeamObject()
					});
					matchups.push(matchup);
				break;
				default:
				console.log(seedsInColumn);
					for (var j=0; j<seedsInColumn/2; j++){
						console.log(j);
						var matchup = Matchup.BuildMatchup({
						round : i+1,
						highSeed : j+1
						//lowSeed : Team.TeamObject()
						});
						matchups.push(matchup);
					};
					
				break;
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