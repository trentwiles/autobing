const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://www.bing.com/?q=webdrive');
    await driver.wait(until.titleIs('webdriver - Bing'), 10000);
  } finally {
    await driver.quit();
  }
})();