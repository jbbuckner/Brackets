var Matchup = {
	CreateMatchups: function(totalRounds){
		var matchups = [];
		//create a matchup
		//put highest seeded team obj in
		//put lowest seeded team obj in
		//need round?
		//columns = ((Math.log(Bracket.numberofTeams)/Math.log(2))+1);
		for (var i=0; i<totalRounds; i++){
			var matchup = Matchup.BuildMatchup({
				round : i
				//highSeed : Team.TeamObject(),
				//lowSeed : Team.TeamObject()
			});
			matchups.push(matchup);
		}
		return matchups;
	},
	BuildMatchup: function(matchupProperties){
		var MatchupObject = function(matchupProperties){
			this.round = matchupProperties.round;
			this.highSeed = matchupProperties.highSeed;
			this.lowSeed = matchupProperties.lowSeed;
			//this.winner = null;
			// this.team1Wins = 0;
			// this.team2Wins = 0;
			// this.team1Score = 0;
			// this.team2Score = 0;
			this.competition = true;
		};
		MatchupObject.prototype.sortMatches = function(){

		};
		return new MatchupObject(matchupProperties);
	}
}