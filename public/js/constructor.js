//constructor
function construct(totalRows){
$('#full-bracket .left').append('<ul class ="seed-list"></ul>');
	for (i=0; i<bracketarray.length; i++){
		console.log("team1 ",bracketarray[i].team1);
		$('#full-bracket .left .seed-list').append('<li class="button"></li>').append(bracketarray[i].team1.seed);
		
		$('#full-bracket .left .seed-list').append('<li class="button"></li>').append(bracketarray[i].team2.seed);
	}
}