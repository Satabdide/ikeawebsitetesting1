module.exports = function () {

  let boughtProducts = [];

  this.When(/^I add "([^"]*)" to the shopping cart$/, async function (productName) {
     //locate the search field
    let searchField = await driver.findElement(By.css('input[type="search"]'));
     //Type productName in the search field
    await searchField.sendKeys(productName, selenium.Key.ENTER)
    //wait until product is displayed
    await driver.sleep(2000);

    await driver.wait(until.elementsLocated(by.css('button[class*= "add-to-cart"]')), 10000);
    let addButtonAgain = await driver.findElement(By.css('button[class*= "add-to-cart"]'));
    //click on the + button
    await addButtonAgain.click();
    //wait on the ikea:s website to see the product in the shopping cart
    await driver.sleep(2000);

  });
  this.Then(/^the shopping cart must display (\d+) products and the price$/, async function (numberOfItems) {
    //grab the mini-shopping cart button
    await driver.sleep(10000);
    
    await driver.executeScript('window.scrollTo(0,0)');
    
    let ShoppingCartButton = await driver.findElement(By.className('hnf-btn__inner js-shopping-cart-icon'));
    await ShoppingCartButton.click();
    await driver.sleep(5000);
    
   

   
   
    //let numberOfItemsInShoppingCart = await driver.findElement(By.className("hnf-header__cart-counter")).getText();
      
    //assert.equal(numberOfItemsInShoppingCart, numberOfItems)

  });
}