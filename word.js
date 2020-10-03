var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
    }
  };
  xhttp.open("GET", "https://random-word-api.herokuapp.com/word?number=30", true);
  xhttp.send();

var parse = JSON.parse(data);

var count = 0;
for(var i = 0; i < parse.length; ++i){
    if(array[i] == 2)
        count++;
}

function getRandomWord() {
	var random = Math.floor((Math.random() * count) + 0);
	return parse[random];
}