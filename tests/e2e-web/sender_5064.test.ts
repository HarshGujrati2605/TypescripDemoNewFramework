
import { test } from '@playwright/test';
// require('dotenv').config();

// before each: open the page and login with a sender account
test.beforeEach(async ({ page }) => {
 
    await page.goto(
      `https://app.suturesign.com/identity/account/login`
    );
    await page.fill(
      'input[name="Input.Username"]',
      `senderPRODtest`
    );
    await page.fill(
      'input[name="Input.Password"]',
      `Password1`
    );
    // click the login / Let's Go submit button
    await page.click('button[type="submit"]');
  
});

test.describe('Sender Workflow', () => {
  test('Sender can send document when template is Home Health - Certification', async ({ page }) => {
    await page.goto(`https://new.suturesign.com/request/send`);


    //fill in template details 
    
    const templateSelect = 'span[class="k-input-value-text"]:has-text("-- Select One --")';
    await page.click(templateSelect);
    const spanText = await page.$eval(templateSelect, (span) => span.textContent.trim());
    console.log('Selected value:', spanText);
    const templateToSelect = 'Home Health - Certification';
    const templateSelector = `text=${templateToSelect}`;
    await page.click(templateSelector);
    await page.click('text="Template:"')


        //fill in signer details 

    await page.fill('input[id="SignerAutoComplete"]', `Test Signer`);
    await page.waitForTimeout(3500);
    // await page.fill('input[id="SignerAutoComplete"]', 'WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)');
    await page.click('text="Signer, EmailTest DO (NPI: 1111119111) Test Physician Office (Tampa, FL)"');
    await page.click('text="Signer:"')
    // const signerSelect = 'input[id="SignerAutoComplete"]:has-text("WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)")';
    // await page.click(signerSelect);
    await page.waitForTimeout(2000);


        //fill in patient details 

    const patientSelect = 'input[id="PatientAutoComplete"]';
    await page.click(patientSelect);
    await page.fill(patientSelect, `Bone`);
    await page.waitForTimeout(3500);
    const patientToSelect = 'Bone, Corina (DOB: 6/1/1953, MRN: 14CB1953)';
    const patientSelector = `text=${patientToSelect}`;
    // await page.fill(patientSelect, patientToSelect);
    await page.click(patientSelector);
    await page.click('text="Patient:"')


      //fill in upload file  


    await page.waitForSelector('input[type="file"][id="PdfContents"]');
    await page.setInputFiles('input[type="file"][id="PdfContents"]', '/Users/divyagupta/SutureHealth.BrowserAutomation/TestSupplemental-InterimOrder.pdf');
    await page.click('text="Upload Form:"')

  
        //fill in date picker details 
   
    const dateInputSelector = 'input[id="ClinicalDateDatePicker"]';  
    await page.fill(dateInputSelector, '01/15/2024');
    await page.click('text="Effective Date:"')


        //click send button 
    
    await page.click('.d-grid > button[type="submit"]')
    await page.waitForTimeout(3000);


        const errormessage = await page.isVisible('text="The signer you are attempting to send this document to is not a paid subscriber.')
        console.log("This is the result for the error message", errormessage)
        if (errormessage == false) {
          // If element1 exists, log a failure message
          console.log('Test failed: Error message displays : The signer you are attempting to send this document to is not a paid subscriber. ');
        } else {
            await page.click('text="Send for Signature"')
            console.log('Test passed: Send successful');
        }

    await page.waitForTimeout(3000);
  });







  test('Sender can send document when template is Interim Order ', async ({ page }) => {
    await page.goto(`https://new.suturesign.com/request/send`);


    //fill in template details 
    
    const templateSelect = 'span[class="k-input-value-text"]:has-text("-- Select One --")';
    await page.click(templateSelect);
    const spanText = await page.$eval(templateSelect, (span) => span.textContent.trim());
    console.log('Selected value:', spanText);
    const templateToSelect = 'Home Health - Interim Order';
    const templateSelector = `text=${templateToSelect}`;
    await page.click(templateSelector);
    await page.click('text="Template:"')


        //fill in signer details 

    await page.fill('input[id="SignerAutoComplete"]', `Test Signer`);
    await page.waitForTimeout(3500);
    // await page.fill('input[id="SignerAutoComplete"]', 'WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)');
    await page.click('text="Signer, EmailTest DO (NPI: 1111119111) Test Physician Office (Tampa, FL)"');
    await page.click('text="Signer:"')
    // const signerSelect = 'input[id="SignerAutoComplete"]:has-text("WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)")';
    // await page.click(signerSelect);
    await page.waitForTimeout(2000);


        //fill in patient details 

    const patientSelect = 'input[id="PatientAutoComplete"]';
    await page.click(patientSelect);
    await page.fill(patientSelect, `Bone`);
    await page.waitForTimeout(3500);
    const patientToSelect = 'Bone, Corina (DOB: 6/1/1953, MRN: 14CB1953)';
    const patientSelector = `text=${patientToSelect}`;
    // await page.fill(patientSelect, patientToSelect);
    await page.click(patientSelector);
    await page.click('text="Patient:"')


      //fill in upload file  


    await page.waitForSelector('input[type="file"][id="PdfContents"]');
    await page.setInputFiles('input[type="file"][id="PdfContents"]', '/Users/divyagupta/SutureHealth.BrowserAutomation/TestSupplemental-InterimOrder.pdf');
    await page.click('text="Upload Form:"')

  
        //fill in date picker details 
   
    const dateInputSelector = 'input[id="ClinicalDateDatePicker"]';  
    await page.fill(dateInputSelector, '01/15/2024');
    await page.click('text="Effective Date:"')


        //click send button 
    
    await page.click('.d-grid > button[type="submit"]')
    await page.waitForTimeout(3000);


        const errormessage = await page.isVisible('text="The signer you are attempting to send this document to is not a paid subscriber.')
        console.log("This is the result for the error message", errormessage)
        if (errormessage == false) {
          // If element1 exists, log a failure message
          console.log('Test failed: Error message displays : The signer you are attempting to send this document to is not a paid subscriber. ');
        } else {
            await page.click('text="Send for Signature"')
            console.log('Test passed: Send successful');
        }

    await page.waitForTimeout(3000);
  });








  test('Sender can send document when template is Home Health - Recertification ', async ({ page }) => {
    await page.goto(`https://new.suturesign.com/request/send`);


    //fill in template details 
    
    const templateSelect = 'span[class="k-input-value-text"]:has-text("-- Select One --")';
    await page.click(templateSelect);
    const spanText = await page.$eval(templateSelect, (span) => span.textContent.trim());
    console.log('Selected value:', spanText);
    const templateToSelect = 'Home Health - Recertification';
    const templateSelector = `text=${templateToSelect}`;
    await page.click(templateSelector);
    await page.click('text="Template:"')


        //fill in signer details 

    await page.fill('input[id="SignerAutoComplete"]', `Test Signer`);
    await page.waitForTimeout(3500);
    // await page.fill('input[id="SignerAutoComplete"]', 'WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)');
    await page.click('text="Signer, EmailTest DO (NPI: 1111119111) Test Physician Office (Tampa, FL)"');
    await page.click('text="Signer:"')
    // const signerSelect = 'input[id="SignerAutoComplete"]:has-text("WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)")';
    // await page.click(signerSelect);
    await page.waitForTimeout(2000);


        //fill in patient details 

    const patientSelect = 'input[id="PatientAutoComplete"]';
    await page.click(patientSelect);
    await page.fill(patientSelect, `Bone`);
    await page.waitForTimeout(3500);
    const patientToSelect = 'Bone, Corina (DOB: 6/1/1953, MRN: 14CB1953)';
    const patientSelector = `text=${patientToSelect}`;
    // await page.fill(patientSelect, patientToSelect);
    await page.click(patientSelector);
    await page.click('text="Patient:"')


      //fill in upload file  


    await page.waitForSelector('input[type="file"][id="PdfContents"]');
    await page.setInputFiles('input[type="file"][id="PdfContents"]', '/Users/divyagupta/SutureHealth.BrowserAutomation/TestSupplemental-InterimOrder.pdf');
    await page.click('text="Upload Form:"')

  
        //fill in date picker details 
   
    const dateInputSelector = 'input[id="ClinicalDateDatePicker"]';  
    await page.fill(dateInputSelector, '01/15/2024');
    await page.click('text="Effective Date:"')


        //click send button 
    
    await page.click('.d-grid > button[type="submit"]')
    await page.waitForTimeout(3000);


        const errormessage = await page.isVisible('text="The signer you are attempting to send this document to is not a paid subscriber.')
        console.log("This is the result for the error message", errormessage)
        if (errormessage == false) {
          // If element1 exists, log a failure message
          console.log('Test failed: Error message displays : The signer you are attempting to send this document to is not a paid subscriber. ');
        } else {
            await page.click('text="Send for Signature"')
            console.log('Test passed: Send successful');
        }

    await page.waitForTimeout(3000);
  });









  test('Sender can send document when template is Home Health - Face-to-Face ', async ({ page }) => {
    await page.goto(`https://new.suturesign.com/request/send`);


    //fill in template details 
    
    const templateSelect = 'span[class="k-input-value-text"]:has-text("-- Select One --")';
    await page.click(templateSelect);
    const spanText = await page.$eval(templateSelect, (span) => span.textContent.trim());
    console.log('Selected value:', spanText);
    const templateToSelect = 'Home Health - Face-to-Face';
    const templateSelector = `text=${templateToSelect}`;
    await page.click(templateSelector);
    await page.click('text="Template:"')


        //fill in signer details 

    await page.fill('input[id="SignerAutoComplete"]', `Test Signer`);
    await page.waitForTimeout(3500);
    // await page.fill('input[id="SignerAutoComplete"]', 'WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)');
    await page.click('text="Signer, EmailTest DO (NPI: 1111119111) Test Physician Office (Tampa, FL)"');
    await page.click('text="Signer:"')
    // const signerSelect = 'input[id="SignerAutoComplete"]:has-text("WithFreePrimary, SignerUserAtBoth MD (NPI: 1894651885) SignerOrgPaid (Tampa, FL)")';
    // await page.click(signerSelect);
    await page.waitForTimeout(2000);


        //fill in patient details 

    const patientSelect = 'input[id="PatientAutoComplete"]';
    await page.click(patientSelect);
    await page.fill(patientSelect, `Bone`);
    await page.waitForTimeout(3500);
    const patientToSelect = 'Bone, Corina (DOB: 6/1/1953, MRN: 14CB1953)';
    const patientSelector = `text=${patientToSelect}`;
    // await page.fill(patientSelect, patientToSelect);
    await page.click(patientSelector);
    await page.click('text="Patient:"')


      //fill in upload file  


    await page.waitForSelector('input[type="file"][id="PdfContents"]');
    await page.setInputFiles('input[type="file"][id="PdfContents"]', '/Users/divyagupta/SutureHealth.BrowserAutomation/TestSupplemental-InterimOrder.pdf');
    await page.click('text="Upload Form:"')

  
        //fill in date picker details 
   
    const dateInputSelector = 'input[id="ClinicalDateDatePicker"]';  
    await page.fill(dateInputSelector, '01/15/2024');
    await page.click('text="Effective Date:"')


        //click send button 
    
    await page.click('.d-grid > button[type="submit"]')
    await page.waitForTimeout(3000);


        const errormessage = await page.isVisible('text="The signer you are attempting to send this document to is not a paid subscriber.')
        console.log("This is the result for the error message", errormessage)
        if (errormessage == false) {
          // If element1 exists, log a failure message
          console.log('Test failed: Error message displays : The signer you are attempting to send this document to is not a paid subscriber. ');
        } else {
            await page.click('text="Send for Signature"')
            console.log('Test passed: Send successful');
        }

    await page.waitForTimeout(3000);
  });



});
