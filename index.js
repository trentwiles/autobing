const {Builder, By, Key, until} = require('selenium-webdriver');
const word = require('./word.js');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.bing.com/?q=Please_sign_in');
	// This gives you 100 seconds to sign in so your searches count.
    await driver.wait(until.titleIs('asdasdas'), 100000);
  } finally {
    await driver.quit();
  }
})();