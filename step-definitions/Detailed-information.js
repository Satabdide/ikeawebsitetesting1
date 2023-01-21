module.exports = function () {
  this.Given(/^I am on Products parent category$/, async function () {
    let productLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/produkter-products/"]'));
    await productLink.click();
    await driver.sleep(2000);
  });

  this.When(/^I click on Möbler$/, async function () {
    let möblerLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/mobler-fu001/"]'));
    //let möblerLink = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.css('a[href="https://www.ikea.com/se/sv/cat/mobler-fu001/"]')));
    
    await möblerLink.click();
    await driver.sleep(2000);
  });

  this.Then(/^I click on Bord$/, async function () {
    let bordLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/bord-fu004/"]'));
    await bordLink.click();
    await driver.sleep(2000);
  });

  this.Then(/^I click on Sandsberg$/, async function () {
    let Sandsberg = await driver.findElement(By.className("pip-header-section__title--small notranslate")).getText();
   
    //await Sandberg.click();
    //<span class="pip-header-section__title--small notranslate" translate="no">SANDSBERG </span>
    //<span class="pip-chunky-header__title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Product information</font></font>Produktinformation</span>
    await driver.sleep(2000);
  });

  this.Then(/^I click on Product information$/, async function () {
    //let Produktinformation = await driver.findElement(By.className("pip-chunky-header__title")).getText();
    await driver.wait(until.elementsLocated(by.css('button[class= "pip-chunky-header__details pip-chunky-header"]')), 10000);
   
   
    let text = "A neat design that blends into the room without taking up too much visual space, yet robust enough to handle all everyday activities.";
    //<font style="vertical-align: inherit;">Product information</font>
    assert.equal(productInformation, text);
    await driver.sleep(4000).then(callBack);
  });

  this.Then(/^the detailed product information about Sandsberg is opened with details$/, async function () {
    var productInformation = await driver.findElement(By.className("pip-product-details__paragraph")).getText();
    //pip-product-details__paragraph
    //assert.equal(productInformation, "Sweden", "Product has no description");
  });
    
}