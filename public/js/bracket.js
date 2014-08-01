var Bracket = {
	getCurrentRound: function(){
		return Bracket._currentRound;
	},
	setCurrentRound: function (round){
		if(round<=Bracket.totalRounds){
			Bracket._currentRound = round;
		}
	},
	_currentRound:0,
	totalRounds:4,

	// CreateBracket: function(){
	// 	//var matchups = 
	// }
};