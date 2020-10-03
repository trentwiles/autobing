const {Builder, By, Key, until} = require('selenium-webdriver');
const word = require('./word.js');

var chunk = '["rearouse","jerkily","transductions","phrasing","liftgate","rumbustiousness","retrospects","nephologies","mueslis","urostyle","elutriation","resects","tetrameter","janty","hardiest","psychometrics","unquestionably","warfare","scolding","menudo","phytohormones","hematologies","staling","patamars","godlily","pamphlet","industrially","door","branded","curates"]'


var parse = JSON.parse(chunk);

var count = 0;
for(var i = 0; i < parse.length; ++i){
    if(parse[i] == 2)
        count++;
}

function getRandomWord() {
	var random = Math.floor((Math.random() * 30) + 0);
	return parse[random];
}

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.bing.com/?q=get_ready');     
    var one = 1;
    while(1 == one){
        var goto = getRandomWord();
        await driver.get('https://www.bing.com/?q='+goto);
        await driver.wait(until.titleIs(goto+' - Bing'), 3000);
    }
  } finally {
    await driver.quit();
  }
})();