var Matchup = {
	CreateMatchup: function(seeds){
		var matchups = [];
		//create a matchup
		//put highest seeded team obj in
		//put lowest seeded team obj in
		//need round?
		var matchup = Matchup.BuildMatchup({
			team1 : Team.TeamObject(),
			team2 : Team.TeamObject()
		});
		
		return matchup;
	}
	BuildMatchup: function(matchupProperties){
		var MatchupObject = function(matchupProperties){
			this.team1 = matchupProperties.team1;
			this.team2 = matchupProperties.team2;
			//this.winner = null;
			// this.team1Wins = 0;
			// this.team2Wins = 0;
			// this.team1Score = 0;
			// this.team2Score = 0;
			this.competition = true;
		};
		MatchupObject.prototype.sortMatches = function(){
			
		};
	}
}