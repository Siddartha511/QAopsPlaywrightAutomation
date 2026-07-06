const { test, expect } = require('@playwright/test');
const { promises } = require('node:dns');

test('page Playwright test', async ({browser}) => 
    {
         const context = await browser.newContext();
         const page = await context.newPage();
         await page.goto("https://hotstar.com");

          console.log(await page.title());
    });

test('playwright page load', async ({browser}) =>
{
    const context = await  browser.newContext();
    const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");

    await page.locator("[type='checkbox']").click();
    await page.locator("#signInBtn").click();
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class","blinkingText");

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("[href*='documents-request']").click()
  ])

  const text = await newPage.locator("p.im-para.red").textContent();
  console.log(text);
  const arrayText = text.split("@");
  const word = arrayText[1].split(" ");
  console.log(word[0]);
    

});

test('load login page', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("[name='login']").click();
    console.log(await page.locator(".invalid-feedback ").first().textContent());
    console.log(await page.locator(".invalid-feedback ").nth(1).textContent());

    await page.locator("[class='btn1']").click();
    await page.locator("#firstName").fill("Dev");
    await page.locator("#lastName").fill("Sidhu");
    await page.locator("#userEmail").fill("dsid070511@gmail.com");
    await page.locator("#userMobile").fill("7013961949");
    await page.locator("[formcontrolname='occupation']").selectOption({label: 'Student'});
    await page.locator("[value='Male']").click();
    await page.locator("#userPassword").fill("Sidhu@007")
    await page.locator("#confirmPassword").fill("Sidhu@007")
    await page.locator("[type='checkbox']").click();
    await page.locator("#login").click()
    await page.locator("[class='login-wrapper-footer-text']").click();
    await page.locator("#userEmail").fill("dsid070511@gmail.com");
    await page.locator("#userPassword").fill("Sidhu@007");
    await page.locator("#login").click();
    const detail = await page.locator(".card-body b").nth(0).textContent();
    const all_deatils = await page.locator(".card-body b").allTextContents();
    console.log(detail);
    console.log(all_deatils);

});
