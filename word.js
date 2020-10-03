var chunk = '["rearouse","jerkily","transductions","phrasing","liftgate","rumbustiousness","retrospects","nephologies","mueslis","urostyle","elutriation","resects","tetrameter","janty","hardiest","psychometrics","unquestionably","warfare","scolding","menudo","phytohormones","hematologies","staling","patamars","godlily","pamphlet","industrially","door","branded","curates"]'


var parse = JSON.parse(chunk);

var count = 0;
for(var i = 0; i < parse.length; ++i){
    if(parse[i] == 2)
        count++;
}

function getRandomWord() {
	var random = Math.floor((Math.random() * count) + 0);
	return parse[random];
}