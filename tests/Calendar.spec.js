const {test, expect} = require('@playwright/test')

test('Calendar Automation',async ({page})=>{

    const year = "2026";
    const month = "11";
    const date = "5";
    const actualDate = [month,date,year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();

    await page.getByText(year).click();  
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
    await page.locator("//abbr[text()='"+date+"']").first().click();
                      
    const inputs = page.locator(".react-date-picker__inputGroup__input");

    for(let i =0; i<actualDate.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(actualDate[i]);
 
    }

})
