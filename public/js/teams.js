var Team = {
	CreateTeams: function(seeds){
		var teams = [];
		for (var i=0; i<seeds; i++){
			var seed = i+1;
			var team = Team.BuildTeam({
				seed: seed
			});
			teams.push(team);
		}
		console.log('teams ',teams);
		return	teams;
	},
	BuildTeam: function(teamProperties){
		var TeamObject = function(teamProperties){
			this.teamName= teamProperties.teamName;
			this.seed = teamProperties.seed;
			this.win = 0;
			this.loss = 0;
			// logo:null;
			// bio:null;
			// seed:0;
			// wins:0;
			// losses:0;
		};
		TeamObject.prototype.record = function(){

		};
		TeamObject.prototype.percentage = function(){

		};
		return new TeamObject(teamProperties);
		}
	};

// var match = function(){
// // 	competiton:true, team1:null, team2:null, seed1:null, seed2:null, score1:0, score2:0, win1:0, win2:0, games:0, winner:null
// }
