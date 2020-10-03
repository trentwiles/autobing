const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.bing.com');
    await driver.findElement(By.id('sb_form'))
	.sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Bing'), 10000);
  } finally {
    await driver.quit();
  }
})();