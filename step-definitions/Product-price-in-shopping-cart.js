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
    await driver.sleep(10000);
    //let popUpButton = await driver.findElement(By.className('hnf-btn__inner hnf-btn__inner--icon-tertiary-inverse hnf-btn--xsmall'));
    //let popUpButton = await driver.findElement(By.className('hnf-btn hnf-btn--xsmall hnf-btn--icon-tertiary-inverse'));
    //await popUpButton.click();
    await driver.executeScript('window.scrollTo(0,0)');
    let ShoppingCartButton = await driver.wait(until.elementsLocated(By.xpath('/html/body/header/div/div/div/ul/li[4]/a')));
    await ShoppingCartButton.click();
    //await driver.executeScript('[0].scrollIntoView()', minicart);
    

    await driver.sleep(5000);
    //clicking on shopping cart
    //let ShoppingCartButton = await driver.findElement(By.xpath('/html/body/header/div/div/div/ul/li[4]/a'));
    //await ShoppingCartButton.click();
    await driver.sleep(10000);

   
    //let miniBasket = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/shoppingcart/"]'));
      
    //await miniBasket.click();
    
    //await driver.sleep(2000);
    //grab the number of items text in the mini-shopping cart
    let numberOfItemsInShoppingCart = await driver.findElement(By.className("hnf-header__cart-counter")).getText();
      //await driver.findElement(By.id('select')).getText();

    //<span class="hnf-header__cart-counter">9</span>
    //let numberOfItemsInShoppingCart = await driver.findElement(By.className('Text_text__1DvUt Text_body__FrvAc Text_black__yB42g Text_small__3m75u')).getText();
    assert.equal(numberOfItemsInShoppingCart, numberOfItems)

  });
}