$(function(){
	console.log('ready');

	$('#getValue').click(function(){

		var seeds = document.getElementById("seedValue").options[seedValue.selectedIndex].value || 16;
		//var bracket = new Bracket(seeds);
		var teams = Team.CreateTeams(seeds);
		console.log(teams);
		var bracket = Bracket.CreateBracket(seeds, teams);
		
		//bracket.createBracketMatchups(seeds);
		$('#menu').hide();
	});
	$("#full-bracket").on('click', '.row', function() {
		//console.log('hit');
		var classHolder = $(this).attr('class');
		var classUp = $(this).parents('.column').attr('class');
		

		console.log(classHolder," ", classUp);

		var seedHolder = classHolder.substr(classHolder.indexOf('seed-')+5);
		var rowHolder = classHolder.substr(classHolder.indexOf('row-')+4);
		var columnHolder = classUp.substr(classUp.indexOf('-')+1)
		console.log('seed ', seedHolder, ' column ', columnHolder);
		grabTeam(columnHolder, seedHolder);
		//insertTeam(columnHolder, rowHolder, seedHolder);
	});
});