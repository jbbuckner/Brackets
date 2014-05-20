var teams = [];
var bracketarray = [];
var seeds =64;
var totalColumns;
var roundArray = [];
$(function(){
	console.log('ready');

	//var placeIndex = ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2'];
//$('.button').click(function(){
	//var placeholder = $(this).data('placeindex');
	//var row = placeholder.split('-')[0];//find value before -
	//var place = placeholder.split('-')[1];//find value after -
	//var value = $(this).text();
	//if the value is in the rows beyond the one you are selecting clear it
	//checkVal(placeholder, value);
	// console.log(row);
	// console.log(place);
	
	//row++;
	//$("."+(row)+'-'+(Math.round(place/2))).html(value);
	createTeams(seeds);
	createBracketMatchups(seeds);
});
function checkVal(placeholder, value){
	// for (var i = 0; i<totalRows; i++){

	// }
}


//construct();
