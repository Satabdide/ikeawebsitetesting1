module.exports = function () {
  // Going to the website
  this.Given(/^that we are on ikea's website$/, async function () {
    await helpers.loadPage('https://www.ikea.se/');
  });

  this.Given(/^that we accepted the standard cookie policy$/, async function () {
    // the cookie accept button does not exist initially so wait for it to exist
    await driver.wait(until.elementsLocated(by.css('#onetrust-accept-btn-handler')), 10000);
    // once it exists grab the button
    let cookieAcceptButton = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
    // now wait for the button to be interactable (visible) before clicking
    // check if visible/displayed, wait 1/10 of a second then check again
    while (!(await cookieAcceptButton.isDisplayed())) {
      await driver.sleep(100);
    }
    // the accept button exists and is visible so click it
    await cookieAcceptButton.click();
  });
  
}