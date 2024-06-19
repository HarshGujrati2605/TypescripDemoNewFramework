import { test,expect } from '@playwright/test';

// before each: open the page and login with a sender account
test.beforeEach(async ({ page }) => {
    // test.slow()
 
    await page.goto(
      `https://app.qa.suturehealth.com/identity/account/login`
    );
    await page.fill(
      'input[name="Input.Username"]',
      `SingleSignerOneAsstQA`
    );
    await page.fill(
      'input[name="Input.Password"]',
      `APISuccess1`
    );
    // click the login / Let's Go submit button
    await page.click('button[type="submit"]');

});


test.describe('Check Document Header for a document is able to', () => {

    test('Verify document name', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        await page.waitForTimeout(10000);
        const doc_name =  await page.locator('[data-cy="template-type"]')
        expect(doc_name).toBeVisible()
        expect(doc_name).not.toBeNull()
    }); //todo

    test('Verify change document type ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const temp_type = '[data-cy="edit-template-type"]'
        await page.click(temp_type);
        const temp_names = 'button[data-cy="template-select"]'
        await page.click(temp_names);  
        const menuSelector = '[class="chakra-menu__menuitem-option css-lnyz64"][data-index="3"]'; 
        await page.waitForSelector(menuSelector, { state: 'visible' });
        await page.click(menuSelector); 
        await page.waitForTimeout(2000);
        const doc_name =  await page.locator('[data-cy="template-type"]')
        expect(doc_name).toContainText("Medical Order")
    });//pass

    test('Verify change diagnosis code ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        //TODO
    });
        
    test('Verify phone number and copy the number ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const phone_btn = 'button[aria-label="call"]'
        await page.click(phone_btn);
        const copy_link = '[data-index="1"]:has-text("Copy number")'
        await page.click(copy_link);       
    });//pass

    test('Verify phone number and call the number ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const phone_btn = 'button[aria-label="call"]'
        await page.click(phone_btn);
        const call_link = '[data-index="2"]:has-text("Call")'
        await page.click(call_link);    
    });//pass

    test('change effective date', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const calender_btn = 'button[class="css-m3cdks"]'
        await page.click(calender_btn);
        const date_number = '[aria-label="Choose Thursday, July 20th, 2023"]'
        await page.click(date_number);    
        const confirm_btn = 'button[class="chakra-button.css-1oiv2xo"]:has-text("Confirm")'
        await page.click(confirm_btn);       
    });//todo

    test('verify history', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const history_icon = 'button[aria-label="history"]'
        await page.click(history_icon);
        const close_btn = 'button[class="chakra-button.css-1boaqgo"]:has-test("Close")'
        await page.click(close_btn);
    });//todo
});
