var fs = require('fs');
var game = require('./game');


function word(){
	var words;
	var array = [];
	var tries = 3;
    fs.readFile("superheroes.txt", "utf8", function(error, data) {
		var dataArr = data.split(", ");
		words = dataArr[Math.floor(Math.random()*dataArr.length)];
		for (var i = 0; i < words.length; i++) {
			if(words.charAt(i) === ' '){
				array[i] = ' ';
			}
			else{
		 	array[i] = "_ ";
		 	}
		}
		var start = new game(words, array, tries, word);
		start.gameStart();
    });
}
module.exports = word;
word();