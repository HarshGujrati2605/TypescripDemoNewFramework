

import { test } from '@playwright/test';
// require('dotenv').config();

// before each: open the page and login with a sender account
test.beforeEach(async ({ page }) => {
 
    await page.goto(
        `https://app.qa.suturehealth.com/identity/account/login`
        );
    await page.fill(
      'input[name="Input.Username"]',
      `SenderAdminQA`
    );
    await page.fill(
      'input[name="Input.Password"]',
      `APISuccess1`
    );
    // click the login / Let's Go submit button
    await page.click('button[type="submit"]');
  
});

test.describe('Track documents Workflow', () => {
  test('verify the track section contains the doc send by sender', async ({ page }) => {
    await page.goto(`https://app.qa.suturehealth.com//request/send`);

    const trackTab = 'a[id="tabs-:ra:--tab-1"]:has-text("TRACK")';
    await page.click(trackTab);
    await page.waitForTimeout(3000);
  });







});
