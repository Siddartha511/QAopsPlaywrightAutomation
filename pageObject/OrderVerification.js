class OrderVerification {
    constructor(page) {
        this.userName = page.locator(".user__name [type='text']").first();
        this.submitButton = page.locator(".btnn");
        this.ThankYouMsg = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

    }
    async emailVerification() {

        await this.submitButton.click();
    }

    async getOrdersId() {
        return await this.orderId.textContent();

    }

}

module.exports = { OrderVerification }