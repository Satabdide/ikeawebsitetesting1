module.exports = function () {
  this.Given(/^I am on Products parent category$/, async function () {
    let productLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/produkter-products/"]'));
    await productLink.click();
    await driver.sleep(2000);
  });

  this.When(/^I click on Möbler$/, async function () {
    let möblerLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/mobler-fu001/"]'));
    await möblerLink.click();
    await driver.sleep(2000);
  });

  this.Then(/^I click on Bord$/, async function () {
    let bordLink = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/cat/bord-fu004/"]'));
    await bordLink.click();
    await driver.sleep(2000);
  });

  this.Then(/^I click on Sandsberg$/, async function () {
    let Sandsberg = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/p/sandsberg-bord-svart-s29420393/"]'));
    await Sandsberg.click();
    await driver.sleep(2000);
  });

  this.Then(/^I click on Product information$/, async function () {
    await driver.sleep(2000);
   // driver.getCurrentUrl();
    let url = await driver.getCurrentUrl();
    console.log(url);


    let element = await driver.findElement(By.xpath('//button[contains(., "Produktinformation")'));
    element.click();
    //let Produktinformation = await driver.findElement(By.className("pip-chunky-header__title")).getText();
    // let productinformation = await driver.wait(until.elementsLocated(By.xpath('//button[contains(., "Produktinformation")')));
    //await driver.executeScript('[0].scrollIntoView()', productinformation);
    //productinformation.click();
    //await driver.findElement(By.xpath('button[contains(., "Produktinformation")')).click();
    //button[contains(., "Produktinformation")]
    
    await driver.sleep(2000);
    
  });

  this.Then(/^the detailed product information about Sandsberg is opened with details$/, async function () {
    var productInformation = await driver.findElement(By.className("pip-product-details__paragraph")).getText();
    
  });
    
}