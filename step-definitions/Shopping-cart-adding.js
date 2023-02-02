/*module.exports = function () {
  this.Given(/^I add (\d+) "([^"]*)" product$/, async function (numberOfItems,productName) {

    await driver.findElement(By.css('input[type="search"]')).sendKeys(productName, selenium.Key.ENTER);
    await driver.sleep(2000);
    //locating the add button
    await driver.wait(until.elementsLocated(by.css('button[class*= "add-to-cart"]')), 10000);
    let addButtonAgain = await driver.findElement(By.css('button[class*= "add-to-cart"]'));
    //Adding first copy to shopping cart
    await addButtonAgain.click();
    await driver.sleep(3000);
  });

  this.When(/^I add (\d+) copies of items from shopping cart$/, async function (numberOfItems) {
    await driver.sleep(10000);
    await driver.executeScript('window.scrollTo(0,0)');

    let miniCart = await driver.findElement(By.className('hnf-btn__inner js-shopping-cart-icon'));
    await miniCart.click();
    await driver.sleep(5000);
    // inspected dropdown button in shopping cart
    let CartAddButton = await driver.findElement(by.className('cart-ingka-quantity-dropdown'));
    await CartAddButton.click();
    await driver.sleep(2000);
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    let popUpButton = await driver.findElement(By.className('hnf-btn__inner hnf-btn__inner--icon-tertiary-inverse hnf-btn--xsmall'));
    //let popUpButton = await driver.findElement(By.className('hnf-btn hnf-btn--xsmall hnf-btn--icon-tertiary-inverse'));
    await popUpButton.click();
    await driver.sleep(5000);
    let ShoppingCartButton = await driver.findElement(By.xpath('/html/body/header/div/div/div/ul/li[4]/a'));
     //let ShoppingCartButton = await driver.findElement(By.css('a[href="https://www.ikea.com/se/sv/shoppingcart/"]'));
    
    await ShoppingCartButton.click();
    await driver.sleep(10000);

    // inspected dropdown button in shopping cart
    //await driver.wait(until.elementsLocated(by.className('cart-ingka-quantity-dropdown')), 10000);
    let shoppingCartAddButton = await driver.findElement(by.className('cart-ingka-quantity-dropdown'));
    await shoppingCartAddButton.click();
    await driver.sleep(2000);

   
    
  });
}*/