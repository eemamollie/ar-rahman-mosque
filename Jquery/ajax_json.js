//http://learnwebcode.github.io/json-example/animals-1.json


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://learnwebcode.github.io/json-example/animals-1.json');

ourRequest.onload = function(){
	console.log(ourRequest.responseText);
};

ourRequest.send();




















