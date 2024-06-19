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


test.describe('Check user is able to add anotations', () => {

    test('via Add sign', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const sign_icon = 'button[aria-label="signature"]'
        await page.click(sign_icon);
    }); //todo  sign

    test('via date sign ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const date_icon = 'button[aria-label="calendar"]'
        await page.click(date_icon);
    });

    test('via text box', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const textbox_icon = 'button[aria-label="textbox"]'
        await page.click(textbox_icon);
    });
        
    test('via checkbox ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const checkbox_icon = 'button[aria-label="checkbox"]'
        await page.click(checkbox_icon);      
    });

    test('and delete the annotation added ', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const textbox_icon = 'button[aria-label="textbox"]'
        await page.click(textbox_icon);
        const annotation_box = 'class="panzoom-exclude.react-draggable.react-draggable-dragged"'
        await page.click(annotation_box);
        const delete_annotationbox = 'class="rnd-exclude.css-1qxmo00"'
        await page.click(delete_annotationbox);
    });

    test('save the added annotation', async ({ page }) => {
        await page.goto(`https://qa.suturehealth.com/request/sign`);
        const needs_filling_out = '[data-cy="needs-filling-out"]'
        await page.click(needs_filling_out);
        await page.click('button[type="button"]:has-text("Unapproved")')
        const select_first_doc = '[data-item-index="0"]'
        await page.click(select_first_doc);
        const annotate_btn = 'button[aria-label="edit document"]'
        await page.click(annotate_btn);
        const textbox_icon = 'button[aria-label="textbox"]'
        await page.click(textbox_icon);
        const annotation_box = '[placeholder="Begin typing..."]'
        await page.fill(annotation_box,"Testing");
        const save_icon = '[class="chakra-icon.css-n059si"]:has-text("Save")'
        await page.click(save_icon);
    });

    
});