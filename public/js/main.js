$(function(){
	console.log('ready');
	var placeIndex = ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2'];
	$('.button').click(function(){
		var hitClass = $(this).attr('class').split(/\s+/);
		console.log("hit " + hitClass);
		$.each( hitClass, function(index, item){
			console.log('index '+index);
			for (i=0; i<placeIndex.length; i++){
				if (item === placeIndex[i]){
					var value = $('.'+item).text();
						
				}
			}
			// if (item === '1-1') {
			// 	var value = $('.1-1').text();
			// 	console.log('1-1 '+ value);
			// 	$('.3-1').text(value);
			// }
		});
	});
});