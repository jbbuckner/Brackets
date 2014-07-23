
var Brackets = {};

function Bracket(seeds){
	this.numberofTeams = 0;
	this.teamLocation = 0;
	this.columns = ((Math.log(seeds)/Math.log(2))+1);
	this.classID = 'seed-';
}
Bracket.prototype.createBracketMatchups = createBracketMatchups;
Bracket.prototype.buildBracket = buildBracket;
Bracket.prototype.positionBracket = positionBracket;
// getthis.columns=function(seeds){
// 	return ((Math.log(seeds)/Math.log(2))+1);
// }

function createBracketMatchups(){
	//winners box
	var ColumnNumber=0;
	console.log('bracket columns ', Bracket.columns);
	for (var j=0; j<Bracket.columnscolumns; j++){
		var seedsInColumn=Math.pow(2,ColumnNumber);
		roundArray[ColumnNumber]={};
		roundArray[ColumnNumber].matchesArray=[];
		switch (seedsInColumn){
			case 1:
			roundArray[ColumnNumber].matchesArray[0]={};
			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
			roundArray[ColumnNumber].matchesArray[0].winner = null;
			break;
			case 2:
			//console.log("ColumnNumber "+ColumnNumber);
			roundArray[ColumnNumber].matchesArray[0]={};
			roundArray[ColumnNumber].matchesArray[0].team1 = teams[0];
			roundArray[ColumnNumber].matchesArray[0].team2 = teams[seedsInColumn-1];
			break;
			default:
				var matchesPerRound = seedsInColumn/2;
				
				var currentRound=0;
				for(var i=0; i<roundArray[ColumnNumber-1].matchesArray.length; i++){

					roundArray[ColumnNumber].matchesArray[currentRound]={};
					
					//var matchesPerRound = seedsInColumn/2;
						roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team1;
						roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
						currentRound++;
						roundArray[ColumnNumber].matchesArray[currentRound]={};
						roundArray[ColumnNumber].matchesArray[currentRound].team1 = roundArray[ColumnNumber-1].matchesArray[i].team2;
						roundArray[ColumnNumber].matchesArray[currentRound].team2 = teams[seedsInColumn-roundArray[ColumnNumber].matchesArray[currentRound].team1.seed];
						currentRound++;
				}
				//clearRoundArray(ColumnNumber, roundArray[ColumnNumber-1].matchesArray.length);
				// clear previous column array
				// for(var clearMatch=0; clearMatch<roundArray[ColumnNumber-1].matchesArray.length; clearMatch++){
				// 	roundArray[ColumnNumber-1].matchesArray[clearMatch].team1 = null;
				// 	roundArray[ColumnNumber-1].matchesArray[clearMatch].team2 = null;
				// }
			break;
		}
		buildBracket(ColumnNumber, seedsInColumn);
		ColumnNumber++;
		

	}
	clearRoundArray(Bracket.columns);
	positionBracket(Bracket.columns);
}

function buildBracket(ColumnNumber, seedsNow){
	//build a dual sided bracket
	var columnX = 'column-'+ColumnNumber;
	var rowX;
	var rowcount = 0;
	var teamsInColumn =seedsNow/2;
	var thisMatch;
	$('#full-bracket .left').append('<div class="column '+columnX+'"></div>');
	if(ColumnNumber>0){
		$('#full-bracket .right').append('<div class="column '+columnX+'"></div>');
	}
	for(var i=0; i<seedsNow/2; i++){
		rowX = 'row-'+rowcount;
		rowcount++;
		thisMatch = roundArray[ColumnNumber].matchesArray[i];
		if(ColumnNumber==0){
			$('.'+(columnX)).append('<div class="row champ">'+thisMatch.team1.seed+'</div>');
		}else if(ColumnNumber==1){
			$('.left .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team1.seed+'">'+thisMatch.team1.seed+'</div>');
			//$('.left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');
			$('.right .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team2.seed+'">'+thisMatch.team2.seed+'</div>');
		}else if(i<teamsInColumn/2){
			$('.left .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team1.seed+'">'+thisMatch.team1.seed+'</div>');
			rowX = 'row-'+(rowcount);
			$('.left .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team2.seed+'">'+thisMatch.team2.seed+'</div>');	
		}else{
			$('.right .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team1.seed+'">'+thisMatch.team1.seed+'</div>');
			rowX = 'row-'+(rowcount);
			$('.right .'+(columnX)).append('<div class="row '+rowX+' '+classID+thisMatch.team2.seed+'">'+thisMatch.team2.seed+'</div>');
		}
		rowcount++;
	}
	//$('#full-bracket').css('width', (ColumnNumber*200+100));
	//------------Works for a single set on one side ---------------------//
	// $('#full-bracket .left').append('<div class="column '+columnX+'"></div>');
	//console.log('seedsNow', seedsNow);
	// for(var i=0; i<seedsNow/2; i++){
	// 	if(ColumnNumber==0){
	// 		$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');	
	// 	}else{
	// 		//console.log("this seed", roundArray[ColumnNumber].matchesArray[i]);
	// 		console.log("this seed", roundArray[ColumnNumber].matchesArray[i].team1.seed);
	// 		$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team1.seed+'</div>');
	// 		$('#full-bracket .left .'+(columnX)).append('<div class="row">'+roundArray[ColumnNumber].matchesArray[i].team2.seed+'</div>');
	// 	}
	// }
}

function positionBracket(columns){
	$('#full-bracket').css('width', (this.columns*2-1)*$('.column').width());
	var setTop;
	var setMargin;
	var previousColumn;
	var columnX;

	for(var i=this.columns-1; i>=0; i--){
		columnX = 'column-'+i;
		if(i==this.columns-1){
			$('.'+(columnX)).css('top', 0)
			$('.'+(columnX)+' .row').css('margin-top', 0);
		}else if(i==0){
			setTop = parseInt($('.'+(previousColumn)).css('top')) + parseInt($('.'+(previousColumn)+ ' .row:last-child').css('margin-top'))/2+ ($('.'+(previousColumn)+' .row').height()/2)+1;
			$('.'+(columnX)).css('top', setTop);
			$('.column0 .row.champ').empty();
		}else{
			previousColumn = 'column-'+(i+1);
			//setMargin = margin*2 + height + border-padding;
			setMargin = parseInt($('.'+(previousColumn)+' .row:last-child').css('margin-top'))*2 + $('.'+(previousColumn)+' .row').height()+2;
			//setTop = top + margin-top/2 + height/2 + 1 ;
			setTop = parseInt($('.'+(previousColumn)).css('top')) + parseInt($('.'+(previousColumn)+ ' .row:last-child').css('margin-top'))/2+ ($('.'+(previousColumn)+' .row').height()/2)+1;
			
			$('.'+(columnX)).css('top', setTop);
			$('.'+(columnX)+' .row').css('margin-top', setMargin+'px');
			$('.'+(columnX)+' .row:first-child').css('margin-top', 0);
		}
	}
}

function clearRoundArray(columns){
	// clear previous column array
	var clearRound;
	var columnX;
	var team1holder;
	var team2holder;
	for(var clearColumns=0; clearColumns<this.columns-1; clearColumns++){
		columnX='column-'+clearColumns;
		//remove data from visible bracket
		$('.'+(columnX)+' .row').empty();

		clearRound = roundArray[clearColumns].matchesArray.length-1;
		
		team1holder=classID+roundArray[clearColumns].matchesArray[clearRound].team1.seed;
		if(clearRound>0){
			team2holder=classID+roundArray[clearColumns].matchesArray[clearRound].team2.seed;
		}

		if(clearColumns==0){
			$('.'+(columnX)+' .row'+(team1holder)).removeClass(team1holder);
			//$('.'+(columnX)+' .row').empty();
			roundArray[clearColumns].matchesArray[clearRound].team1 = null;
		}else if(clearColumns==1){
			$('.'+(columnX)+' .row').removeClass(team1holder);
			$('.'+(columnX)+' .row').removeClass(team2holder);

			roundArray[clearColumns].matchesArray[clearRound].team1 = null;
			roundArray[clearColumns].matchesArray[clearRound].team2 = null;
		
		}else{
			clearRound = roundArray[clearColumns].matchesArray.length-1;
			for(var clearMatch=0; clearMatch<=clearRound; clearMatch++){
				team1holder=classID+roundArray[clearColumns].matchesArray[clearMatch].team1.seed;
				team2holder=classID+roundArray[clearColumns].matchesArray[clearMatch].team2.seed;
				//clear the class for each seed
				$('.'+(columnX)+' .row').removeClass(team1holder);
				$('.'+(columnX)+' .row').removeClass(team2holder);
				//remove the matches for each column
				roundArray[clearColumns].matchesArray[clearMatch].team1 = null;
				roundArray[clearColumns].matchesArray[clearMatch].team2 = null;
			}//end for match
		}//end if
	}//end for columns
}//end clearRoundArray