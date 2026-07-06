class MyOrdersPage {
  constructor(page) {
    this.page = page;
    this.MyOrdersButton = page.locator("button[routerlink*='myorders']");
    this.actualOrderId = page.locator(".col-text");
  }

  async gotoMyOrders() {
    await this.MyOrdersButton.click();
  }
  async verifyOrderID(orderId) {
    await this.page.locator("tbody").waitFor();
    const rows = this.page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }

    const actualOrderId = await this.actualOrderId.textContent();

    return await actualOrderId;
  }

}
module.exports = { MyOrdersPage }