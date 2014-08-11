var Matchup = {
	CreateMatchups: function(totalRounds, teams){
		var matchups = [];
		//create a matchup
		//put highest seeded team obj in
		//put lowest seeded team obj in
		//need round?
		//columns = ((Math.log(Bracket.numberofTeams)/Math.log(2))+1);
		// for (var i=0; i<totalRounds; i++){
		// 	var seedsInColumn = Math.pow(2,i);
		// 	console.log(seedsInColumn);
		// 	for (var j=0; j<seedsInColumn/2; j++){
		// 		console.log(j);
		// 		var matchup = Matchup.BuildMatchup({
		// 		round : i+1,
		// 		//lowSeed : teams.seed,
		// 		//highSeed : teams[teams.length-j]
		// 		});
		// 		matchups.push(matchup);
		// 	};
		// }
		var matchup = Matchup.BuildMatchup({
			for (seed in teams){
				console.log("seeds", teams[seed]),
				round : i+1,
				lowSeed : teams[seed],
				for (i=0; i<teams.length; i++){
					highSeed : teams[]
				}
			}
		}
		teams.forEach(function(seed){
			console.log("seeds", seed);
		});
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