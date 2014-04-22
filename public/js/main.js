$(function(){
	console.log('ready');
	//var placeIndex = ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2'];
	$('.button').click(function(){
		var placeholder = $(this).data('placeindex');
		var row = placeholder.split('-')[0];
		var place = placeholder.split('-')[1];
		var value = $(this).text();
		// console.log(row);
		// console.log(place);
		// console.log(value);
		row++;
		$("."+(row)+'-'+(Math.round(place/2))).html(value);
	});
});