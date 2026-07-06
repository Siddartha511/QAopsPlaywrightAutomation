const { test, expect } = require('@playwright/test');
const { POmanager } = require('../pageObject/POmanager');

test('@regression load login page', async ({ page }) => {

  const username = ("dsid070511@gmail.com");
  const password = ("Sidhu@007");
  const productName = "ADIDAS ORIGINAL";

  const pomanager = new POmanager(page);

  const loginPage = pomanager.getLoginPage();
  await loginPage.goTo();
  await loginPage.login(username, password);

  const dashboard = pomanager.getDashboard();
  await dashboard.searchProduct(productName);
  await dashboard.navigateToCart();

  const cartpage = pomanager.getCartPage();
  const visible = await cartpage.productValidation();
  await expect(visible).toBeTruthy();
  await cartpage.productChecking();

  const Orderverification = pomanager.getOrderVerification();
  await expect(Orderverification.userName).toHaveText("dsid070511@gmail.com");
  await Orderverification.emailVerification();
  await expect(Orderverification.ThankYouMsg).toHaveText(" Thankyou for the order. ");
  const orderId = await Orderverification.getOrdersId();
  console.log(orderId);


  const myorderspage = pomanager.getMyOrderPage();
  await myorderspage.gotoMyOrders();
  const actualOrderId = await myorderspage.verifyOrderID(orderId);
  await expect(orderId.includes(actualOrderId)).toBeTruthy();

});
