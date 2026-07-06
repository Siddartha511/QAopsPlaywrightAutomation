const { When, Then, Given } = require('@cucumber/cucumber');
const { POmanager } = require('../../pageObject/POmanager');
const { expect } = require('@playwright/test')
const { chromium } = require('playwright')

Given('Users details {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.pomanager = new POmanager(page);

    const loginPage = this.pomanager.getLoginPage();
    await loginPage.goTo();
    await loginPage.login(username, password);

});
When('Adding {string} to the cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const dashboard = this.pomanager.getDashboard();
    await dashboard.searchProduct(productName);
    await dashboard.navigateToCart();

});
Then('verify the item is added to the cart', async function () {
    const cartpage = this.pomanager.getCartPage();
    const visible = await cartpage.productValidation();
    await expect(visible).toBeTruthy();
    await cartpage.productChecking();

});
When('Enter valid details to place the order', async function () {
    // Write code here that turns the phrase above into concrete actions
    const Orderverification = this.pomanager.getOrderVerification();
    await expect(Orderverification.userName).toHaveText("dsid070511@gmail.com");
    await Orderverification.emailVerification();
    await expect(Orderverification.ThankYouMsg).toHaveText(" Thankyou for the order. ");
    this.orderId = await Orderverification.getOrdersId();
    console.log(this.orderId);
});
Then('verify order is present in the order History', async function () {
    // Write code here that turns the phrase above into concrete actions
    const myorderspage = this.pomanager.getMyOrderPage();
    await myorderspage.gotoMyOrders();
    const actualOrderId = await myorderspage.verifyOrderID(this.orderId);
    await expect(this.orderId.includes(actualOrderId)).toBeTruthy();
});
