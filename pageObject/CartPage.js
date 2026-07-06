class CartPage {

    constructor(page) {
        this.page = page;
        this.productText = page.locator("h3:has-text('ADIDAS ORIGINAL')")
    }

    async productValidation() {
        await this.page.locator("div li").first().waitFor();
        return await this.productText.isVisible();

    }
    async productChecking() {
        await this.page.locator("text = Checkout").click();
        await this.page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor();
        const dropcount = await dropdown.locator("button").count();

        for (let i = 0; i < dropcount; i++) {

            if (await dropdown.locator("button").nth(i).textContent() === " India") {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
}
module.exports = { CartPage }