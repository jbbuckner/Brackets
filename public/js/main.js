$(function(){
	console.log('ready');
	var placeIndex = ['1-1', '1-2', '1-3', '1-4', '2-1', '2-2'];
	$('.button').click(function(){
		var hitClass = $(this).attr('class').split(/\s+/);
		console.log("hit " + hitClass);
		$.each( hitClass, function(index, item){
			for (i=0; i<placeIndex.length; i++){
				if (item === placeIndex[i]){
					var value = $('.'+item).text();
					console.log(item);
					var str = item.substr(0,item.indexOf('-'));//find '-' grab everything before and including
					var place = item.substr(item.indexOf('-')+1, item.length);
					console.log(place);
					str++;
					place = Math.round(place/2);
					console.log(place);
					$("."+str+'-'+place).append(value);
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