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
  this.Then(/^the shopping cart must display (\d+) products$/, async function (numberOfItems) {
    //grab the mini-shopping cart button
   
    let miniBasket = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/shoppingcart/"]'));
      //driver.findElement(By.className("hnf-btn__label")).getText();
      //driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/shoppingcart/"]'));    
    
    //<span class="hnf-btn__label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Shopping cart</font></font></span>
    //let Sandberg = await driver.findElement(By.className("pip-header-section__title--small notranslate")).getText();
    //let miniBasketClick = miniBasket[2];
    //click on the mini-shopping cart button
    await miniBasket.click();
    
    await driver.sleep(2000);
    //grab the number of items text in the mini-shopping cart
    let numberOfItemsInShoppingCart = await driver.findElement(By.className("hnf-header__cart-counter")).getText();
      //await driver.findElement(By.id('select')).getText();

    //<span class="hnf-header__cart-counter">9</span>
    //let numberOfItemsInShoppingCart = await driver.findElement(By.className('Text_text__1DvUt Text_body__FrvAc Text_black__yB42g Text_small__3m75u')).getText();
    assert.equal(numberOfItemsInShoppingCart, numberOfItems)

  });
}