var Bracket = {
	_currentRound:0,
	_totalRounds:4,
	getCurrentRound: function(){
		return Bracket._currentRound;
	},
	setCurrentRound: function (round){
		if(round<=Bracket.totalRounds){
			Bracket._currentRound = round;
		}
	},
	getTotalRounds: function(){
		return Bracket._totalRounds;
	},
	setTotalRounds: function(seeds){
		if(Math.log(seeds)/Math.log(2)%1 == 0){
			Bracket._totalRounds = Math.log(seeds)/Math.log(2)+1;
		}
	},
	CreateBracket: function(seeds, teams){
		Bracket.setTotalRounds(seeds);
		Bracket.setCurrentRound(0);
		console.log(Bracket.getTotalRounds());
		var matchup = Matchup.CreateMatchups(Bracket.getTotalRounds(), teams);
		console.log(matchup);
	}
};