module.exports = function () {
  this.Given(/^I add (\d+) "([^"]*)" product$/, async function (numberOfItems,productName) {

    await driver.findElement(By.css('input[type="search"]')).sendKeys(productName, selenium.Key.ENTER);
    await driver.sleep(2000);
    executeScript("window.scrollBy(0,400)");
    //js.executeScript("window.scrollBy(0,400)");
    await driver.wait(until.elementLocated(by.css('button[title="add-to-cart"]')));
    let addButton = await driver.findElement(By.css('button[title="add-to-cart"]'));
    //Adding first copy to shopping cart
    await addButton.click();
    await driver.sleep(2000);
  });

  this.When(/^I add (\d+) copies of items from shopping cart$/, async function (numberOfItems) {
    let ShoppingCartButton = await driver.findElement(By.className('hnf-btn__inner js-shopping-cart-icon'));
    await ShoppingCartButton.click();
    await driver.sleep(2000);

    // inspected + button in shopping cart
    await driver.wait(until.elementsLocated(by.className('cart-ingka-quantity-dropdown')), 10000);
    let shoppingCartAddButton = await driver.findElement(by.className('cart-ingka-quantity-dropdown'));
    await driver.sleep(2000);

    // adding twice in shopping cart
    await shoppingCartAddButton.click();
    await driver.sleep(2000);

    await shoppingCartAddButton.click();
    await driver.sleep(2000);
  });

  this.When(/^I add (\d+) copies of items from shopping cart$/, async function (numberOfItems) {
    let ShoppingCartButton = await driver.findElement(By.className('hnf-btn__inner js-shopping-cart-icon'));
    await ShoppingCartButton.click();
    await driver.sleep(2000);

    // inspected + button in shopping cart
    await driver.wait(until.elementsLocated(by.className('cart-ingka-quantity-dropdown')), 10000);
    let shoppingCartAddButton = await driver.findElement(by.className('cart-ingka-quantity-dropdown'));
    await driver.sleep(2000);

    // adding twice in shopping cart
    await shoppingCartAddButton.click();
    await driver.sleep(5000);

    await shoppingCartAddButton.click();
    await driver.sleep(2000);

    await shoppingCartAddButton.click();
    await driver.sleep(2000);

    await shoppingCartAddButton.click();
    await driver.sleep(2000);
  });

 
}