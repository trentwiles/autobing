const {Builder, By, Key, until} = require('selenium-webdriver');
const word = require('./word.js');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.bing.com/?q=get_ready');     

	// This gives you 100 seconds to sign in so your searches count.
    await driver.wait(until.titleIs('asdasdas'), 10000);
    var one = 1;
    while(1 == one){
        var goto = word.getRandomWord();
        await driver.get('https://www.bing.com/?q='+goto);
        await driver.wait(until.titleIs(goto+' - bing'), 3000);
    }
  } finally {
    await driver.quit();
  }
})();