import { test } from '@playwright/test';

// before each: open the page and login with a sender account
test.beforeEach(async ({ page }) => {
    test.slow()
 
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

test.describe('Signer Workflow', () => {


    test('Signer bulk signs document from Needs-filling-out section', async ({ page }) => {
      await page.goto(`https://qa.suturehealth.com/request/sign`);
  
      //bulk sign    
      const inboxTab = 'a[id="tabs-:rs:--tab-0"]:has-text("INBOX")';
      await page.click(inboxTab);
      const needs_filling_out = '[data-cy="needs-filling-out"]'
      await page.click(needs_filling_out);
      await page.click('button[type="button"]:has-text("Unapproved")')
      const bulk_sign_button = '[data-cy="sign-all-btn"]'
      await page.click(bulk_sign_button); //bulk sign the doc
      const submit_sign_all = '[data-cy="submit-sign-all"]'
      await page.click(submit_sign_all); //bulk sign the doc
      await page.waitForTimeout(3000);
  
      });


      test('Signer bulk rejects document from Needs-filling-out section', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
  
        // reject the doc    
        const inboxTab = 'a[id="tabs-:rs:--tab-0"]:has-text("INBOX")';
        await page.click(inboxTab);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const reject_button = '[data-cy="reject-btn"]'
        await page.click(reject_button); //reject the doc
        const reject_submit = '[data-cy="submit-rejection"]'
        await page.click(reject_submit); //reject the doc submit
        await page.fill('[name="reason"][placeholder="Add comments here..."]', 'Test reason for reject'); //fill reason
        await page.click(reject_submit); //reject the doc submit

        await page.waitForTimeout(3000);
        });

        //TODO : Needs signature



        test('Signer bulk approves document from Needs-filling-out section2', async ({ page }) => {
          await page.goto(`https://qa.suturehealth.com/request/sign`);
    
          // reject the doc    
          const inboxTab = 'a[id="tabs-:rs:--tab-0"]:has-text("INBOX")';
          await page.click(inboxTab);
          const needs_filling_out = '[data-cy="needs-filling-out"]'
          await page.click(needs_filling_out);
          await page.click('button[type="button"]:has-text("Unapproved")')
          const reject_button = '[data-cy="reject-btn"]'
          await page.click(reject_button); //reject the doc
          const reject_submit = '[data-cy="submit-rejection"]'
          await page.click(reject_submit); //reject the doc submit
          await page.fill('[name="reason"][placeholder="Add comments here..."]', 'Test reason for reject'); //fill reason
          await page.click(reject_submit); //reject the doc submit
  
          await page.waitForTimeout(3000);
          });



          test('Signer bulk reassigns document from Needs-filling-out section2', async ({ page }) => {
            await page.goto(`https://qa.suturehealth.com/request/sign`);
      
            // reject the doc    
            const inboxTab = 'a[id="tabs-:rs:--tab-0"]:has-text("INBOX")';
            await page.click(inboxTab);
            const needs_filling_out = '[data-cy="needs-filling-out"]'
            await page.click(needs_filling_out);
            await page.click('button[type="button"]:has-text("Unapproved")')
            const reject_button = '[data-cy="reject-btn"]'
            await page.click(reject_button); //reject the doc
            const reject_submit = '[data-cy="submit-rejection"]'
            await page.click(reject_submit); //reject the doc submit
            await page.fill('[name="reason"][placeholder="Add comments here..."]', 'Test reason for reject'); //fill reason
            await page.click(reject_submit); //reject the doc submit
    
            await page.waitForTimeout(3000);
            });
  

});
