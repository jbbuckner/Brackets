$(function(){
	console.log('ready');
	$('.button').click(function(e){
		e.preventDefault();
		console.log("hit " + $('.button').className);
	});
});
